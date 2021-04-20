import InputValidator from "../utility/InputValidator.js";

const BookComparator = {
  compare(a, b) {
    InputValidator.validateNotNull("a", a);
    InputValidator.validateNotNull("b", b);

    let answer = 0;
    const aString = BookComparator.prepareName(a.toString());
    const bString = BookComparator.prepareName(b.toString());

    if (aString < bString) {
      answer = -1;
    } else if (aString > bString) {
      answer = 1;
    }

    return answer;
  },

  equals(a, b) {
    InputValidator.validateNotNull("a", a);
    InputValidator.validateNotNull("b", b);

    return a.title === b.title && a.author === b.author;
  },
};

BookComparator.prepareName = (string) => {
  InputValidator.validateNotNull("string", string);

  let answer = string;

  answer = answer.startsWith("A ") ? answer.replace("A ", "") : answer;
  answer = answer.startsWith("An ") ? answer.replace("An ", "") : answer;
  answer = answer.startsWith("The ") ? answer.replace("The ", "") : answer;

  return answer;
};

export default BookComparator;
