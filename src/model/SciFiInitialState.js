import ObjectUtilities from "../utility/ObjectUtilities.js";

import SciFiAward from "../artifact/SciFiAward.js";

import Book from "./Book.js";
import Nomination from "./Nomination.js";
import UserSettings from "./UserSettings.js";

class SciFiInitialState {
  constructor() {
    this.winnerImage = "../resource/image/Rocketship14.png";
    this.books = [];
    this.bookToDclUrl = {};
    this.bookToNomination = {};
    this.bookToAssessment = {};

    const { britishFantasy } = SciFiAward.properties;
    const { britishSf } = SciFiAward.properties;
    const { hugo } = SciFiAward.properties;
    const { locus } = SciFiAward.properties;
    const { nebula } = SciFiAward.properties;

    this.books.push(new Book("13 Minutes", "Sarah Pinborough"));
    this.books.push(new Book("After Atlas", "Emma Newman"));
    this.books.push(new Book("Age of Assassins", "RJ Barker"));
    this.books.push(new Book("Ahab's Return", "Jeffrey Ford"));
    this.books.push(new Book("All the Birds in the Sky", "Charlie Jane Anders"));
    this.books.push(new Book("Amberlough", "Lara Elena Donnelly"));
    this.books.push(new Book("Autonomous", "Annalee Newitz"));
    this.books.push(new Book("Azanian Bridges", "Nick Wood"));
    this.books.push(new Book("Babylon's Ashes", "James S. A. Corey"));
    this.books.push(new Book("Before Mars", "Emma Newman"));
    this.books.push(new Book("Behind Her Eyes", "Sarah Pinborough"));
    this.books.push(new Book("Blackfish City", "Sam J. Miller"));
    this.books.push(new Book("Borderline", "Mishell Baker"));
    this.books.push(new Book("Borne", "Jeff VanderMeer"));
    this.books.push(new Book("The Boy on the Bridge", "M. R. Carey"));
    this.books.push(new Book("The Calculating Stars", "Mary Robinette Kowal"));
    this.books.push(new Book("Central Station", "Lavie Tidhar"));
    this.books.push(new Book("The Changeling", "Victor LaValle"));
    this.books.push(new Book("Children of Earth and Sky", "Guy Gavriel Kay"));
    this.books.push(new Book("City of Blades", "Robert Jackson Bennett"));
    this.books.push(new Book("City of Miracles", "Robert Jackson Bennett"));
    this.books.push(new Book("A Closed and Common Orbit", "Becky Chambers"));
    this.books.push(new Book("The Collapsing Empire", "John Scalzi"));
    this.books.push(new Book("Company Town", "Madeline Ashby"));
    this.books.push(new Book("The Court of Broken Knives", "Anna Smith Spark"));
    this.books.push(new Book("Creatures of Want and Ruin", "Molly Tanzer"));
    this.books.push(new Book("The Crow Garden", "Alison Littlewood"));
    this.books.push(new Book("Daughter of Eden", "Chris Beckett"));
    this.books.push(new Book("Death's End", "Cixin Liu"));
    this.books.push(new Book("Deep Roots", "Ruthanna Emrys"));
    this.books.push(new Book("The Delirium Brief", "Charles Stross"));
    this.books.push(new Book("Disappearance at Devil's Rock", "Paul Tremblay"));
    this.books.push(new Book("Dreams Before the Start of Time", "Anne Charnock"));
    this.books.push(new Book("Elysium Fire", "Alastair Reynolds"));
    this.books.push(new Book("Embers of War", "Gareth L. Powell"));
    this.books.push(new Book("Europe at Dawn", "Dave Hutchinson"));
    this.books.push(new Book("Europe in Winter", "Dave Hutchinson"));
    this.books.push(new Book("European Travel for the Monstrous Gentlewoman", "Theodora Goss"));
    this.books.push(new Book("Everfair", "Nisi Shawl"));
    this.books.push(new Book("Exit West", "Mohsin Hamid"));
    this.books.push(new Book("Foundryside", "Robert Jackson Bennett"));
    this.books.push(new Book("The Hidden People", "Alison Littlewood"));
    this.books.push(new Book("The High King's Vengeance", "Steven Poore"));
    this.books.push(new Book("Horizon", "Fran Wilde"));
    this.books.push(new Book("The House of Binding Thorns", "Aliette de Bodard"));
    this.books.push(new Book("If Tomorrow Comes", "Nancy Kress"));
    this.books.push(new Book("Jade City", "Fonda Lee"));
    this.books.push(new Book("Ka: Dar Oakley in the Ruin of Ymr", "John Crowley"));
    this.books.push(new Book("The Last Days of New Paris", "China Mi�ville"));
    this.books.push(new Book("Last Year", "Robert Charles Wilson"));
    this.books.push(new Book("Lies Sleeping", "Ben Aaronovitch"));
    this.books.push(new Book("Luna: Wolf Moon", "Ian McDonald"));
    this.books.push(new Book("The Medusa Chronicles", "Alastair Reynolds"));
    this.books.push(new Book("The Mere Wife", "Maria Dahvana Headley"));
    this.books.push(new Book("The Monster Baru Cormorant", "Seth Dickinson"));
    this.books.push(new Book("Necessity", "Jo Walton"));
    this.books.push(new Book("New York 2140", "Kim Stanley Robinson"));
    this.books.push(new Book("The Nightmare Stacks", "Charles Stross"));
    this.books.push(new Book("Ninefox Gambit", "Yoon Ha Lee"));
    this.books.push(new Book("The Ninth Rain", "Jen Williams"));
    this.books.push(new Book("The Obelisk Gate", "N. K. Jemisin"));
    this.books.push(new Book("Occupy Me", "Tricia Sullivan"));
    this.books.push(new Book("Persepolis Rising", "James S. A. Corey"));
    this.books.push(new Book("The Poppy War", "R. F. Kuang"));
    this.books.push(new Book("Provenance", "Ann Leckie"));
    this.books.push(new Book("Raven Stratagem", "Yoon Ha Lee"));
    this.books.push(new Book("Record of a Spaceborn Few", "Becky Chambers"));
    this.books.push(new Book("Red Moon", "Kim Stanley Robinson"));
    this.books.push(new Book("Relics", "Tim Lebbon"));
    this.books.push(new Book("Revenant Gun", "Yoon Ha Lee"));
    this.books.push(new Book("The Rift", "Nina Allan"));
    this.books.push(new Book("Rosewater", "Tade Thompson"));
    this.books.push(new Book("The Ruin of Angels", "Max Gladstone"));
    this.books.push(new Book("The Searching Dead", "Ramsey Campbell"));
    this.books.push(new Book("Seven Surrenders", "Ada Palmer"));
    this.books.push(new Book("The Silver Tide", "Jen Williams"));
    this.books.push(new Book("Six Wakes", "Mur Lafferty"));
    this.books.push(new Book("Space Opera", "Catherynne M. Valente"));
    this.books.push(new Book("Spinning Silver", "Naomi Novik"));
    this.books.push(new Book("Spoonbenders", "Daryl Gregory"));
    this.books.push(new Book("The Stars Are Legion", "Kameron Hurley"));
    this.books.push(new Book("The Stone Sky", "N. K. Jemisin"));
    this.books.push(new Book("The Stone in the Skull", "Elizabeth Bear"));
    this.books.push(new Book("The Strange Case of the Alchemist's Daughter", "Theodora Goss"));
    this.books.push(new Book("The Summer Goddess", "Joanne Hall"));
    this.books.push(new Book("Summerlong", "Peter S. Beagle"));
    this.books.push(new Book("Take Back the Sky", "Greg Bear"));
    this.books.push(new Book("The Tiger and the Wolf", "Adrian Tchaikovsky"));
    this.books.push(new Book("Too Like the Lightning", "Ada Palmer"));
    this.books.push(new Book("Trail of Lightning", "Rebecca Roanhorse"));
    this.books.push(new Book("The Underground Railroad", "Colson Whitehead"));
    this.books.push(new Book("Unholy Land", "Lavie Tidhar"));
    this.books.push(new Book("Visitor", "C. J. Cherryh"));
    this.books.push(new Book("Walkaway", "Cory Doctorow"));
    this.books.push(new Book("The Wall of Storms", "Ken Liu"));
    this.books.push(new Book("The Winged Histories", "Sofia Samatar"));
    this.books.push(new Book("Witchmark", "C. L. Polk"));
    this.books.push(new Book("The Wonder Engine", "T. Kingfisher"));

    this.bookToDclUrl[this.books[0]] = "https://dcl.bibliocommons.com/item/show/1430751114";
    this.bookToDclUrl[this.books[1]] = "https://dcl.bibliocommons.com/item/show/1367380114";
    this.bookToDclUrl[this.books[2]] = "https://dcl.bibliocommons.com/item/show/1421941114";
    this.bookToDclUrl[this.books[3]] = "https://dcl.bibliocommons.com/item/show/1493702114";
    this.bookToDclUrl[this.books[4]] = "https://dcl.bibliocommons.com/item/show/1306204114";
    this.bookToDclUrl[this.books[5]] = "https://dcl.bibliocommons.com/item/show/1382502114";
    this.bookToDclUrl[this.books[6]] = "https://dcl.bibliocommons.com/item/show/1423696114";
    this.bookToDclUrl[this.books[8]] = "https://dcl.bibliocommons.com/item/show/1381450114";
    this.bookToDclUrl[this.books[9]] = "https://dcl.bibliocommons.com/item/show/1473938114";
    this.bookToDclUrl[this.books[10]] = "https://dcl.bibliocommons.com/item/show/1364885114";
    this.bookToDclUrl[this.books[11]] = "https://dcl.bibliocommons.com/item/show/1441292114";
    this.bookToDclUrl[this.books[12]] = "https://dcl.bibliocommons.com/item/show/1313297114";
    this.bookToDclUrl[this.books[13]] = "https://dcl.bibliocommons.com/item/show/1388566114";
    this.bookToDclUrl[this.books[14]] = "https://dcl.bibliocommons.com/item/show/1387814114";
    this.bookToDclUrl[this.books[15]] = "https://dcl.bibliocommons.com/item/show/1479800114";
    this.bookToDclUrl[this.books[16]] = "https://dcl.bibliocommons.com/item/show/1317803114";
    this.bookToDclUrl[this.books[17]] = "https://dcl.bibliocommons.com/item/show/1405428114";
    this.bookToDclUrl[this.books[18]] = "https://dcl.bibliocommons.com/item/show/1322289114";
    this.bookToDclUrl[this.books[19]] = "https://dcl.bibliocommons.com/item/show/1305744114";
    this.bookToDclUrl[this.books[20]] = "https://dcl.bibliocommons.com/item/show/1401911114";
    this.bookToDclUrl[this.books[21]] = "https://dcl.bibliocommons.com/item/show/1388021114";
    this.bookToDclUrl[this.books[22]] = "https://dcl.bibliocommons.com/item/show/1373825114";
    this.bookToDclUrl[this.books[23]] = "https://dcl.bibliocommons.com/item/show/1322561114";
    this.bookToDclUrl[this.books[24]] = "https://dcl.bibliocommons.com/item/show/1420150114";
    this.bookToDclUrl[this.books[25]] = "https://dcl.bibliocommons.com/item/show/1535380114";
    this.bookToDclUrl[this.books[27]] = "https://dcl.bibliocommons.com/item/show/1445921114";
    this.bookToDclUrl[this.books[28]] = "https://dcl.bibliocommons.com/item/show/1357571114";
    this.bookToDclUrl[this.books[29]] = "https://dcl.bibliocommons.com/item/show/1486162114";
    this.bookToDclUrl[this.books[30]] = "https://dcl.bibliocommons.com/item/show/1415359114";
    this.bookToDclUrl[this.books[31]] = "https://dcl.bibliocommons.com/item/show/1316729114";
    this.bookToDclUrl[this.books[33]] = "https://dcl.bibliocommons.com/item/show/1449695114";
    this.bookToDclUrl[this.books[34]] = "https://dcl.bibliocommons.com/item/show/1558150114";
    this.bookToDclUrl[this.books[37]] = "https://dcl.bibliocommons.com/item/show/1480762114";
    this.bookToDclUrl[this.books[38]] = "https://dcl.bibliocommons.com/item/show/1357853114";
    this.bookToDclUrl[this.books[39]] = "https://dcl.bibliocommons.com/item/show/1372783114";
    this.bookToDclUrl[this.books[40]] = "https://dcl.bibliocommons.com/item/show/1488964114";
    this.bookToDclUrl[this.books[43]] = "https://dcl.bibliocommons.com/item/show/1425609114";
    this.bookToDclUrl[this.books[44]] = "https://dcl.bibliocommons.com/item/show/1398789114";
    this.bookToDclUrl[this.books[45]] = "https://dcl.bibliocommons.com/item/show/1466680114";
    this.bookToDclUrl[this.books[46]] = "https://dcl.bibliocommons.com/item/show/1421280114";
    this.bookToDclUrl[this.books[47]] = "https://dcl.bibliocommons.com/item/show/1434831114";
    this.bookToDclUrl[this.books[49]] = "https://dcl.bibliocommons.com/item/show/1382823114";
    this.bookToDclUrl[this.books[50]] = "https://dcl.bibliocommons.com/item/show/1528802114";
    this.bookToDclUrl[this.books[51]] = "https://dcl.bibliocommons.com/item/show/1388033114";
    this.bookToDclUrl[this.books[52]] = "https://dcl.bibliocommons.com/item/show/1332515114";
    this.bookToDclUrl[this.books[53]] = "https://dcl.bibliocommons.com/item/show/1479810114";
    this.bookToDclUrl[this.books[54]] = "https://dcl.bibliocommons.com/item/show/1527633114";
    this.bookToDclUrl[this.books[55]] = "https://dcl.bibliocommons.com/item/show/1350467114";
    this.bookToDclUrl[this.books[56]] = "https://dcl.bibliocommons.com/item/show/1379717114";
    this.bookToDclUrl[this.books[57]] = "https://dcl.bibliocommons.com/item/show/1353525114";
    this.bookToDclUrl[this.books[58]] = "https://dcl.bibliocommons.com/item/show/1357603114";
    this.bookToDclUrl[this.books[60]] = "https://dcl.bibliocommons.com/item/show/1354400114";
    this.bookToDclUrl[this.books[62]] = "https://dcl.bibliocommons.com/item/show/1418671114";
    this.bookToDclUrl[this.books[63]] = "https://dcl.bibliocommons.com/item/show/1446354114";
    this.bookToDclUrl[this.books[64]] = "https://dcl.bibliocommons.com/item/show/1425614114";
    this.bookToDclUrl[this.books[65]] = "https://dcl.bibliocommons.com/item/show/1408680114";
    this.bookToDclUrl[this.books[66]] = "https://dcl.bibliocommons.com/item/show/1466837114";
    this.bookToDclUrl[this.books[67]] = "https://dcl.bibliocommons.com/item/show/1485843114";
    this.bookToDclUrl[this.books[68]] = "https://dcl.bibliocommons.com/item/show/1387885114";
    this.bookToDclUrl[this.books[69]] = "https://dcl.bibliocommons.com/item/show/1522464114";
    this.bookToDclUrl[this.books[70]] = "https://dcl.bibliocommons.com/item/show/1403137114";
    this.bookToDclUrl[this.books[71]] = "https://dcl.bibliocommons.com/item/show/1367049114";
    this.bookToDclUrl[this.books[72]] = "https://dcl.bibliocommons.com/item/show/1425594114";
    this.bookToDclUrl[this.books[74]] = "https://dcl.bibliocommons.com/item/show/1381423114";
    this.bookToDclUrl[this.books[76]] = "https://dcl.bibliocommons.com/item/show/1382666114";
    this.bookToDclUrl[this.books[77]] = "https://dcl.bibliocommons.com/item/show/1463346114";
    this.bookToDclUrl[this.books[78]] = "https://dcl.bibliocommons.com/item/show/1473208114";
    this.bookToDclUrl[this.books[79]] = "https://dcl.bibliocommons.com/item/show/1403896114";
    this.bookToDclUrl[this.books[80]] = "https://dcl.bibliocommons.com/item/show/1364922114";
    this.bookToDclUrl[this.books[81]] = "https://dcl.bibliocommons.com/item/show/1419962114";
    this.bookToDclUrl[this.books[82]] = "https://dcl.bibliocommons.com/item/show/1425615114";
    this.bookToDclUrl[this.books[83]] = "https://dcl.bibliocommons.com/item/show/1407444114";
    this.bookToDclUrl[this.books[85]] = "https://dcl.bibliocommons.com/item/show/1354705114";
    this.bookToDclUrl[this.books[86]] = "https://dcl.bibliocommons.com/item/show/1384199114";
    this.bookToDclUrl[this.books[87]] = "https://dcl.bibliocommons.com/item/show/1381429114";
    this.bookToDclUrl[this.books[88]] = "https://dcl.bibliocommons.com/item/show/1336393114";
    this.bookToDclUrl[this.books[89]] = "https://dcl.bibliocommons.com/item/show/1458470114";
    this.bookToDclUrl[this.books[90]] = "https://dcl.bibliocommons.com/item/show/1330611114";
    this.bookToDclUrl[this.books[91]] = "https://dcl.bibliocommons.com/item/show/1527639114";
    this.bookToDclUrl[this.books[93]] = "https://dcl.bibliocommons.com/item/show/1379727114";
    this.bookToDclUrl[this.books[94]] = "https://dcl.bibliocommons.com/item/show/1360810114";
    this.bookToDclUrl[this.books[95]] = "https://dcl.bibliocommons.com/item/show/1323511114";
    this.bookToDclUrl[this.books[96]] = "https://dcl.bibliocommons.com/item/show/1449683114";

    this.initializeBookToNomination();

    this.bookToNomination[this.books[0]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false)
    );
    this.bookToNomination[this.books[1]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[2]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[3]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, true)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2017, true)
    );
    this.bookToNomination[this.books[5]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[6]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[7]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[8]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[9]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[10]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2018, false)
    );
    this.bookToNomination[this.books[11]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[11]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[12]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[13]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[14]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2018, false)
    );
    this.bookToNomination[this.books[15]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[15]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, true)
    );
    this.bookToNomination[this.books[15]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, true)
    );
    this.bookToNomination[this.books[16]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[17]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2018, true)
    );
    this.bookToNomination[this.books[18]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[19]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[20]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[21]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[21]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[22]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[22]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, true)
    );
    this.bookToNomination[this.books[23]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[24]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[25]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[26]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2018, false)
    );
    this.bookToNomination[this.books[27]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[28]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[28]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, true)
    );
    this.bookToNomination[this.books[29]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[30]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[31]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, true)
    );
    this.bookToNomination[this.books[32]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[33]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[34]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2019, true)
    );
    this.bookToNomination[this.books[34]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[35]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[36]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2017, true)
    );
    this.bookToNomination[this.books[37]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[38]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[39]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[40]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[41]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false)
    );
    this.bookToNomination[this.books[42]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[43]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[44]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[45]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[46]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[46]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[47]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[48]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[49]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[50]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[51]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[52]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[53]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[54]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );
    this.bookToNomination[this.books[55]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[56]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[56]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[57]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[58]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[58]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[59]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2018, true)
    );
    this.bookToNomination[this.books[60]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, true)
    );
    this.bookToNomination[this.books[60]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[60]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[61]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[62]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[63]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[64]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[64]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[64]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[65]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[65]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[66]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[66]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[67]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[68]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2018, false)
    );
    this.bookToNomination[this.books[69]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[69]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[69]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[70]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2018, true)
    );
    this.bookToNomination[this.books[71]].push(
      new Nomination(britishSf, britishSf.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[72]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[73]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false)
    );
    this.bookToNomination[this.books[74]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[75]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[76]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[76]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[77]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[77]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[78]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[78]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, true)
    );
    this.bookToNomination[this.books[78]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[79]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[79]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[80]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[81]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2018, true)
    );
    this.bookToNomination[this.books[81]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, true)
    );
    this.bookToNomination[this.books[81]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, true)
    );
    this.bookToNomination[this.books[82]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2018, false)
    );
    this.bookToNomination[this.books[83]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[84]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[85]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[86]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[87]].push(
      new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, true)
    );
    this.bookToNomination[this.books[88]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2017, false)
    );
    this.bookToNomination[this.books[89]].push(
      new Nomination(hugo, hugo.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[89]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[90]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[91]].push(
      new Nomination(locus, locus.categories.properties.sf, 2019, false)
    );
    this.bookToNomination[this.books[92]].push(
      new Nomination(locus, locus.categories.properties.sf, 2017, false)
    );
    this.bookToNomination[this.books[93]].push(
      new Nomination(locus, locus.categories.properties.sf, 2018, false)
    );
    this.bookToNomination[this.books[94]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[95]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2017, false)
    );
    this.bookToNomination[this.books[96]].push(
      new Nomination(nebula, nebula.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[97]].push(
      new Nomination(locus, locus.categories.properties.fantasy, 2019, false)
    );

    this.initializeBookToAssessment();
    this.loadBookToAssessment();
  }

  initializeBookToAssessment() {
    this.bookToAssessment = UserSettings.resetBookToAssessment(
      this.bookToAssessment,
      this.books,
      this.bookToDclUrl,
      this.bookToNomination
    );
  }

  initializeBookToNomination() {
    this.books.forEach(book => {
      this.bookToNomination[book] = [];
    }, this);
  }

  loadBookToAssessment() {
    const myBookToAssessment = UserSettings.loadBookToAssessment();
    ObjectUtilities.merge(this.bookToAssessment, myBookToAssessment);
  }
}

if (Object.freeze) {
  Object.freeze(SciFiInitialState);
}

export default SciFiInitialState;
