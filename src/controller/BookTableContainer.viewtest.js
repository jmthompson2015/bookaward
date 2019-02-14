import Logger from "../utility/Logger.js";

import Reducer from "../model/Reducer.js";

import BookTableContainer from "./BookTableContainer.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);

const store = Redux.createStore(Reducer.root);

var element = React.createElement(ReactRedux.Provider,
{
   store: store,
}, React.createElement(BookTableContainer));
ReactDOM.render(element, document.getElementById("inputArea"));