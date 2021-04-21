/* eslint no-underscore-dangle: ["error", { "allow": ["_author",_title] }] */

import InputValidator from "../utility/InputValidator.js";

class Book {
  constructor(title, author) {
    InputValidator.validateIsString("title", title);
    InputValidator.validateIsString("author", author);

    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }
}

Book.isClubNominee = (nominations) => {
  let answer = false;

  if (nominations) {
    const reduceFunction = (accum, nomination) =>
      accum && nomination.isClubNominee();

    answer = R.reduce(reduceFunction, true, nominations);
  }

  return answer;
};

export default Book;
