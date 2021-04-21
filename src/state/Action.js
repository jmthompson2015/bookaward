const Action = {};

Action.ADD_BOOK = "addBook";
Action.ADD_BOOKS = "addBooks";
Action.ADD_BOOK_TO_NOMINATION = "addBookToNomination";
Action.ADD_NOMINATION = "addNomination";
Action.SET_APP_NAME = "setAppName";
Action.SET_ASSESSMENT = "setAssessment";
Action.SET_ASSESSMENTS = "setAssessments";
Action.SET_WINNER_IMAGE = "setWinnerImage";

// /////////////////////////////////////////////////////////////////////////////
// See https://redux.js.org/recipes/reducing-boilerplate
const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

Action.addBook = makeActionCreator(Action.ADD_BOOK, "book");

Action.addBooks = makeActionCreator(Action.ADD_BOOKS, "books");

Action.addBookToNomination = makeActionCreator(
  Action.ADD_BOOK_TO_NOMINATION,
  "bookToNomination"
);

Action.addNomination = makeActionCreator(
  Action.ADD_NOMINATION,
  "book",
  "nomination"
);

Action.setAppName = makeActionCreator(Action.SET_APP_NAME, "appName");

Action.setAssessment = makeActionCreator(
  Action.SET_ASSESSMENT,
  "book",
  "assessment"
);

Action.setAssessments = makeActionCreator(
  Action.SET_ASSESSMENTS,
  "bookToAssessment"
);

Action.setWinnerImage = makeActionCreator(
  Action.SET_WINNER_IMAGE,
  "winnerImage"
);

Object.freeze(Action);

export default Action;
