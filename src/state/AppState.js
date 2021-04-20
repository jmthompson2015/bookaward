const AppState = {};

AppState.create = ({
  appName,
  books = [],
  bookToNomination = {},
  bookToAssessment = {},
  winnerImage,
} = {}) =>
  Immutable({
    appName,
    books,
    bookToNomination,
    bookToAssessment,
    winnerImage,
  });

Object.freeze(AppState);

export default AppState;
