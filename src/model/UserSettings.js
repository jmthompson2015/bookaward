import InputValidator from "../utility/InputValidator.js";
import ObjectUtilities from "../utility/ObjectUtilities.js";

import Assessment from "../artifact/Assessment.js";
import MysteryAward from "../artifact/MysteryAward.js";

const UserSettings = {};

UserSettings.loadBookToAssessment = () => {
  const answer = {};

  const bookToAssessment = localStorage.getItem("bookToAssessment");

  if (bookToAssessment) {
    const myBookToAssessment = JSON.parse(bookToAssessment);

    if (myBookToAssessment) {
      ObjectUtilities.merge(answer, myBookToAssessment);
    }
  }

  return answer;
};

UserSettings.resetBookToAssessment = (
  bookToAssessment,
  books,
  bookToDclUrl,
  bookToNomination
) => {
  InputValidator.validateNotNull("bookToAssessment", bookToAssessment);
  InputValidator.validateNotNull("books", books);
  InputValidator.validateNotNull("bookToDclUrl", bookToDclUrl);
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

UserSettings.storeBookToAssessment = (bookToAssessment) => {
  InputValidator.validateNotNull("bookToAssessment", bookToAssessment);

  localStorage.setItem("bookToAssessment", JSON.stringify(bookToAssessment));
  LOGGER.debug("bookToAssessment stored to localStorage");
};

export default UserSettings;
