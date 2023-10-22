/* eslint no-console: ["error", { allow: ["log"] }] */

import Logger from "../utility/Logger.js";

import Assessment from "../artifact/Assessment.js";

import Action from "../state/Action.js";
import Book from "../state/Book.js";
import Reducer from "../state/Reducer.js";
import UserSettings from "../state/UserSettings.js";

import TableColumns from "./TableColumns.js";

const BookAward = {};

BookAward.execute = (appName, bookLoader, winnerImage) => {
  window.LOGGER = new Logger();
  LOGGER.setTraceEnabled(false);
  LOGGER.setDebugEnabled(false);

  const store = Redux.createStore(Reducer.root);
  store.dispatch(Action.setAppName(appName));
  store.dispatch(Action.setWinnerImage(winnerImage));

  const callback = () => {
    // store.dispatch(
    //   Action.setAssessments(
    //     UserSettings.resetBookToAssessment(
    //       store.getState().bookToAssessment,
    //       store.getState().books,
    //       store.getState().bookToNomination
    //     )
    //   )
    // );
    store.dispatch(
      Action.setAssessments(UserSettings.loadBookToAssessment(appName)),
    );

    const state = store.getState();
    const selectOnChange = (book, assessmentKey) => {
      store.dispatch(Action.setAssessment(book, assessmentKey));
    };

    const mapFunction = (book) => {
      const nominations = state.bookToNomination[book] || [];
      const nominationsString =
        nominations && nominations.length > 0
          ? R.map(
              (n) => (n.isWinner ? `winner ` : "") + n.toString(),
              nominations,
            ).join(", ")
          : "";
      const assessmentKey = Book.isClubNominee(nominations)
        ? Assessment.BOOK_CLUB_PICK
        : state.bookToAssessment[book] || Assessment.NONE;

      return {
        title: book.title,
        author: book.author,
        book,
        nominations,
        nominationsString,
        assessmentKey,
        winnerImage: state.winnerImage,
        selectOnChange,
      };
    };

    const tableRows = R.map(mapFunction, state.books);
    const onFilterChange = () => {
      console.log(`onFilterChange()`);
    };
    const onShowColumnChange = () => {
      console.log(`onShowColumnChange()`);
    };
    const isVerbose = false;
    const frt = new FilteredReactTable({
      tableColumns: TableColumns,
      tableRows,
      appName,
      onFilterChange,
      onShowColumnChange,
      isVerbose,
    });

    const collapsiblePaneProps = {
      className: "bg-ba-dark ma1",
      titleClass: "b f5 ph1 pt1 tl white",
    };
    const dataTableProps = { rowClass: "striped--ba-light" };
    ReactDOM.render(
      frt.filterPanel(collapsiblePaneProps),
      document.getElementById("filter"),
    );
    ReactDOM.render(
      frt.showColumnsPanel(collapsiblePaneProps),
      document.getElementById("showColumns"),
    );
    ReactDOM.render(
      frt.tableElement(dataTableProps),
      document.getElementById("tabPanel"),
    );
  };

  bookLoader.load(store).then(callback);
};

Object.freeze(BookAward);

export default BookAward;
