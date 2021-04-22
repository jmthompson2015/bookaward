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
    case Action.ADD_BOOKS:
      LOGGER.info(
        `Reducer ADD_BOOKS action.books.length = ${action.books.length}`
      );
      newBooks = R.concat(action.books, state.books);
      newBooks = R.uniq(newBooks);
      newBooks.sort(BookComparator.compare);
      return { ...state, books: newBooks };
    case Action.ADD_BOOK_TO_NOMINATION:
      LOGGER.info(
        `Reducer ADD_BOOK_TO_NOMINATION bookToNomination = ${action.bookToNomination}`
      );
      newBookToNomination = R.mergeDeepWith(
        R.concat,
        state.bookToNomination,
        action.bookToNomination
      );
      return { ...state, bookToNomination: newBookToNomination };
    case Action.SET_APP_NAME:
      LOGGER.info(`Reducer SET_APP_NAME appName = ${action.appName}`);
      return { ...state, appName: action.appName };
    case Action.SET_ASSESSMENT:
      LOGGER.info(
        `Reducer book = ${action.book} assessment = ${action.assessment}`
      );
      newBookToAssessment = {
        ...state.bookToAssessment,
        [action.book]: action.assessment,
      };
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
      LOGGER.info(
        `Reducer SET_WINNER_IMAGE winnerImage = ${action.winnerImage}`
      );
      return { ...state, winnerImage: action.winnerImage };
    default:
      LOGGER.warn(`Reducer.root: Unhandled action type: ${action.type}`);
      return state;
  }
};

if (Object.freeze) {
  Object.freeze(Reducer);
}

export default Reducer;
