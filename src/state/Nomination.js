/* eslint no-underscore-dangle: ["error", { "allow": ["_award",_category,_isWinner,_year] }] */

import InputValidator from "../utility/InputValidator.js";

import MysteryAward from "../artifact/MysteryAward.js";

class Nomination {
  constructor(award, category, year, isWinner = false) {
    InputValidator.validateNotNull("award", award);
    InputValidator.validateNotNull("category", category);
    InputValidator.validateIsNumber("year", year);

    this._award = award;
    this._category = category;
    this._year = year;
    this._isWinner = isWinner;
  }

  get award() {
    return this._award;
  }

  get category() {
    return this._category;
  }

  get year() {
    return this._year;
  }

  get isWinner() {
    return this._isWinner;
  }

  isClubNominee() {
    return this.award.key === MysteryAward.CRIME_AND_BEYOND;
  }

  toString() {
    return `${this.year} ${this.award.name} ${this.category.name}`;
  }
}

export default Nomination;
