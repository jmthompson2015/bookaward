import BookTable from "../view/BookTable.js";

function mapStateToProps(state)
{
   const nominees = [];

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
}

export default ReactRedux.connect(mapStateToProps)(BookTable);