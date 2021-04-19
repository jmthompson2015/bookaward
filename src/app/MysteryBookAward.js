/* eslint no-console: ["error", { allow: ["log"] }] */

import Logger from "../utility/Logger.js";

import Action from "../model/Action.js";
import Reducer from "../model/Reducer.js";

import TableColumns from "./TableColumns.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);
const state = store.getState();
const selectOnChange = (book, assessmentKey) => {
  store.dispatch(Action.setAssessment(book, assessmentKey));
};

const mapFunction = (book) => ({
  title: book.title,
  author: book.author,
  book,
  dclUrl: state.bookToDclUrl[book],
  nominations: state.bookToNomination[book],
  assessmentKey: state.bookToAssessment[book],
  winnerImage: state.winnerImage,
  selectOnChange,
});

const tableRows = R.map(mapFunction, state.books);
const appName = "MysteryBookAward";
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
