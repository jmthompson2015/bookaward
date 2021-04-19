const Library = {
  AL: "al",
  DPL: "dpl",
  DCL: "dcl",
  JCPL: "jcpl",

  properties: {
    al: {
      name: "Arapahoe Libraries",
      shortName: "AL",
      image: "../resource/image/ArapahoeLibraries18.png",
      url: "http://arapahoelibraries.org",
      searchPrefix:
        "https://arapahoelibraries.bibliocommons.com/search?&t=smart&search_category=keyword&q=",
      searchSuffix: "",
      key: "al",
    },
    dpl: {
      name: "Denver Public Library",
      shortName: "DPL",
      image: "../resource/image/DenverPublicLibrary18.png",
      url: "http://www.denverlibrary.org",
      searchPrefix:
        "http://catalog.denverlibrary.org/search/searchresults.aspx?ctx=1.1033.0.0.6&type=Keyword&term=",
      searchSuffix: "&by=KW&sort=RELEVANCE&limit=TOM=*&query=&page=0",
      key: "dpl",
    },
    dcl: {
      name: "Douglas County Libraries",
      shortName: "DCL",
      image: "../resource/image/DouglasCountyLibraries18.png",
      url: "http://www.douglascountylibraries.org",
      searchPrefix: "http://dcl.bibliocommons.com/search?q=",
      searchSuffix: "&t=smart&search_category=keyword",
      key: "dcl",
    },
    jcpl: {
      name: "Jefferson County Public Library",
      shortName: "JCPL",
      image: "../resource/image/JeffersonCountyPublicLibrary18.png",
      url: "http://jeffcolibrary.org",
      searchPrefix: "http://encore.jefferson.lib.co.us/iii/encore/search/C__S",
      searchSuffix: "__Orightresult__U",
      key: "jcpl",
    },
  },
};

Library.keys = () => Object.keys(Library.properties);

Library.values = () => Object.values(Library.properties);

Object.freeze(Library);

export default Library;
