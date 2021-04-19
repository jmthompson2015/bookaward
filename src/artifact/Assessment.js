const Assessment = {
  NONE: "none",
  BOOK_CLUB_PICK: "bookClubPick",
  POSSIBLE_PICK: "possiblePick",
  NOT_ENOUGH_COPIES: "notEnoughCopies",
  NOT_INTERESTED: "notInterested",
  READ: "read",

  properties: {
    none: {
      name: "",
      key: "none",
    },
    bookClubPick: {
      name: "Book club pick",
      key: "bookClubPick",
    },
    possiblePick: {
      name: "Possible pick",
      key: "possiblePick",
    },
    notEnoughCopies: {
      name: "Not enough copies",
      key: "notEnoughCopies",
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
