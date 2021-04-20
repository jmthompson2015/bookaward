import ArrayUtilities from "../utility/ArrayUtilities.js";

import Assessment from "../artifact/Assessment.js";

import Action from "./Action.js";
import AppState from "./AppState.js";
import BookComparator from "./BookComparator.js";
import UserSettings from "./UserSettings.js";

const Reducer = {};

Reducer.root = (state, action) => {
  LOGGER.debug(`root() type = ${action.type}`);

  if (typeof state === "undefined") {
    return AppState.create();
  }

  let newBooks;
  let newBookToAssessment;
  let newBookToNomination;

  switch (action.type) {
    case Action.ADD_BOOK:
      LOGGER.info(`Reducer book = ${action.book}`);
      newBooks = [];
      ArrayUtilities.addAll(newBooks, state.books);
      newBooks.push(action.book);
      newBookToNomination = { ...state.bookToNomination };
      newBookToNomination[action.book] = [];
      newBookToAssessment = { ...state.bookToAssessment };
      newBookToAssessment[action.book] = Assessment.NONE;
      return {
        ...state,
        books: newBooks,
        bookToNomination: newBookToNomination,
        bookToAssessment: newBookToAssessment,
      };
    case Action.ADD_BOOKS:
      LOGGER.info(
        `Reducer ADD_BOOKS action.books.length = ${action.books.length}`
      );
      newBooks = R.concat(action.books, state.books);
      newBooks = R.uniq(newBooks);
      newBooks.sort(BookComparator.compare);
      return R.assoc("books", newBooks, state);
    case Action.ADD_BOOK_TO_NOMINATION:
      newBookToNomination = R.mergeRight(
        state.bookToNomination,
        action.bookToNomination
      );
      return R.assoc("bookToNomination", newBookToNomination, state);
    case Action.ADD_NOMINATION:
      LOGGER.info(`Reducer book = ${action.book}`);
      LOGGER.info(`Reducer nomination = ${action.nomination}`);
      newBookToNomination = { ...state.bookToNomination };
      if (newBookToNomination[action.book] === undefined) {
        throw new Error(
          `Missing bookToNomination array for book: ${action.book}`
        );
      }
      newBookToNomination[action.book].push(action.nomination);
      return { ...state, bookToNomination: newBookToNomination };
    case Action.SET_APP_NAME:
      LOGGER.info(`Reducer SET_APP_NAME appName = ${action.appName}`);
      return R.assoc("appName", action.appName, state);
    case Action.SET_ASSESSMENT:
      LOGGER.info(`Reducer book = ${action.book}`);
      LOGGER.info(`Reducer assessment = ${action.assessment}`);
      newBookToAssessment = { ...state.bookToAssessment };
      if (newBookToAssessment[action.book] === undefined) {
        throw new Error(
          `Missing bookToAssessment entry for book: ${action.book}`
        );
      }
      newBookToAssessment[action.book] = action.assessment;
      UserSettings.storeBookToAssessment(state.appName, newBookToAssessment);
      return { ...state, bookToAssessment: newBookToAssessment };
    case Action.SET_ASSESSMENTS:
      LOGGER.info(`Reducer bookToAssessment = ${action.bookToAssessment}`);
      newBookToAssessment = R.mergeRight(
        state.bookToAssessment,
        action.bookToAssessment
      );
      UserSettings.storeBookToAssessment(state.appName, newBookToAssessment);
      return { ...state, bookToAssessment: newBookToAssessment };
    case Action.SET_WINNER_IMAGE:
      return R.assoc("winnerImage", action.winnerImage, state);
    default:
      LOGGER.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

if (Object.freeze) {
  Object.freeze(Reducer);
}

export default Reducer;
