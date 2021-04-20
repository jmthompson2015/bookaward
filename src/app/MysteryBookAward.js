/* eslint no-console: ["error", { allow: ["log"] }] */

import Logger from "../utility/Logger.js";

import Action from "../state/Action.js";
import Reducer from "../state/Reducer.js";
import UserSettings from "../state/UserSettings.js";

import MysteryBookLoader from "../model/MysteryBookLoader.js";

import TableColumns from "./TableColumns.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);
const APP_NAME = "MysteryBookAward";
store.dispatch(Action.setAppName(APP_NAME));
store.dispatch(Action.setWinnerImage("../resource/image/BloodSplatter14.png"));

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
    Action.setAssessments(UserSettings.loadBookToAssessment(APP_NAME))
  );

  const state = store.getState();
  const selectOnChange = (book, assessmentKey) => {
    console.log(
      `selectOnChange() book = ${book} assessmentKey = ${assessmentKey}`
    );
    store.dispatch(Action.setAssessment(book, assessmentKey));
  };

  const mapFunction = (book) => ({
    title: book.title,
    author: book.author,
    book,
    nominations: state.bookToNomination[book],
    assessmentKey: state.bookToAssessment[book],
    winnerImage: state.winnerImage,
    selectOnChange,
  });

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
    appName: APP_NAME,
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
    document.getElementById("filter")
  );
  ReactDOM.render(
    frt.showColumnsPanel(collapsiblePaneProps),
    document.getElementById("showColumns")
  );
  ReactDOM.render(
    frt.tableElement(dataTableProps),
    document.getElementById("tabPanel")
  );
};

MysteryBookLoader.load(store).then(callback);
