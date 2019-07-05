import ObjectUtilities from "../utility/ObjectUtilities.js";

import MysteryAward from "../artifact/MysteryAward.js";

import Book from "./Book.js";
import Nomination from "./Nomination.js";
import UserSettings from "./UserSettings.js";

class MysteryInitialState {
  constructor() {
    this.winnerImage = "../resource/image/BloodSplatter14.png";
    this.books = [];
    this.bookToDclUrl = {};
    this.bookToNomination = {};
    this.bookToAssessment = {};

    const { agatha } = MysteryAward.properties;
    const { anthony } = MysteryAward.properties;
    const { barry } = MysteryAward.properties;
    const { crimeAndBeyond } = MysteryAward.properties;
    const { edgar } = MysteryAward.properties;
    const { shamus } = MysteryAward.properties;

    this.books.push(new Book("Adrift", "Micki Browning"));
    this.books.push(new Book("August Snow", "Stephen Mack Jones"));
    this.books.push(new Book("Baby’s First Felony", "John Straley"));
    this.books.push(new Book("Bad Boy Boogie", "Thomas Pluck"));
    this.books.push(new Book("Bearskin", "James A. McLaughlin"));
    this.books.push(new Book("The Best Bad Things", "Katrina Carrasco"));
    this.books.push(new Book("Beyond the Truth", "Bruce Robert Coffin"));
    this.books.push(new Book("Black Fall", "Andrew Mayne"));
    this.books.push(new Book("Blackout", "Alex Segura"));
    this.books.push(new Book("Blessed Are the Peacemakers", "Kristi Belcamino"));
    this.books.push(new Book("Blood Truth", "Matt Coyle"));
    this.books.push(new Book("Bluebird, Bluebird", "Attica Locke"));
    this.books.push(new Book("Bring Me Back", "B.A. Paris"));
    this.books.push(new Book("Broken Places", "Tracy Clark"));
    this.books.push(new Book("A Cajun Christmas Killing", "Ellen Byron"));
    this.books.push(new Book("Called to Justice", "Edith Maxwell"));
    this.books.push(new Book("The Captives", "Debra Jo Immergut"));
    this.books.push(new Book("Cast the First Stone", "James W. Ziskin"));
    this.books.push(new Book("The Chalk Man", "C.J. Tudor"));
    this.books.push(new Book("Christmas Crimes at Puzzel Manor", "Simon Brett"));
    this.books.push(new Book("A Christmas Party", "Georgette Heyer"));
    this.books.push(new Book("The Couple Next Door", "Shari Lapena"));
    this.books.push(new Book("Crime Scene", "Jonathan and Jesse Kellerman"));
    this.books.push(new Book("Cry Wolf", "Annette Dashofy"));
    this.books.push(new Book("Cut You Down", "Sam Wiebe"));
    this.books.push(new Book("Dames Fight Harder", "M. Ruth Myers"));
    this.books.push(new Book("Dangerous To Know", "Renee Patrick"));
    this.books.push(new Book("Dark Chapter", "Winnie M. Li"));
    this.books.push(new Book("Dark Sacred Night", "Michael Connelly"));
    this.books.push(new Book("Dark Water", "Parker Bilal"));
    this.books.push(new Book("Daughters of Bad Men", "Laura Oles"));
    this.books.push(new Book("The Day I Died", "Lori Rader-Day"));
    this.books.push(new Book("Dead Pretty", "David Mark"));
    this.books.push(new Book("Death Overdue", "Allison Brook"));
    this.books.push(new Book("The Death of Mrs. Westaway", "Ruth Ware"));
    this.books.push(new Book("The Deep Dark Descending", "Allen Eskens"));
    this.books.push(new Book("Depth of Winter", "Craig Johnson"));
    this.books.push(new Book("The Dime", "Kathleen Kent"));
    this.books.push(new Book("Dodging and Burning", "John Copenhaver"));
    this.books.push(new Book("Down the River unto the Sea", "Walter Mosley"));
    this.books.push(new Book("The Dry", "Jane Harper"));
    this.books.push(new Book("Every Last Lie", "Mary Kubica"));
    this.books.push(new Book("Exit Strategy", "Steve Hamilton"));
    this.books.push(new Book("The Fallen", "David Baldacci"));
    this.books.push(new Book("The Force", "Don Winslow"));
    this.books.push(new Book("Forever and a Day", "Anthony Horowitz"));
    this.books.push(new Book("Four Funerals and Maybe a Wedding", "Rhys Bowen"));
    this.books.push(new Book("The Freedom Broker", "K.J. Howe"));
    this.books.push(new Book("A Gambler’s Jury", "Victor Methos"));
    this.books.push(new Book("Give Me Your Hand", "Megan Abbott"));
    this.books.push(new Book("Glass Houses", "Louise Penny"));
    this.books.push(new Book("The Gold Pawn", "L.A. Chandlar"));
    this.books.push(new Book("Gone to Dust", "Matt Goldman"));
    this.books.push(new Book("Gunmetal Gray", "Mark Greaney"));
    this.books.push(new Book("Hellbent", "Gregg Hurwitz"));
    this.books.push(new Book("Hiroshima Boy", "Naomi Hirahara"));
    this.books.push(new Book("The Hollow of Fear", "Sherry Thomas"));
    this.books.push(new Book("Hollywood Ending", "Kellye Garrett"));
    this.books.push(new Book("Hollywood Homicide", "Kellye Garrett"));
    this.books.push(new Book("House Witness", "Mike Lawson"));
    this.books.push(new Book("The Hush", "John Hart"));
    this.books.push(new Book("I Know a Secret", "Tess Gerritsen"));
    this.books.push(new Book("I See You", "Clare Mackintosh"));
    this.books.push(new Book("Idaho", "Emily Ruskovich"));
    this.books.push(new Book("If I Die Tonight", "Alison Gaylin"));
    this.books.push(new Book("In Farleigh Field", "Rhys Bowen"));
    this.books.push(new Book("The Irregular", "H.B. Lyle"));
    this.books.push(new Book("Jar of Hearts", "Jennifer Hillier"));
    this.books.push(new Book("The King Tides", "James Swain"));
    this.books.push(new Book("Kingdom of the Blind", "Louise Penny"));
    this.books.push(new Book("A Knife in the Fog", "Bradley Harper"));
    this.books.push(new Book("The Last Equation of Isaac Severy", "Nova Jacobs"));
    this.books.push(new Book("Last Looks", "Howard Michael Gould"));
    this.books.push(new Book("The Last Place You Look", "Kristen Lepionka"));
    this.books.push(new Book("The Late Show", "Michael Connelly"));
    this.books.push(new Book("Leave No Trace", "Mindy Mejia"));
    this.books.push(new Book("Lethal White", "Robert Galbraith"));
    this.books.push(new Book("The Liar’s Girl", "Catherine Ryan Howard"));
    this.books.push(new Book("Light It Up", "Nick Petrie"));
    this.books.push(new Book("Lights Out Summer", "Rich Zahradnik"));
    this.books.push(new Book("Lola", "Melissa Scrivner Love"));
    this.books.push(new Book("London Rules", "Mick Herron"));
    this.books.push(new Book("The Lost Ones", "Sheena Kamal"));
    this.books.push(new Book("Magpie Murders", "Anthony Horowitz"));
    this.books.push(new Book("Mardi Gras Murder", "Ellen Byron"));
    this.books.push(new Book("The Marsh King’s Daughter", "Karen Dionne"));
    this.books.push(new Book("Monument Road", "Michael Wiley"));
    this.books.push(new Book("Murder in an English Village", "Jessica Ellicott"));
    this.books.push(new Book("Murder on Union Square", "Victoria Thompson"));
    this.books.push(new Book("My Absolute Darling", "Gabriel Tallent"));
    this.books.push(new Book("My Sister, the Serial Killer", "Oyinkan Braithwaite"));
    this.books.push(new Book("A Necessary Evil", "Abir Mukherjee"));
    this.books.push(new Book("Need To Know", "Karen Cleveland"));
    this.books.push(new Book("A Negro and an Ofay", "Danny Gardner"));
    this.books.push(new Book("No Quarter", "John Jantunen"));
    this.books.push(new Book("No Way Home", "Annette Dashofy"));
    this.books.push(new Book("November Road", "Lou Berney"));
    this.books.push(new Book("The Nowhere Man", "Gregg Hurwitz"));
    this.books.push(new Book("The Old Man", "Thomas Perry"));
    this.books.push(new Book("Only to Sleep: A Philip Marlowe Novel", "Lawrence Osborne"));
    this.books.push(new Book("The Painted Gun", "Bradley Spinelli"));
    this.books.push(new Book("The Paris Spy", "Susan Elia MacNeal"));
    this.books.push(new Book("Penance", "Kanae Minato"));
    this.books.push(new Book("The Perfect Nanny", "Leila Slimani"));
    this.books.push(new Book("Pieces of Her", "Karin Slaughter"));
    this.books.push(new Book("Play a Cold Hand", "Terence Faherty"));
    this.books.push(new Book("The Plot is Murder", "V.M. Burns"));
    this.books.push(new Book("Protocol", "Kathleen Valenti"));
    this.books.push(new Book("Prussian Blue", "Philip Kerr"));
    this.books.push(new Book("The Questionable Behavior of Dahlia Moss", "Max Wirestone"));
    this.books.push(new Book("Ragged Lake", "Ron Corbett"));
    this.books.push(new Book("Ragged; or, The Loveliest Lies of All", "Christopher Irvin"));
    this.books.push(new Book("Resurrection Bay", "Emma Viskic"));
    this.books.push(new Book("A Rising Man", "Abir Mukherjee"));
    this.books.push(new Book("The Room of White Fire", "T. Jefferson Parker"));
    this.books.push(new Book("The Ruin", "Dervla McTiernan"));
    this.books.push(new Book("The Rules of Backyard Cricket", "Jock Serong"));
    this.books.push(new Book("Safe Houses", "Dan Fesperman"));
    this.books.push(new Book("Safe from Harm", "R.J. Bailey"));
    this.books.push(new Book("Second Story Man", "Charles Salzberg"));
    this.books.push(new Book("The Shadows We Hide", "Allen Eskens"));
    this.books.push(new Book("Shark Bait", "Paul Kemprecos"));
    this.books.push(new Book("A Sharp Solitude", "Christine Carbo"));
    this.books.push(new Book("She Rides Shotgun", "Jordan Harpe"));
    this.books.push(new Book("She Rides Shotgun", "Jordan Harper"));
    this.books.push(new Book("She Talks to Angels", "James D. F. Hannah"));
    this.books.push(new Book("Spook Street", "Mick Herron"));
    this.books.push(new Book("A Stone’s Throw", "James W. Ziskin"));
    this.books.push(new Book("The Strange Disappearance of a Bollywood Star", "Vaseem Khan"));
    this.books.push(new Book("Sunburn", "Laura Lippman"));
    this.books.push(new Book("Super Con", "James Swain"));
    this.books.push(new Book("Sweet Little Lies", "Caz Frear"));
    this.books.push(new Book("Take Out", "Margaret Maron"));
    this.books.push(new Book("The Terminal List", "Jack Carr"));
    this.books.push(new Book("Tornado Weather", "Deborah E. Kennedy"));
    this.books.push(new Book("Trap the Devil", "Ben Coes"));
    this.books.push(new Book("A Treacherous Curse", "Deanna Raybourn"));
    this.books.push(new Book("Trust Me", "Hank Phillippi Ryan"));
    this.books.push(new Book("Turning the Tide", "Edith Maxwell"));
    this.books.push(new Book("The Twelve Lives of Samuel Hawley", "Hannah Tinti"));
    this.books.push(new Book("Two Kinds of Truth", "Michael Connelly"));
    this.books.push(new Book("UNSUB", "Meg Gardiner"));
    this.books.push(new Book("Uncorking a Lie", "Nadine Nettmann"));
    this.books.push(new Book("Under My Skin", "Lisa Unger"));
    this.books.push(new Book("Under Water", "Casey Barrett"));
    this.books.push(new Book("Under a Dark Sky", "Lori Rader-Day"));
    this.books.push(new Book("The Unseeing", "Anna Mazzola"));
    this.books.push(new Book("What Doesn’t Kill You", "Aimee Hix"));
    this.books.push(new Book("What We Reckon", "Eryk Pruitt"));
    this.books.push(new Book("What You Want To See", "Kristen Lepionka"));
    this.books.push(new Book("Where the Crawdads Sing", "Delia Owens"));
    this.books.push(new Book("The Widows of Malabar Hill", "Sujata Massey"));
    this.books.push(new Book("The Witch Elm", "Tana French"));
    this.books.push(new Book("The Woman in the Window", "A.J. Finn"));
    this.books.push(new Book("Wrong Light", "Matt Coyle"));
    this.books.push(new Book("Y Is for Yesterday", "Sue Grafton"));

    this.bookToDclUrl[this.books[1]] = "https://dcl.bibliocommons.com/item/show/1535394114";
    this.bookToDclUrl[this.books[4]] = "https://dcl.bibliocommons.com/item/show/1449691114";
    this.bookToDclUrl[this.books[5]] = "https://dcl.bibliocommons.com/item/show/1487215114";
    this.bookToDclUrl[this.books[7]] = "https://dcl.bibliocommons.com/item/show/1386509114";
    this.bookToDclUrl[this.books[8]] = "https://dcl.bibliocommons.com/item/show/1478636114";
    this.bookToDclUrl[this.books[10]] = "https://dcl.bibliocommons.com/item/show/1438372114";
    this.bookToDclUrl[this.books[11]] = "https://dcl.bibliocommons.com/item/show/1419940114";
    this.bookToDclUrl[this.books[12]] = "https://dcl.bibliocommons.com/item/show/1446735114";
    this.bookToDclUrl[this.books[13]] = "https://dcl.bibliocommons.com/item/show/1476392114";
    this.bookToDclUrl[this.books[14]] = "https://dcl.bibliocommons.com/item/show/1425601114";
    this.bookToDclUrl[this.books[15]] = "https://dcl.bibliocommons.com/item/show/1388567114";
    this.bookToDclUrl[this.books[16]] = "https://dcl.bibliocommons.com/item/show/1476394114";
    this.bookToDclUrl[this.books[17]] = "https://dcl.bibliocommons.com/item/show/1404228114";
    this.bookToDclUrl[this.books[18]] = "https://dcl.bibliocommons.com/item/show/1437532114";
    this.bookToDclUrl[this.books[20]] = "https://dcl.bibliocommons.com/item/show/1381451114";
    this.bookToDclUrl[this.books[21]] = "https://dcl.bibliocommons.com/item/show/1348740114";
    this.bookToDclUrl[this.books[22]] = "https://dcl.bibliocommons.com/item/show/1407385114";
    this.bookToDclUrl[this.books[24]] = "https://dcl.bibliocommons.com/item/show/1449663114";
    this.bookToDclUrl[this.books[26]] = "https://dcl.bibliocommons.com/item/show/1401420114";
    this.bookToDclUrl[this.books[27]] = "https://dcl.bibliocommons.com/item/show/1427070114";
    this.bookToDclUrl[this.books[28]] = "https://dcl.bibliocommons.com/item/show/1475392114";
    this.bookToDclUrl[this.books[29]] = "https://dcl.bibliocommons.com/item/show/1412351114";
    this.bookToDclUrl[this.books[31]] = "https://dcl.bibliocommons.com/item/show/1374142114";
    this.bookToDclUrl[this.books[32]] = "https://dcl.bibliocommons.com/item/show/1471950114";
    this.bookToDclUrl[this.books[33]] = "https://dcl.bibliocommons.com/item/show/1445899114";
    this.bookToDclUrl[this.books[34]] = "https://dcl.bibliocommons.com/item/show/1446736114";
    this.bookToDclUrl[this.books[35]] = "https://dcl.bibliocommons.com/item/show/1429038114";
    this.bookToDclUrl[this.books[36]] = "https://dcl.bibliocommons.com/item/show/1473022114";
    this.bookToDclUrl[this.books[37]] = "https://dcl.bibliocommons.com/item/show/1380018114";
    this.bookToDclUrl[this.books[38]] = "https://dcl.bibliocommons.com/item/show/1460507114";
    this.bookToDclUrl[this.books[39]] = "https://dcl.bibliocommons.com/item/show/1431211114";
    this.bookToDclUrl[this.books[40]] = "https://dcl.bibliocommons.com/item/show/1364617114";
    this.bookToDclUrl[this.books[41]] = "https://dcl.bibliocommons.com/item/show/1387222114";
    this.bookToDclUrl[this.books[42]] = "https://dcl.bibliocommons.com/item/show/1386156114";
    this.bookToDclUrl[this.books[43]] = "https://dcl.bibliocommons.com/item/show/1441565114";
    this.bookToDclUrl[this.books[44]] = "https://dcl.bibliocommons.com/item/show/1386414114";
    this.bookToDclUrl[this.books[45]] = "https://dcl.bibliocommons.com/item/show/1518024114";
    this.bookToDclUrl[this.books[46]] = "https://dcl.bibliocommons.com/item/show/1465622114";
    this.bookToDclUrl[this.books[47]] = "https://dcl.bibliocommons.com/item/show/1373831114";
    this.bookToDclUrl[this.books[48]] = "https://dcl.bibliocommons.com/item/show/1336249114";
    this.bookToDclUrl[this.books[49]] = "https://dcl.bibliocommons.com/item/show/1460944114";
    this.bookToDclUrl[this.books[50]] = "https://dcl.bibliocommons.com/item/show/1412170114";
    this.bookToDclUrl[this.books[51]] = "https://dcl.bibliocommons.com/item/show/1524539114";
    this.bookToDclUrl[this.books[52]] = "https://dcl.bibliocommons.com/item/show/1415333114";
    this.bookToDclUrl[this.books[53]] = "https://dcl.bibliocommons.com/item/show/1384335114";
    this.bookToDclUrl[this.books[54]] = "https://dcl.bibliocommons.com/item/show/1431233114";
    this.bookToDclUrl[this.books[55]] = "https://dcl.bibliocommons.com/item/show/1458461114";
    this.bookToDclUrl[this.books[56]] = "https://dcl.bibliocommons.com/item/show/1483230114";
    this.bookToDclUrl[this.books[57]] = "https://dcl.bibliocommons.com/item/show/1493682114";
    this.bookToDclUrl[this.books[58]] = "https://dcl.bibliocommons.com/item/show/1416206114";
    this.bookToDclUrl[this.books[59]] = "https://dcl.bibliocommons.com/item/show/1431234114";
    this.bookToDclUrl[this.books[60]] = "https://dcl.bibliocommons.com/item/show/1431235114";
    this.bookToDclUrl[this.books[61]] = "https://dcl.bibliocommons.com/item/show/1407387114";
    this.bookToDclUrl[this.books[62]] = "https://dcl.bibliocommons.com/item/show/1384268114";
    this.bookToDclUrl[this.books[63]] = "https://dcl.bibliocommons.com/item/show/1380270114";
    this.bookToDclUrl[this.books[64]] = "https://dcl.bibliocommons.com/item/show/1446738114";
    this.bookToDclUrl[this.books[65]] = "https://dcl.bibliocommons.com/item/show/1382653114";
    this.bookToDclUrl[this.books[66]] = "https://dcl.bibliocommons.com/item/show/1433441114";
    this.bookToDclUrl[this.books[67]] = "https://dcl.bibliocommons.com/item/show/1454525114";
    this.bookToDclUrl[this.books[69]] = "https://dcl.bibliocommons.com/item/show/1489142114";
    this.bookToDclUrl[this.books[70]] = "https://dcl.bibliocommons.com/item/show/1517848114";
    this.bookToDclUrl[this.books[71]] = "https://dcl.bibliocommons.com/item/show/1454556114";
    this.bookToDclUrl[this.books[72]] = "https://dcl.bibliocommons.com/item/show/1493709114";
    this.bookToDclUrl[this.books[73]] = "https://dcl.bibliocommons.com/item/show/1412790114";
    this.bookToDclUrl[this.books[74]] = "https://dcl.bibliocommons.com/item/show/1402219114";
    this.bookToDclUrl[this.books[75]] = "https://dcl.bibliocommons.com/item/show/1515114114";
    this.bookToDclUrl[this.books[76]] = "https://dcl.bibliocommons.com/item/show/1493220114";
    this.bookToDclUrl[this.books[78]] = "https://dcl.bibliocommons.com/item/show/1431239114";
    this.bookToDclUrl[this.books[80]] = "https://dcl.bibliocommons.com/item/show/1367618114";
    this.bookToDclUrl[this.books[81]] = "https://dcl.bibliocommons.com/item/show/1473891114";
    this.bookToDclUrl[this.books[82]] = "https://dcl.bibliocommons.com/item/show/1400194114";
    this.bookToDclUrl[this.books[83]] = "https://dcl.bibliocommons.com/item/show/1387233114";
    this.bookToDclUrl[this.books[84]] = "https://dcl.bibliocommons.com/item/show/1517204114";
    this.bookToDclUrl[this.books[86]] = "https://dcl.bibliocommons.com/item/show/1437548114";
    this.bookToDclUrl[this.books[87]] = "https://dcl.bibliocommons.com/item/show/1430980114";
    this.bookToDclUrl[this.books[88]] = "https://dcl.bibliocommons.com/item/show/1445888114";
    this.bookToDclUrl[this.books[89]] = "https://dcl.bibliocommons.com/item/show/1415034114";
    this.bookToDclUrl[this.books[90]] = "https://dcl.bibliocommons.com/item/show/1487227114";
    this.bookToDclUrl[this.books[91]] = "https://dcl.bibliocommons.com/item/show/1462000114";
    this.bookToDclUrl[this.books[92]] = "https://dcl.bibliocommons.com/item/show/1431240114";
    this.bookToDclUrl[this.books[96]] = "https://dcl.bibliocommons.com/item/show/1482459114";
    this.bookToDclUrl[this.books[97]] = "https://dcl.bibliocommons.com/item/show/1364629114";
    this.bookToDclUrl[this.books[98]] = "https://dcl.bibliocommons.com/item/show/1364630114";
    this.bookToDclUrl[this.books[99]] = "https://dcl.bibliocommons.com/item/show/1485404114";
    this.bookToDclUrl[this.books[101]] = "https://dcl.bibliocommons.com/item/show/1418398114";
    this.bookToDclUrl[this.books[102]] = "https://dcl.bibliocommons.com/item/show/1400217114";
    this.bookToDclUrl[this.books[103]] = "https://dcl.bibliocommons.com/item/show/1434483114";
    this.bookToDclUrl[this.books[104]] = "https://dcl.bibliocommons.com/item/show/1460952114";
    this.bookToDclUrl[this.books[106]] = "https://dcl.bibliocommons.com/item/show/1440192114";
    this.bookToDclUrl[this.books[108]] = "https://dcl.bibliocommons.com/item/show/1388038114";
    this.bookToDclUrl[this.books[109]] = "https://dcl.bibliocommons.com/item/show/1443516114";
    this.bookToDclUrl[this.books[111]] = "https://dcl.bibliocommons.com/item/show/1525448114";
    this.bookToDclUrl[this.books[112]] = "https://dcl.bibliocommons.com/item/show/1460938114";
    this.bookToDclUrl[this.books[113]] = "https://dcl.bibliocommons.com/item/show/1401861114";
    this.bookToDclUrl[this.books[114]] = "https://dcl.bibliocommons.com/item/show/1402474114";
    this.bookToDclUrl[this.books[115]] = "https://dcl.bibliocommons.com/item/show/1482174114";
    this.bookToDclUrl[this.books[116]] = "https://dcl.bibliocommons.com/item/show/1415342114";
    this.bookToDclUrl[this.books[117]] = "https://dcl.bibliocommons.com/item/show/1460522114";
    this.bookToDclUrl[this.books[120]] = "https://dcl.bibliocommons.com/item/show/1487234114";
    this.bookToDclUrl[this.books[122]] = "https://dcl.bibliocommons.com/item/show/1476652114";
    this.bookToDclUrl[this.books[124]] = "https://dcl.bibliocommons.com/item/show/1407263114";
    this.bookToDclUrl[this.books[126]] = "https://dcl.bibliocommons.com/item/show/1366970114";
    this.bookToDclUrl[this.books[128]] = "https://dcl.bibliocommons.com/item/show/1429055114";
    this.bookToDclUrl[this.books[129]] = "https://dcl.bibliocommons.com/item/show/1431248114";
    this.bookToDclUrl[this.books[131]] = "https://dcl.bibliocommons.com/item/show/1466868114";
    this.bookToDclUrl[this.books[132]] = "https://dcl.bibliocommons.com/item/show/1388587114";
    this.bookToDclUrl[this.books[133]] = "https://dcl.bibliocommons.com/item/show/1460525114";
    this.bookToDclUrl[this.books[134]] = "https://dcl.bibliocommons.com/item/show/1410081114";
    this.bookToDclUrl[this.books[135]] = "https://dcl.bibliocommons.com/item/show/1402225114";
    this.bookToDclUrl[this.books[136]] = "https://dcl.bibliocommons.com/item/show/1430146114";
    this.bookToDclUrl[this.books[137]] = "https://dcl.bibliocommons.com/item/show/1491669114";
    this.bookToDclUrl[this.books[139]] = "https://dcl.bibliocommons.com/item/show/1366837114";
    this.bookToDclUrl[this.books[140]] = "https://dcl.bibliocommons.com/item/show/1412693114";
    this.bookToDclUrl[this.books[141]] = "https://dcl.bibliocommons.com/item/show/1388611114";
    this.bookToDclUrl[this.books[142]] = "https://dcl.bibliocommons.com/item/show/1403143114";
    this.bookToDclUrl[this.books[143]] = "https://dcl.bibliocommons.com/item/show/1483237114";
    this.bookToDclUrl[this.books[144]] = "https://dcl.bibliocommons.com/item/show/1435207114";
    this.bookToDclUrl[this.books[145]] = "https://dcl.bibliocommons.com/item/show/1468718114";
    this.bookToDclUrl[this.books[146]] = "https://dcl.bibliocommons.com/item/show/1381431114";
    this.bookToDclUrl[this.books[149]] = "https://dcl.bibliocommons.com/item/show/1465904114";
    this.bookToDclUrl[this.books[150]] = "https://dcl.bibliocommons.com/item/show/1485412114";
    this.bookToDclUrl[this.books[151]] = "https://dcl.bibliocommons.com/item/show/1430148114";
    this.bookToDclUrl[this.books[152]] = "https://dcl.bibliocommons.com/item/show/1483240114";
    this.bookToDclUrl[this.books[153]] = "https://dcl.bibliocommons.com/item/show/1430700114";
    this.bookToDclUrl[this.books[154]] = "https://dcl.bibliocommons.com/item/show/1528774114";
    this.bookToDclUrl[this.books[155]] = "https://dcl.bibliocommons.com/item/show/1415030114";

    this.initializeBookToNomination();

    this.bookToNomination[this.books[0]].push(
      new Nomination(agatha, agatha.categories.properties.first, 2017, false)
    );
    this.bookToNomination[this.books[1]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[2]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2019, false)
    );
    this.bookToNomination[this.books[3]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[4]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2019, true)
    );
    this.bookToNomination[this.books[5]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[6]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2018, false)
    );
    this.bookToNomination[this.books[7]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[8]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2019, false)
    );
    this.bookToNomination[this.books[9]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[10]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2018, false)
    );
    this.bookToNomination[this.books[11]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2018, true)
    );
    this.bookToNomination[this.books[11]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2018, true)
    );
    this.bookToNomination[this.books[12]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[13]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[13]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[14]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2017, false)
    );
    this.bookToNomination[this.books[15]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2017, false)
    );
    this.bookToNomination[this.books[16]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[17]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[18]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[19]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[20]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2017, false)
    );
    this.bookToNomination[this.books[21]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[22]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[23]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2018, false)
    );
    this.bookToNomination[this.books[24]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2019, false)
    );
    this.bookToNomination[this.books[25]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[26]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2017, false)
    );
    this.bookToNomination[this.books[27]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[28]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[28]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[29]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2018, false)
    );
    this.bookToNomination[this.books[30]].push(
      new Nomination(agatha, agatha.categories.properties.first, 2017, false)
    );
    this.bookToNomination[this.books[31]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2018, true)
    );
    this.bookToNomination[this.books[31]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[32]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[33]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2017, false)
    );
    this.bookToNomination[this.books[34]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[35]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, true)
    );
    this.bookToNomination[this.books[36]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[37]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[38]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[38]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[39]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, true)
    );
    this.bookToNomination[this.books[40]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[40]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, true)
    );
    this.bookToNomination[this.books[40]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[41]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[42]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[43]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[44]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2018, false)
    );
    this.bookToNomination[this.books[44]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[45]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[46]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2018, false)
    );
    this.bookToNomination[this.books[47]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, false)
    );
    this.bookToNomination[this.books[48]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[49]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2019, false)
    );
    this.bookToNomination[this.books[50]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2017, true)
    );
    this.bookToNomination[this.books[50]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2018, false)
    );
    this.bookToNomination[this.books[51]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2018, false)
    );
    this.bookToNomination[this.books[52]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[53]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, false)
    );
    this.bookToNomination[this.books[54]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[55]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[55]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[56]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[57]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[58]].push(
      new Nomination(agatha, agatha.categories.properties.first, 2017, true)
    );
    this.bookToNomination[this.books[58]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2018, true)
    );
    this.bookToNomination[this.books[58]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[59]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[60]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[61]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[62]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[63]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[64]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[64]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2019, true)
    );
    this.bookToNomination[this.books[65]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2017, true)
    );
    this.bookToNomination[this.books[65]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[66]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[67]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2019, false)
    );
    this.bookToNomination[this.books[68]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[69]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2018, false)
    );
    this.bookToNomination[this.books[70]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[71]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[72]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[73]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[73]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2018, true)
    );
    this.bookToNomination[this.books[74]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2018, false)
    );
    this.bookToNomination[this.books[74]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[74]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[75]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[76]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[77]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[78]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[79]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2018, true)
    );
    this.bookToNomination[this.books[80]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[81]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[82]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[83]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2018, false)
    );
    this.bookToNomination[this.books[83]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[83]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[84]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2018, true)
    );
    this.bookToNomination[this.books[85]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, true)
    );
    this.bookToNomination[this.books[86]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2018, false)
    );
    this.bookToNomination[this.books[87]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2017, false)
    );
    this.bookToNomination[this.books[88]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2018, false)
    );
    this.bookToNomination[this.books[89]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[90]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[90]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[91]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[92]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[93]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[94]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[95]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2017, false)
    );
    this.bookToNomination[this.books[96]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2019, false)
    );
    this.bookToNomination[this.books[96]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[97]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2017, false)
    );
    this.bookToNomination[this.books[98]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, false)
    );
    this.bookToNomination[this.books[99]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[99]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[100]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[101]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2017, false)
    );
    this.bookToNomination[this.books[102]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[103]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[104]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[105]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[106]].push(
      new Nomination(agatha, agatha.categories.properties.first, 2017, false)
    );
    this.bookToNomination[this.books[107]].push(
      new Nomination(agatha, agatha.categories.properties.first, 2017, false)
    );
    this.bookToNomination[this.books[108]].push(
      new Nomination(barry, barry.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[108]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[109]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[110]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[111]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[112]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[113]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[113]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[114]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2018, true)
    );
    this.bookToNomination[this.books[115]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[116]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[117]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[118]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[119]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[120]].push(
      new Nomination(barry, barry.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[121]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[122]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[123]].push(
      new Nomination(barry, barry.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[124]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[124]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2018, true)
    );
    this.bookToNomination[this.books[125]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[126]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, false)
    );
    this.bookToNomination[this.books[127]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[128]].push(
      new Nomination(shamus, shamus.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[129]].push(
      new Nomination(anthony, anthony.categories.properties.mystery, 2019, false)
    );
    this.bookToNomination[this.books[130]].push(
      new Nomination(barry, barry.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[131]].push(
      new Nomination(barry, barry.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[132]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2017, false)
    );
    this.bookToNomination[this.books[133]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2019, false)
    );
    this.bookToNomination[this.books[134]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[135]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, false)
    );
    this.bookToNomination[this.books[136]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2019, false)
    );
    this.bookToNomination[this.books[137]].push(
      new Nomination(agatha, agatha.categories.properties.contemporary, 2018, false)
    );
    this.bookToNomination[this.books[138]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2018, false)
    );
    this.bookToNomination[this.books[139]].push(
      new Nomination(edgar, edgar.categories.properties.novel, 2018, false)
    );
    this.bookToNomination[this.books[140]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[141]].push(
      new Nomination(barry, barry.categories.properties.thriller, 2018, true)
    );
    this.bookToNomination[this.books[142]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[143]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[143]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[144]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2018, false)
    );
    this.bookToNomination[this.books[145]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[145]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2019, false)
    );
    this.bookToNomination[this.books[146]].push(
      new Nomination(edgar, edgar.categories.properties.paperback, 2018, true)
    );
    this.bookToNomination[this.books[147]].push(
      new Nomination(anthony, anthony.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[147]].push(
      new Nomination(shamus, shamus.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[148]].push(
      new Nomination(anthony, anthony.categories.properties.paperback, 2018, false)
    );
    this.bookToNomination[this.books[149]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2019, false)
    );
    this.bookToNomination[this.books[150]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[150]].push(
      new Nomination(edgar, edgar.categories.properties.first, 2019, false)
    );
    this.bookToNomination[this.books[151]].push(
      new Nomination(agatha, agatha.categories.properties.historical, 2018, true)
    );
    this.bookToNomination[this.books[151]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2019, false)
    );
    this.bookToNomination[this.books[152]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2019, false)
    );
    this.bookToNomination[this.books[153]].push(
      new Nomination(crimeAndBeyond, crimeAndBeyond.categories.properties.case, 2018, false)
    );
    this.bookToNomination[this.books[154]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2019, false)
    );
    this.bookToNomination[this.books[155]].push(
      new Nomination(shamus, shamus.categories.properties.hardcover, 2018, false)
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
  Object.freeze(MysteryInitialState);
}

export default MysteryInitialState;
