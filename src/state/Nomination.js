import InputValidator from "../utility/InputValidator.js";

class Nomination
{
   constructor(award, category, year, isWinner = false)
   {
      InputValidator.validateNotNull("award", award);
      InputValidator.validateNotNull("category", category);
      InputValidator.validateIsNumber("year", year);

      this._award = award;
      this._category = category;
      this._year = year;
      this._isWinner = isWinner;
   }

   get award()
   {
      return this._award;
   }

   get category()
   {
      return this._category;
   }

   get year()
   {
      return this._year;
   }

   get isWinner()
   {
      return this._isWinner;
   }

   toString()
   {
      return this.year + " " + this.award.name + " " + this.category.name;
   }
}

export default Nomination;