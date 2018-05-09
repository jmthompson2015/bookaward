import ArrayUtilities from "../utility/ArrayUtilities.js";
import Logger from "../utility/Logger.js";

import MysteryAward from "../artifact/MysteryAward.js";

import BookComparator from "../model/BookComparator.js";
import NominationComparator from "../model/NominationComparator.js";

import CrimeAndBeyondFetcher from "./CrimeAndBeyondFetcher.js";
import DCLURLFetcher from "./DCLURLFetcher.js";
import NomineeFetcher from "./SYKMNomineeFetcher.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

document.getElementById("statusBar0").innerHTML = "Loading...";

const books = [];
const bookToDclUrl = {};
const bookToNomination = {};
let count0 = 0;
let count1 = 0;
let missingCount = 0;

MysteryAward.values().forEach(function(awardKey)
{
   let fetcher;
   if (awardKey === MysteryAward.CRIME_AND_BEYOND)
   {
      fetcher = new CrimeAndBeyondFetcher(callback0);
   }
   else
   {
      const award = MysteryAward.properties[awardKey];
      fetcher = new NomineeFetcher(award, callback0);
   }

   fetcher.fetchData();
});

function callback0(newBooks, newBookToNomination)
{
   LOGGER.info("newBooks.length = " + newBooks.length);
   newBooks.forEach(function(book)
   {
      if (!ArrayUtilities.containsUsingEquals(books, book, BookComparator.equals))
      {
         books.push(book);
      }
   });
   LOGGER.info("Object.keys(newBookToNomination).length = " + Object.keys(newBookToNomination).length);
   Object.keys(newBookToNomination).forEach(function(key)
   {
      let nominations = bookToNomination[key];
      if (nominations === undefined)
      {
         nominations = [];
         bookToNomination[key] = nominations;
      }
      ArrayUtilities.addAll(nominations, newBookToNomination[key]);
   });
   count0++;

   document.getElementById("statusBar0").innerHTML = "count0 = " + count0 + " MysteryAward.values().length = " + MysteryAward.values().length;

   if (count0 === MysteryAward.values().length)
   {
      LOGGER.info("books.length = " + books.length);

      // Sort the books.
      books.sort(BookComparator.compare);

      // Sort the nominations.
      books.forEach(function(book)
      {
         const nominations = bookToNomination[book];
         if (nominations.length > 1)
         {
            nominations.sort(NominationComparator.compare);
         }
      });

      // Fetch the Douglas County Libraries URLs.
      books.forEach(function(book)
      {
         const fetcher = new DCLURLFetcher(book, callback1);
         setTimeout(fetcher.fetchData(), 500);
      });
   }
}

function callback1(book, dclUrl)
{
   bookToDclUrl[book] = dclUrl;
   count1++;
   if (dclUrl === undefined)
   {
      missingCount++;
   }

   document.getElementById("statusBar1").innerHTML = "count1 = " + count1 + " books.length = " + books.length + " missingCount = " + missingCount;

   if (count1 === books.length)
   {
      LOGGER.info("Object.keys(bookToDclUrl).length = " + Object.keys(bookToDclUrl).length);
      LOGGER.info("missingCount = " + missingCount);
      let content = MysteryAward.values().reduce(function(previousValue, awardKey)
      {
         const awardString = "const " + awardKey + " = MysteryAward.properties." + awardKey + ";<br/>";
         return previousValue + awardString;
      }, "");
      content += "<br/>";
      content += books.reduce(function(previousValue, book)
      {
         let bookString = "this.books.push(new Book(";
         bookString += "\"" + book.title + "\", ";
         bookString += "\"" + book.author + "\"));<br/>";
         return previousValue + bookString;
      }, "");
      content += "<br/>";
      content += books.reduce(function(previousValue, book, i)
      {
         let bookString = "";
         const dclUrl = bookToDclUrl[book];
         if (dclUrl !== undefined)
         {
            bookString = "this.bookToDclUrl[this.books[" + i + "]] = ";
            bookString += "\"" + dclUrl + "\";<br/>";
         }
         return previousValue + bookString;
      }, "");
      content += "<br/>this.initializeBookToNomination();<br/><br/>";
      content += books.reduce(function(previousValue, book, i)
      {
         const nominations = bookToNomination[book];
         const nominationsString = nominations.reduce(function(previousValue2, nomination)
         {
            let nominationString = "this.bookToNomination[this.books[" + i + "]].push(new Nomination(";
            nominationString += nomination.award.value + ", ";
            nominationString += nomination.award.value + ".categories.properties." + nomination.category.value + ", ";
            nominationString += nomination.year + ", ";
            nominationString += nomination.isWinner + "));<br/>";
            return previousValue2 + nominationString;
         }, "");
         return previousValue + nominationsString;
      }, "");
      content += "<br/>this.initializeBookToAssessment();<br/>";
      content += "this.loadBookToAssessment();<br/>";

      document.getElementById("bookTablePanel").innerHTML = content;
      document.getElementById("statusBar0").innerHTML = "";
      document.getElementById("statusBar1").innerHTML = "";
   }
}