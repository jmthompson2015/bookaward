import Logger from "../utility/Logger.js";

import Action from "../model/Action.js";
import Reducer from "../model/Reducer.js";
import UserSettings from "../model/UserSettings.js";

import BookTable from "../view/BookTable.js";

import Connector from "./Connector.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

var store = Redux.createStore(Reducer.root);

var connector = ReactRedux.connect(Connector.BookTable.mapStateToProps)(BookTable);
var element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(connector));

ReactDOM.render(element, document.getElementById("bookTablePanel"));

document.getElementById("resetAssessmentsButton").onclick = resetAssessments;

function resetAssessments()
{
   var bookToAssessment = store.getState().bookToAssessment;
   var books = store.getState().books;
   var bookToDclUrl = store.getState().bookToDclUrl;
   var bookToNomination = store.getState().bookToNomination;
   bookToAssessment = UserSettings.resetBookToAssessment(bookToAssessment, books, bookToDclUrl, bookToNomination);

   UserSettings.storeBookToAssessment(bookToAssessment);
   store.dispatch(Action.setAssessments(bookToAssessment));
}