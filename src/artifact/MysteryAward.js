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
      value: "agatha"
    },
    anthony: {
      name: "Anthony",
      url: "http://stopyourekillingme.com/Awards/Anthony_Awards.html",
      value: "anthony"
    },
    barry: {
      name: "Barry",
      url: "http://stopyourekillingme.com/Awards/Barry_Awards.html",
      value: "barry"
    },
    crimeAndBeyond: {
      name: "Crime & Beyond",
      url: "http://crimeandbeyond.wikia.com/wiki/Crime_%26_Beyond_Wiki",
      value: "crimeAndBeyond"
    },
    // dagger: {
    //   name: "Dagger",
    //   url: "http://stopyourekillingme.com/Awards/Dagger_Awards.html",
    //   value: "dagger"
    // },
    edgar: {
      name: "Edgar",
      url: "http://stopyourekillingme.com/Awards/Edgar_Awards.html",
      value: "edgar"
    },
    // nero: {
    //   name: "Nero",
    //   url: "http://stopyourekillingme.com/Awards/Nero_Awards.html",
    //   value: "nero"
    // },
    shamus: {
      name: "Shamus",
      url: "http://stopyourekillingme.com/Awards/Shamus_Awards.html",
      value: "shamus"
    }
  },

  values() {
    return Object.getOwnPropertyNames(MysteryAward.properties);
  }
};

MysteryAward.properties[MysteryAward.AGATHA].categories = {
  CONTEMPORARY: "contemporary",
  FIRST: "first",
  HISTORICAL: "historical",
  properties: {
    contemporary: {
      name: "Best Contemporary Novel",
      value: "contemporary"
    },
    first: {
      name: "Best First Novel",
      value: "first"
    },
    historical: {
      name: "Best Historical Novel",
      value: "historical"
    }
  },

  values() {
    return Object.getOwnPropertyNames(
      MysteryAward.properties[MysteryAward.AGATHA].categories.properties
    );
  }
};

MysteryAward.properties[MysteryAward.ANTHONY].categories = {
  FIRST: "first",
  MYSTERY: "mystery",
  PAPERBACK: "paperback",
  properties: {
    first: {
      name: "Best First Mystery",
      value: "first"
    },
    mystery: {
      name: "Best Mystery Novel",
      value: "mystery"
    },
    paperback: {
      name: "Best Paperback Original",
      value: "paperback"
    }
  },

  values() {
    return Object.getOwnPropertyNames(
      MysteryAward.properties[MysteryAward.ANTHONY].categories.properties
    );
  }
};

MysteryAward.properties[MysteryAward.BARRY].categories = {
  FIRST: "first",
  NOVEL: "novel",
  PAPERBACK: "paperback",
  THRILLER: "thriller",
  properties: {
    first: {
      name: "Best First Novel",
      value: "first"
    },
    novel: {
      name: "Best Novel",
      value: "novel"
    },
    paperback: {
      name: "Best Paperback Original",
      value: "paperback"
    },
    thriller: {
      name: "Best Thriller",
      value: "thriller"
    }
  }
};

MysteryAward.properties[MysteryAward.CRIME_AND_BEYOND].categories = {
  CASE: "case",
  properties: {
    case: {
      name: "Case File",
      value: "case"
    }
  }
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
//       value: "first"
//     },
//     gold: {
//       name: "Gold Dagger Shortlist",
//       value: "gold"
//     },
//     historical: {
//       name: "Historical Dagger",
//       value: "historical"
//     },
//     international: {
//       name: "International Dagger",
//       value: "international"
//     },
//     steel: {
//       name: "Ian Fleming Steel Dagger",
//       value: "steel"
//     }
//   }
// };

MysteryAward.properties[MysteryAward.EDGAR].categories = {
  FIRST: "first",
  NOVEL: "novel",
  PAPERBACK: "paperback",
  properties: {
    first: {
      name: "Best First Novel by an American Author",
      value: "first"
    },
    novel: {
      name: "Best Mystery Novel",
      value: "novel"
    },
    paperback: {
      name: "Best Paperback Original",
      value: "paperback"
    }
  }
};

// MysteryAward.properties[MysteryAward.NERO].categories = {
//   NERO: "nero",
//   properties: {
//     nero: {
//       name: "Nero Award",
//       value: "nero"
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
      value: "first"
    },
    hardcover: {
      name: "Best P.I. Novel",
      value: "hardcover"
    },
    paperback: {
      name: "Best P.I. Paperback Original",
      value: "paperback"
    }
  }
};

MysteryAward.findByName = (properties, name) => {
  let answer;
  const values = Object.getOwnPropertyNames(properties);

  for (let i = 0; i < values.length; i += 1) {
    const entryKey = values[i];
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
