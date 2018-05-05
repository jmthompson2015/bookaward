"use strict";

require(["model/UserSettings", "utility/Logger", "model/Action", "model/SciFiReducer", "view/BookTable", "controller/Connector"],
   function(UserSettings, Logger, Action, Reducer, BookTable, Connector)
   {
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
   });