const NominationComparator = {
  compare(a, b) {
    let answer = 0;
    const aString = a.toString();
    const bString = b.toString();

    if (aString < bString) {
      answer = -1;
    } else if (aString > bString) {
      answer = 1;
    }

    if (answer === 0) {
      const aWinner = a.isWinner;
      const bWinner = b.isWinner;

      if (aWinner !== bWinner) {
        if (aWinner && !bWinner) {
          answer = -1;
        } else if (!aWinner && bWinner) {
          answer = 1;
        }
      }
    }

    return answer;
  },

  equals(a, b) {
    return (
      a.award === b.award &&
      a.category === b.category &&
      a.year === b.year &&
      a.isWinner === b.isWinner
    );
  },
};

export default NominationComparator;
