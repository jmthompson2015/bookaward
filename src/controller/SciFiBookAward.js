import Logger from "../utility/Logger.js";

import Action from "../model/Action.js";
import Reducer from "../model/SciFiReducer.js";
import UserSettings from "../model/UserSettings.js";

import BookTableContainer from "./BookTableContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

const element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(BookTableContainer));

ReactDOM.render(element, document.getElementById("bookTablePanel"));

document.getElementById("resetAssessmentsButton").onclick = resetAssessments;

function resetAssessments()
{
   let bookToAssessment = store.getState().bookToAssessment;
   const books = store.getState().books;
   const bookToDclUrl = store.getState().bookToDclUrl;
   const bookToNomination = store.getState().bookToNomination;
   bookToAssessment = UserSettings.resetBookToAssessment(bookToAssessment, books, bookToDclUrl, bookToNomination);

   UserSettings.storeBookToAssessment(bookToAssessment);
   store.dispatch(Action.setAssessments(bookToAssessment));
}