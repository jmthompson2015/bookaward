"use strict";

define(function()
{
   var Connector = {};

   Connector.BookTable = {
      mapStateToProps: function(state)
      {
         var nominees = [];

         state.books.forEach(function(book)
         {
            nominees.push(
            {
               book: book,
               dclUrl: state.bookToDclUrl[book],
               nominations: state.bookToNomination[book],
               assessmentKey: state.bookToAssessment[book],
            });
         });

         return (
         {
            nominees: nominees,
         });
      },
   };

   if (Object.freeze)
   {
      Object.freeze(Connector);
   }

   return Connector;
});