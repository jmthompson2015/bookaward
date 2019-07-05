/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../model/Book.js";
import Nomination from "../model/Nomination.js";

const addTitleAndAuthor = (books, bookToNomination0, titleAndAuthor, nomination) => {
  const bookToNomination = bookToNomination0;

  for (let i = 0; i < titleAndAuthor.length; i += 1) {
    const book = new Book(titleAndAuthor[i][0], titleAndAuthor[i][1]);
    books.push(book);
    bookToNomination[book] = [nomination];
  }
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
class CrimeAndBeyondFetcher {
  constructor() {
    this._award = MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND];
  }

  get award() {
    return this._award;
  }

  get category() {
    const categoryKey = this.award.categories.CASE;

    return this.award.categories.properties[categoryKey];
  }

  fetchData() {
    return new Promise(resolve => {
      const receiveData = () => {
        const books = [];
        const bookToNomination = {};

        // let nomination = new Nomination(this.award, this.category, 2016);
        //
        // let titleAndAuthor = [
        // ["Blood On Snow", "Jo Nesbø"],
        // ["Crazy Love You", "Lisa Unger"],
        // ["The Killer Next Door", "Alex Marwood"],
        // ["The Stranger", "Harlan Coben"],
        // ["Vanishing Games", "Roger Hobbs"],
        // ["Make Me", "Lee Child"],
        // ["The Promise", "Robert Crais"],
        // ["The Guilty", "David Baldacci"],
        // ["The Crossing", "Michael Connelly"],
        // ["The Travelers", "Chris Pavone"],
        // ["Redemption Road", "John Hart"],
        // ["Ink and Bone", "Lisa Unger"]
        // ];
        // addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        let nomination = new Nomination(this.award, this.category, 2017);
        let titleAndAuthor = [
          // ["The Last Painting of Sara de Vos", "Dominic Smith"],
          // ["Fool Me Once", "Harlan Coben"],
          // ["Marked for Life", "Emelie Schepp"],
          // ["The English Spy", "Daniel Silva"],
          // ["Orphan X", "Gregg Hurwitz"],
          // ["The Black Widow", "Daniel Silva"],
          // ["The Woman in Cabin 10", "Ruth Ware"],
          // ["In a Dark, Dark Wood", "Ruth Ware"],
          // ["The Wrong Side of Goodbye", "Michael Connelly"],
          // ["Home", "Harlan Coben"],
          ["The Nowhere Man", "Gregg Hurwitz"],
          ["A Christmas Party", "Georgette Heyer"]
        ];
        addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        nomination = new Nomination(this.award, this.category, 2018);
        titleAndAuthor = [
          ["Every Last Lie", "Mary Kubica"],
          ["I See You", "Clare Mackintosh"],
          ["The Couple Next Door", "Shari Lapena"],
          ["The Late Show", "Michael Connelly"],
          ["Crime Scene", "Jonathan and Jesse Kellerman"],
          ["Hellbent", "Gregg Hurwitz"],
          ["I Know a Secret", "Tess Gerritsen"],
          ["Two Kinds of Truth", "Michael Connelly"],
          ["Magpie Murders", "Anthony Horowitz"],
          ["The Hush", "John Hart"],
          ["The Woman in the Window", "A.J. Finn"],
          ["Christmas Crimes at Puzzel Manor", "Simon Brett"]
        ];
        addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        nomination = new Nomination(this.award, this.category, 2019);
        titleAndAuthor = [
          ["The Fallen", "David Baldacci"],
          ["Bring Me Back", "B.A. Paris"],
          ["The Dry", "Jane Harper"],
          ["Under My Skin", "Lisa Unger"],
          ["The Witch Elm", "Tana French"],
          ["Dark Sacred Night", "Michael Connelly"],
          ["Pieces of Her", "Karin Slaughter"],
          ["The Death of Mrs. Westaway", "Ruth Ware"],
          ["Where the Crawdads Sing", "Delia Owens"],
          ["Lethal White", "Robert Galbraith"]
        ];
        addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        console.info(`${this.award.name} books.length = ${books.length}`);
        resolve({ books, bookToNomination });
      };

      receiveData();
    });
  }
}

export default CrimeAndBeyondFetcher;
