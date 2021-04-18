const Assessment = {
  BOOK_CLUB_PICK: "bookClubPick",
  POSSIBLE_PICK: "possiblePick",
  NONE: "none",
  NOT_ENOUGH_COPIES: "notEnoughCopies",
  NOT_AVAILABLE: "notAvailable",
  NOT_INTERESTED: "notInterested",
  READ: "read",

  properties: {
    bookClubPick: {
      name: "Book club pick",
      value: "bookClubPick",
    },
    possiblePick: {
      name: "Possible pick",
      value: "possiblePick",
    },
    none: {
      name: "",
      value: "none",
    },
    notEnoughCopies: {
      name: "Not enough copies",
      value: "notEnoughCopies",
    },
    notAvailable: {
      name: "Not available",
      value: "notAvailable",
    },
    notInterested: {
      name: "Not interested",
      value: "notInterested",
    },
    read: {
      name: "Read",
      value: "read",
    },
  },
};

Assessment.keys = () => Object.keys(Assessment.properties);

Assessment.values = () => Object.values(Assessment.properties);

Object.freeze(Assessment);

export default Assessment;
