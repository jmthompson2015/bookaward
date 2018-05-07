import Reducer from "./Reducer.js";
import SciFiInitialState from "./SciFiInitialState.js";

var SciFiReducer = {};

SciFiReducer.root = function(state, action)
{
   if (typeof state === 'undefined')
   {
      return new SciFiInitialState();
   }

   return Reducer.root(state, action);
};

if (Object.freeze)
{
   Object.freeze(SciFiReducer);
}

export default SciFiReducer;