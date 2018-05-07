import InputValidator from "../utility/InputValidator.js";
import ObjectUtilities from "../utility/ObjectUtilities.js";

import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

var UserSettings = {};

UserSettings.loadBookToAssessment = function()
{
   var answer = {};

   var bookToAssessment = localStorage.getItem("bookToAssessment");

   if (bookToAssessment)
   {
      var myBookToAssessment = JSON.parse(bookToAssessment);

      if (myBookToAssessment)
      {
         ObjectUtilities.merge(answer, myBookToAssessment);
      }
   }

   return answer;
};

UserSettings.resetBookToAssessment = function(bookToAssessment, books, bookToDclUrl, bookToNomination)
{
   InputValidator.validateNotNull("bookToAssessment", bookToAssessment);
   InputValidator.validateNotNull("books", books);
   InputValidator.validateNotNull("bookToDclUrl", bookToDclUrl);
   InputValidator.validateNotNull("bookToNomination", bookToNomination);

   var answer = Object.assign(
   {}, bookToAssessment);

   books.forEach(function(book)
   {
      answer[book] = Assessment.NONE;

      var nominations = bookToNomination[book];

      if (nominations)
      {
         var clubNominations = nominations.filter(function(nomination)
         {
            return nomination.award().value === MysteryAward.CRIME_AND_BEYOND;
         });

         if (clubNominations.length > 0)
         {
            answer[book] = Assessment.BOOK_CLUB_PICK;
         }
         else if (bookToDclUrl[book] === undefined)
         {
            answer[book] = Assessment.NOT_AVAILABLE;
         }
      }
   });

   return answer;
};

UserSettings.storeBookToAssessment = function(bookToAssessment)
{
   InputValidator.validateNotNull("bookToAssessment", bookToAssessment);

   localStorage.setItem("bookToAssessment", JSON.stringify(bookToAssessment));
   LOGGER.debug("bookToAssessment stored to localStorage");
};

export default UserSettings;