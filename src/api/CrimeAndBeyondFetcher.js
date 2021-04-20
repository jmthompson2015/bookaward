/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

const addTitleAndAuthor = (
  books,
  bookToNomination0,
  titleAndAuthor,
  nomination
) => {
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
    return new Promise((resolve) => {
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

        // let nomination = new Nomination(this.award, this.category, 2017);
        // let titleAndAuthor = [
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
        // ["The Nowhere Man", "Gregg Hurwitz"],
        // ["A Christmas Party", "Georgette Heyer"],
        // ];
        // addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        // let nomination = new Nomination(this.award, this.category, 2018);
        // let titleAndAuthor = [
        //   ["Every Last Lie", "Mary Kubica"],
        //   ["I See You", "Clare Mackintosh"],
        //   ["The Couple Next Door", "Shari Lapena"],
        //   ["The Late Show", "Michael Connelly"],
        //   ["Crime Scene", "Jonathan and Jesse Kellerman"],
        //   ["Hellbent", "Gregg Hurwitz"],
        //   ["I Know a Secret", "Tess Gerritsen"],
        //   ["Two Kinds of Truth", "Michael Connelly"],
        //   ["Magpie Murders", "Anthony Horowitz"],
        //   ["The Hush", "John Hart"],
        //   ["The Woman in the Window", "A.J. Finn"],
        //   ["Christmas Crimes at Puzzel Manor", "Simon Brett"],
        // ];
        // addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        let nomination = new Nomination(this.award, this.category, 2019);
        let titleAndAuthor = [
          ["The Fallen", "David Baldacci"],
          ["Bring Me Back", "B.A. Paris"],
          ["The Dry", "Jane Harper"],
          ["Under My Skin", "Lisa Unger"],
          ["The Witch Elm", "Tana French"],
          ["Dark Sacred Night", "Michael Connelly"],
          ["Pieces of Her", "Karin Slaughter"],
          ["The Death of Mrs. Westaway", "Ruth Ware"],
          ["Where the Crawdads Sing", "Delia Owens"],
          ["Lethal White", "Robert Galbraith"],
          ["Sweet Little Lies", "Caz Frear"],
          ["The Santa Klaus Murder", "Mavis Doriel Hay"],
        ];
        addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        nomination = new Nomination(this.award, this.category, 2020);
        titleAndAuthor = [
          ["Force of Nature ", "Jane Harper"],
          ["The Escape Room", "Megan Goldin"],
          ["The Silent Patient", "Alex Michaelides"],
          ["The Word is Murder", "Anthony Horowitz"],
          ["The Lost Man", "Jane Harper"],
          ["Eight Perfect Murders", "Peter Swanson"],
          ["The Department of Sensitive Crimes", "Alexander McCall Smith"],
          ["The Family Upstairs", "Lisa Jewell"],
          ["Camino Winds", "John Grisham"],
          ["Nine Perfect Strangers", "Liane Moriarty"],
          ["The Turn of the Key", "Ruth Ware"],
          ["Crime at Christmas", "C.H.B. Kitchin"],
        ];
        addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);

        nomination = new Nomination(this.award, this.category, 2021);
        titleAndAuthor = [
          ["The Eighth Detective", "Alex Pavesi"],
          ["The Last Trial", "Scott Turow"],
          ["The Boy from the Woods", "Harlan Coben"],
          ["The Killings at Kingfisher Hill", "Sophie Hannah"],
          ["The Night Swim", "Megan Goldin"],
          ["Fair Warning", "Michael Connelly"],
          ["Confessions on the 7:45", "Lisa Unger"],
          ["The Bone Jar", "S. W. Kane"],
          ["The Survivors", "Jane Harper"],
          ["The Thursday Murder Club", "Richard Osman"],
          ["Win", "Harlan Coben"],
          ["Tied Up in Tinsel", "Ngaio Marsh"],
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
