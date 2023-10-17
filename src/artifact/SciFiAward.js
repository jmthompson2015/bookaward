const SciFiAward = {
  BRITISH_FANTASY: "britishFantasy",
  BRITISH_SF: "britishSf",
  HUGO: "hugo",
  LOCUS: "locus",
  NEBULA: "nebula",

  properties: {
    britishFantasy: {
      name: "British Fantasy",
      url: "https://www.sfadb.com/British_Fantasy_Awards_",
      key: "britishFantasy",
    },
    britishSf: {
      name: "British SF",
      url: "https://www.sfadb.com/British_SF_Association_Awards_",
      key: "britishSf",
    },
    hugo: {
      name: "Hugo",
      url: "https://www.sfadb.com/Hugo_Awards_",
      key: "hugo",
    },
    locus: {
      name: "Locus",
      url: "https://www.sfadb.com/Locus_Awards_",
      key: "locus",
    },
    nebula: {
      name: "Nebula",
      url: "https://www.sfadb.com/Nebula_Awards_",
      key: "nebula",
    },
  },
};

SciFiAward.keys = () => Object.keys(SciFiAward.properties);

SciFiAward.values = () => Object.values(SciFiAward.properties);

SciFiAward.properties[SciFiAward.BRITISH_FANTASY].categories = {
  FANTASY: "fantasy",
  HORROR: "horror",
  properties: {
    fantasy: {
      name: "Fantasy Novel",
      key: "fantasy",
    },
    horror: {
      name: "Horror Novel",
      key: "horror",
    },
  },

  keys() {
    return Object.keys(
      SciFiAward.properties[SciFiAward.BRITISH_FANTASY].categories.properties,
    );
  },
};

SciFiAward.properties[SciFiAward.BRITISH_SF].categories = {
  NOVEL: "novel",
  properties: {
    novel: {
      name: "Novel",
      key: "novel",
    },
  },

  keys() {
    return Object.keys(
      SciFiAward.properties[SciFiAward.BRITISH_SF].categories.properties,
    );
  },
};

SciFiAward.properties[SciFiAward.HUGO].categories = {
  NOVEL: "novel",
  properties: {
    novel: {
      name: "Novel",
      key: "novel",
    },
  },

  keys() {
    return Object.keys(
      SciFiAward.properties[SciFiAward.HUGO].categories.properties,
    );
  },
};

SciFiAward.properties[SciFiAward.LOCUS].categories = {
  SF: "sf",
  FANTASY: "fantasy",
  FIRST: "first",
  HORROR: "horror",
  properties: {
    sf: {
      name: "Sf Novel",
      key: "sf",
    },
    fantasy: {
      name: "Fantasy Novel",
      key: "fantasy",
    },
    first: {
      name: "First Novel",
      key: "first",
    },
    horror: {
      name: "Horror Novel",
      key: "horror",
    },
  },

  keys() {
    return Object.keys(
      SciFiAward.properties[SciFiAward.LOCUS].categories.properties,
    );
  },
};

SciFiAward.properties[SciFiAward.NEBULA].categories = {
  NOVEL: "novel",
  properties: {
    novel: {
      name: "Novel",
      key: "novel",
    },
  },

  keys() {
    return Object.keys(
      SciFiAward.properties[SciFiAward.NEBULA].categories.properties,
    );
  },
};

SciFiAward.findByName = (properties, name) => {
  let answer;
  const keys = Object.keys(properties);

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

Object.freeze(SciFiAward);

export default SciFiAward;
