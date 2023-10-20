/* eslint no-console: ["error", { allow: ["info"] }] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_award"] }] */

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "../state/Book.js";
import Nomination from "../state/Nomination.js";

const addTitleAndAuthor = (
  books,
  bookToNomination0,
  titleAndAuthor,
  nomination,
) => {
  const bookToNomination = bookToNomination0;

  for (let i = 0; i < titleAndAuthor.length; i += 1) {
    const book = new Book(titleAndAuthor[i][0], titleAndAuthor[i][1]);
    books.push(book);
    bookToNomination[book] = [nomination];
  }
};

const fetchData2016 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2016);
  let titleAndAuthor = [
    ["Blood On Snow", "Jo Nesbø"],
    ["Crazy Love You", "Lisa Unger"],
    ["The Killer Next Door", "Alex Marwood"],
    ["The Stranger", "Harlan Coben"],
    ["Vanishing Games", "Roger Hobbs"],
    ["Make Me", "Lee Child"],
    ["The Promise", "Robert Crais"],
    ["The Guilty", "David Baldacci"],
    ["The Crossing", "Michael Connelly"],
    ["The Travelers", "Chris Pavone"],
    ["Redemption Road", "John Hart"],
    ["Ink and Bone", "Lisa Unger"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2017 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2017);
  let titleAndAuthor = [
    ["The Last Painting of Sara de Vos", "Dominic Smith"],
    ["Fool Me Once", "Harlan Coben"],
    ["Marked for Life", "Emelie Schepp"],
    ["The English Spy", "Daniel Silva"],
    ["Orphan X", "Gregg Hurwitz"],
    ["The Black Widow", "Daniel Silva"],
    ["The Woman in Cabin 10", "Ruth Ware"],
    ["In a Dark, Dark Wood", "Ruth Ware"],
    ["The Wrong Side of Goodbye", "Michael Connelly"],
    ["Home", "Harlan Coben"],
    ["The Nowhere Man", "Gregg Hurwitz"],
    ["A Christmas Party", "Georgette Heyer"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2018 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2018);
  let titleAndAuthor = [
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
    ["Christmas Crimes at Puzzel Manor", "Simon Brett"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2019 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2019);
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
};

const fetchData2020 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2020);
  let titleAndAuthor = [
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
};

const fetchData2021 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2021, true);
  let titleAndAuthor = [
    ["The Eighth Detective", "Alex Pavesi"],
    ["The Last Trial", "Scott Turow"],
    ["The Boy from the Woods", "Harlan Coben"],
    ["The Killings at Kingfisher Hill", "Sophie Hannah"],
    ["The Night Swim", "Megan Goldin"],
    ["Fair Warning", "Michael Connelly"],
    ["Confessions on the 7:45", "Lisa Unger"],
    ["The Bone Jar", "S.W. Kane"],
    ["The Survivors", "Jane Harper"],
    ["The Thursday Murder Club", "Richard Osman"],
    ["Win", "Harlan Coben"],
    ["Tied Up in Tinsel", "Ngaio Marsh"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2022 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2022, true);
  let titleAndAuthor = [
    ["A Line to Kill", "Anthony Horowitz"],
    ["The Law of Innocence", "Michael Connelly"],
    ["The Maidens", "Alex Michaelides"],
    ["False Witness", "Karin Slaughter"],
    ["The Paris Apartment", "Lucy Foley"],
    ["The Match", "Harlan Coben"],
    ["The Man Who Died Twice", "Richard Osman"],
    ["The House of Silk", "Anthony Horowitz"],
    ["The Last Flight", "Julie Clark"],
    ["The 6:20 Man", "David Baldacci"],
    ["Nine Lives", "Peter Swanson"],
    ["Kissing Christmas Goodbye", "M.C. Beaton"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2023 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2023, true);
  let titleAndAuthor = [
    ["Suburban Dicks", "Fabian Nicieza"],
    ["Daisy Darker", "Alice Feeney"],
    ["Stay Awake", "Megan Goldin"],
    ["The It Girl", "Ruth Ware"],
    ["The Retreat", "Sarah Pearse"],
    ["The Lies I Tell", "Julie Clark"],
    ["The Bullet That Missed", "Richard Osman"],
    ["No Plan B", "Lee Child"],
    ["Whatever Happened to Cathy Martin", "Mim Eichmann"],
    ["Are You Sara?", "S.C. Lalli"],
    ["Marple: Twelve New Mysteries", "Agatha Christie"],
    ["The Christmas Murder Game", "Alexandra Benedict"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
};

const fetchData2024 = (books, bookToNomination, award, category) => {
  let nomination = new Nomination(award, category, 2024, true);
  let titleAndAuthor = [
    ["The Only One Left", "Riley Sager"],
    ["The Twist of a Knife", "Anthony Horowitz"],
    ["Dark Corners", "Megan Goldin"],
    ["Exiles", "Jane Harper"],
    ["I Will Find You", "Harlan Coben"],
    ["Mother-Daughter Murder Night", "Nina Simon"],
    ["The Man with a Load of Mischief", "Martha Grimes"],
  ];
  addTitleAndAuthor(books, bookToNomination, titleAndAuthor, nomination);
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

        // fetchData2016(books, bookToNomination, this.award, this.category);
        // fetchData2017(books, bookToNomination, this.award, this.category);
        // fetchData2018(books, bookToNomination, this.award, this.category);
        // fetchData2019(books, bookToNomination, this.award, this.category);
        // fetchData2020(books, bookToNomination, this.award, this.category);
        fetchData2021(books, bookToNomination, this.award, this.category);
        fetchData2022(books, bookToNomination, this.award, this.category);
        fetchData2023(books, bookToNomination, this.award, this.category);
        fetchData2024(books, bookToNomination, this.award, this.category);

        console.info(`${this.award.name} books.length = ${books.length}`);
        resolve({ books, bookToNomination });
      };

      receiveData();
    });
  }
}

export default CrimeAndBeyondFetcher;
