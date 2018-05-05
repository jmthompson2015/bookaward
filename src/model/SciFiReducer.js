"use strict";

define(["model/SciFiInitialState", "model/Reducer"],
   function(SciFiInitialState, Reducer)
   {
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

      return SciFiReducer;
   });