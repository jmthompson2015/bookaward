import InputValidator from "../utility/InputValidator.js";

import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

const fetchItem = (appName) => {
  const oldItemString = localStorage.getItem(appName);

  return oldItemString !== undefined ? JSON.parse(oldItemString) : {};
};

const UserSettings = {};

UserSettings.loadBookToAssessment = (appName) => {
  const item = fetchItem(appName);

  return item && item.bookToAssessment
    ? Immutable(item.bookToAssessment)
    : Immutable({});
};

UserSettings.resetBookToAssessment = (
  bookToAssessment,
  books,
  bookToNomination
) => {
  InputValidator.validateNotNull("bookToAssessment", bookToAssessment);
  InputValidator.validateNotNull("books", books);
  InputValidator.validateNotNull("bookToNomination", bookToNomination);

  const answer = { ...bookToAssessment };

  books.forEach((book) => {
    answer[book] = Assessment.NONE;

    const nominations = bookToNomination[book];

    if (nominations) {
      const clubNominations = nominations.filter(
        (nomination) => nomination.award.key === MysteryAward.CRIME_AND_BEYOND
      );

      if (clubNominations.length > 0) {
        answer[book] = Assessment.BOOK_CLUB_PICK;
      }
    }
  });

  return answer;
};

UserSettings.storeBookToAssessment = (appName, bookToAssessment) => {
  const oldItem = fetchItem(appName);
  const newItem = R.mergeRight(oldItem, { bookToAssessment });

  localStorage.setItem(appName, JSON.stringify(newItem));
};

export default UserSettings;
