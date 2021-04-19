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
      key: "bookClubPick",
    },
    possiblePick: {
      name: "Possible pick",
      key: "possiblePick",
    },
    none: {
      name: "",
      key: "none",
    },
    notEnoughCopies: {
      name: "Not enough copies",
      key: "notEnoughCopies",
    },
    notAvailable: {
      name: "Not available",
      key: "notAvailable",
    },
    notInterested: {
      name: "Not interested",
      key: "notInterested",
    },
    read: {
      name: "Read",
      key: "read",
    },
  },
};

Assessment.keys = () => Object.keys(Assessment.properties);

Assessment.values = () => Object.values(Assessment.properties);

Object.freeze(Assessment);

export default Assessment;
