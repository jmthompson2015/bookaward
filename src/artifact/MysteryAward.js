const MysteryAward = {
  AGATHA: "agatha",
  ANTHONY: "anthony",
  BARRY: "barry",
  CRIME_AND_BEYOND: "crimeAndBeyond",
  // DAGGER: "dagger",
  EDGAR: "edgar",
  // NERO: "nero",
  SHAMUS: "shamus",

  properties: {
    agatha: {
      name: "Agatha",
      url: "http://stopyourekillingme.com/Awards/Agatha_Awards.html",
      key: "agatha",
    },
    anthony: {
      name: "Anthony",
      url: "http://stopyourekillingme.com/Awards/Anthony_Awards.html",
      key: "anthony",
    },
    barry: {
      name: "Barry",
      url: "http://stopyourekillingme.com/Awards/Barry_Awards.html",
      key: "barry",
    },
    crimeAndBeyond: {
      name: "Crime & Beyond",
      url: "http://crimeandbeyond.wikia.com/wiki/Crime_%26_Beyond_Wiki",
      key: "crimeAndBeyond",
    },
    // dagger: {
    //   name: "Dagger",
    //   url: "http://stopyourekillingme.com/Awards/Dagger_Awards.html",
    //   key: "dagger"
    // },
    edgar: {
      name: "Edgar",
      url: "http://stopyourekillingme.com/Awards/Edgar_Awards.html",
      key: "edgar",
    },
    // nero: {
    //   name: "Nero",
    //   url: "http://stopyourekillingme.com/Awards/Nero_Awards.html",
    //   key: "nero"
    // },
    shamus: {
      name: "Shamus",
      url: "http://stopyourekillingme.com/Awards/Shamus_Awards.html",
      key: "shamus",
    },
  },
};

MysteryAward.keys = () => Object.keys(MysteryAward.properties);

MysteryAward.keysWithoutCB = () => [
  MysteryAward.AGATHA,
  MysteryAward.ANTHONY,
  MysteryAward.BARRY,
  MysteryAward.EDGAR,
  MysteryAward.SHAMUS,
];

MysteryAward.values = () => Object.values(MysteryAward.properties);

MysteryAward.valuesOmitCB = () =>
  MysteryAward.keysWithoutCB().map((key) => MysteryAward.properties[key]);

MysteryAward.properties[MysteryAward.AGATHA].categories = {
  CONTEMPORARY: "contemporary",
  FIRST: "first",
  HISTORICAL: "historical",
  properties: {
    contemporary: {
      name: "Best Contemporary Novel",
      key: "contemporary",
    },
    first: {
      name: "Best First Novel",
      key: "first",
    },
    historical: {
      name: "Best Historical Novel",
      key: "historical",
    },
  },

  keys() {
    return Object.getOwnPropertyNames(
      MysteryAward.properties[MysteryAward.AGATHA].categories.properties,
    );
  },
};

MysteryAward.properties[MysteryAward.ANTHONY].categories = {
  FIRST: "first",
  MYSTERY: "mystery",
  PAPERBACK: "paperback",
  properties: {
    first: {
      name: "Best First Mystery",
      key: "first",
    },
    mystery: {
      name: "Best Mystery Novel",
      key: "mystery",
    },
    paperback: {
      name: "Best Paperback Original",
      key: "paperback",
    },
  },

  keys() {
    return Object.getOwnPropertyNames(
      MysteryAward.properties[MysteryAward.ANTHONY].categories.properties,
    );
  },
};

MysteryAward.properties[MysteryAward.BARRY].categories = {
  FIRST: "first",
  FIRST_MYSTERY: "first mystery",
  MYSTERY: "mystery",
  MYSTERY_DECADE: "mystery decade",
  NOVEL: "novel",
  PAPERBACK: "paperback",
  PAPERBACK_MYSTERY: "paperback mystery",
  THRILLER: "thriller",
  properties: {
    first: {
      name: "Best First Novel",
      key: "first",
    },
    "first mystery": {
      name: "Best First Mystery/Crime Novel",
      key: "first mystery",
    },
    mystery: {
      name: "Best Mystery/Crime Novel",
      key: "mystery",
    },
    "mystery decade": {
      name: "Best Mystery/Crime Novel of the Decade",
      key: "mystery decade",
    },
    novel: {
      name: "Best Novel",
      key: "novel",
    },
    paperback: {
      name: "Best Paperback Original",
      key: "paperback",
    },
    "paperback mystery": {
      name: "Best Paperback Original Mystery/Crime Novel",
      key: "paperback mystery",
    },
    thriller: {
      name: "Best Thriller",
      key: "thriller",
    },
  },
};

MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND].categories = {
  CASE: "case",
  properties: {
    case: {
      name: "Case File",
      key: "case",
    },
  },
};

// MysteryAward.properties[MysteryAward.DAGGER].categories = {
//   FIRST: "first",
//   GOLD: "gold",
//   HISTORICAL: "historical",
//   INTERNATIONAL: "international",
//   STEEL: "steel",
//   properties: {
//     first: {
//       name: "New Blood Dagger",
//       key: "first"
//     },
//     gold: {
//       name: "Gold Dagger Shortlist",
//       key: "gold"
//     },
//     historical: {
//       name: "Historical Dagger",
//       key: "historical"
//     },
//     international: {
//       name: "International Dagger",
//       key: "international"
//     },
//     steel: {
//       name: "Ian Fleming Steel Dagger",
//       key: "steel"
//     }
//   }
// };

MysteryAward.properties[MysteryAward.EDGAR].categories = {
  FIRST: "first",
  FIRST2: "first2",
  HARDCOVER: "hardcover",
  HARDCOVER2: "hardcover2",
  MYSTERY: "mystery",
  NOVEL: "novel",
  PAPERBACK: "paperback",
  properties: {
    first: {
      // name: "Best First Novel by an American Author",
      name: "Best First Novel",
      key: "first",
    },
    first2: {
      name: "Best First Mystery",
      key: "first2",
    },
    hardcover: {
      name: "Best Hardcover Novel",
      key: "hardcover",
    },
    hardcover2: {
      name: "Best Hardcover",
      key: "hardcover2",
    },
    mystery: {
      name: "Best Mystery Novel",
      key: "mystery",
    },
    novel: {
      name: "Best Mystery Novel",
      key: "novel",
    },
    paperback: {
      name: "Best Paperback Original",
      key: "paperback",
    },
  },
};

// MysteryAward.properties[MysteryAward.NERO].categories = {
//   NERO: "nero",
//   properties: {
//     nero: {
//       name: "Nero Award",
//       key: "nero"
//     }
//   }
// };

MysteryAward.properties[MysteryAward.SHAMUS].categories = {
  FIRST: "first",
  HARDCOVER: "hardcover",
  PAPERBACK: "paperback",
  properties: {
    first: {
      name: "Best First P.I. Novel",
      key: "first",
    },
    hardcover: {
      name: "Best P.I. Novel",
      key: "hardcover",
    },
    paperback: {
      name: "Best P.I. Paperback Original",
      key: "paperback",
    },
  },
};

MysteryAward.categories = (awardKey) =>
  MysteryAward.properties[awardKey].categories;

MysteryAward.category = (awardKey, categoryKey) =>
  MysteryAward.properties[awardKey].categories.properties[categoryKey];

MysteryAward.findByName = (properties, name) => {
  let answer;
  const keys = Object.getOwnPropertyNames(properties);

  for (let i = 0; i < keys.length; i += 1) {
    const entryKey = keys[i];
    const entry = properties[entryKey];

    if (entry.name === name) {
      answer = entry;
      break;
    }
  }

  return answer;
};

Object.freeze(MysteryAward);

export default MysteryAward;
