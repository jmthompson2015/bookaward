"use strict";

define(["SciFiAward", "Book", "Nomination", "UserSettings"],
   function(Award, Book, Nomination, UserSettings)
   {
      function SciFiInitialState()
      {
         this.winnerImage = "../resources/Rocketship14.png";
         this.books = [];
         this.bookToDclUrl = {};
         this.bookToNomination = {};
         this.bookToAssessment = {};

         var britishFantasy = Award.properties.britishFantasy;
         var britishSf = Award.properties.britishSf;
         var hugo = Award.properties.hugo;
         var locus = Award.properties.locus;
         var nebula = Award.properties.nebula;

         this.books.push(new Book("13 Minutes", "Sarah Pinborough"));
         this.books.push(new Book("The Aeronaut's Windlass", "Jim Butcher"));
         this.books.push(new Book("After Atlas", "Emma Newman"));
         this.books.push(new Book("Afterparty", "Daryl Gregory"));
         this.books.push(new Book("All Those Vanished Engines", "Paul Park"));
         this.books.push(new Book("All the Birds in the Sky", "Charlie Jane Anders"));
         this.books.push(new Book("Ancillary Mercy", "Ann Leckie"));
         this.books.push(new Book("Ancillary Sword", "Ann Leckie"));
         this.books.push(new Book("The Angel of Losses", "Stephanie Feldman"));
         this.books.push(new Book("Annihilation", "Jeff VanderMeer"));
         this.books.push(new Book("Annihilation/Authority/Acceptance", "Jeff VanderMeer"));
         this.books.push(new Book("Arabella of Mars", "David D. Levine"));
         this.books.push(new Book("Artemis Awakening", "Jane Lindskold"));
         this.books.push(new Book("Aurora", "Kim Stanley Robinson"));
         this.books.push(new Book("Azanian Bridges", "Nick Wood"));
         this.books.push(new Book("Babylon's Ashes", "James S. A. Corey"));
         this.books.push(new Book("Barsk: The Elephants' Graveyard", "Lawrence M. Schoen"));
         this.books.push(new Book("Bathing the Lion", "Jonathan Carroll"));
         this.books.push(new Book("Beautiful Blood", "Lucius Shepard"));
         this.books.push(new Book("The Bees", "Laline Paull"));
         this.books.push(new Book("The Blood of Angels", "Johanna Sinisalo"));
         this.books.push(new Book("The Bone Clocks", "David Mitchell"));
         this.books.push(new Book("The Book of Strange New Things", "Michel Faber"));
         this.books.push(new Book("Borderline", "Mishell Baker"));
         this.books.push(new Book("A Borrowed Man", "Gene Wolfe"));
         this.books.push(new Book("The Boy Who Drew Monsters", "Keith Donohue"));
         this.books.push(new Book("Breed", "K. T. Davies"));
         this.books.push(new Book("Bête", "Adam Roberts"));
         this.books.push(new Book("California Bones", "Greg van Eekhout"));
         this.books.push(new Book("The Causal Angel", "Hannu Rajaniemi"));
         this.books.push(new Book("Central Station", "Lavie Tidhar"));
         this.books.push(new Book("Children of Earth and Sky", "Guy Gavriel Kay"));
         this.books.push(new Book("Cibola Burn", "James S. A. Corey"));
         this.books.push(new Book("City of Blades", "Robert Jackson Bennett"));
         this.books.push(new Book("City of Stairs", "Robert Jackson Bennett"));
         this.books.push(new Book("The Clockwork Dagger", "Beth Cato"));
         this.books.push(new Book("A Closed and Common Orbit", "Becky Chambers"));
         this.books.push(new Book("A Cold Silence", "Alison Littlewood"));
         this.books.push(new Book("Coming Home", "Jack McDevitt"));
         this.books.push(new Book("Company Town", "Madeline Ashby"));
         this.books.push(new Book("Cuckoo Song", "Frances Hardinge"));
         this.books.push(new Book("The Dark Between the Stars", "Kevin J. Anderson"));
         this.books.push(new Book("The Dark Defiles", "Richard K. Morgan"));
         this.books.push(new Book("Dark Lightning", "John Varley"));
         this.books.push(new Book("A Darkling Sea", "James L. Cambias"));
         this.books.push(new Book("Daughter of Eden", "Chris Beckett"));
         this.books.push(new Book("The Death House", "Sarah Pinborough"));
         this.books.push(new Book("Death's End", "Cixin Liu"));
         this.books.push(new Book("Death's End", "Cixin Liu , translated by Ken Liu"));
         this.books.push(new Book("Disappearance at Devil's Rock", "Paul Tremblay"));
         this.books.push(new Book("Echopraxia", "Peter Watts"));
         this.books.push(new Book("Elysium", "Jennifer Marie Brissett"));
         this.books.push(new Book("The Emperor's Blades", "Brian Staveley"));
         this.books.push(new Book("The End", "Gary McMahon"));
         this.books.push(new Book("Europe at Midnight", "Dave Hutchinson"));
         this.books.push(new Book("Europe in Autumn", "Dave Hutchinson"));
         this.books.push(new Book("Europe in Winter", "Dave Hutchinson"));
         this.books.push(new Book("Everfair", "Nisi Shawl"));
         this.books.push(new Book("The Fifth Season", "N. K. Jemisin"));
         this.books.push(new Book("The First Fifteen Lives of Harry August", "Claire North"));
         this.books.push(new Book("Full Fathom Five", "Max Gladstone"));
         this.books.push(new Book("The Girl In the Road", "Monica Byrne"));
         this.books.push(new Book("The Girl With All the Gifts", "M. R. Carey"));
         this.books.push(new Book("The Girl from Everywhere", "Heidi Heilig"));
         this.books.push(new Book("The Girls at the Kingfisher Club", "Genevieve Valentine"));
         this.books.push(new Book("Glorious Angels", "Justina Robson"));
         this.books.push(new Book("The Goblin Emperor", "Katherine Addison"));
         this.books.push(new Book("The Grace of Kings", "Ken Liu"));
         this.books.push(new Book("Guns of the Dawn", "Adrian Tchaikovsky"));
         this.books.push(new Book("Half a War", "Joe Abercrombie"));
         this.books.push(new Book("Hawk", "Steven Brust"));
         this.books.push(new Book("Heirs of Grace", "Tim Pratt"));
         this.books.push(new Book("The Hidden People", "Alison Littlewood"));
         this.books.push(new Book("The High King's Vengeance", "Steven Poore"));
         this.books.push(new Book("The House of Shattered Wings", "Aliette de Bodard"));
         this.books.push(new Book("Infomocracy", "Malka Older"));
         this.books.push(new Book("The Iron Ghost", "Jen Williams"));
         this.books.push(new Book("Karen Memory", "Elizabeth Bear"));
         this.books.push(new Book("Lagoon", "Nnedi Okorafor"));
         this.books.push(new Book("The Last Days of New Paris", "China Mieville"));
         this.books.push(new Book("The Last Plague", "Rich Hawkins"));
         this.books.push(new Book("Last Year", "Robert Charles Wilson"));
         this.books.push(new Book("Lines of Departure", "Marko Kloos"));
         this.books.push(new Book("Lock In", "John Scalzi"));
         this.books.push(new Book("Lost Girl", "Adam Nevill"));
         this.books.push(new Book("Luna: New Moon", "Ian McDonald"));
         this.books.push(new Book("The Magician's Land", "Lev Grossman"));
         this.books.push(new Book("A Man Lies Dreaming", "Lavie Tidhar"));
         this.books.push(new Book("The Medusa Chronicles", "Stephen Baxter & Alastair Reynolds"));
         this.books.push(new Book("The Memory Garden", "Mary Rickert"));
         this.books.push(new Book("The Memory of Sky", "Robert Reed"));
         this.books.push(new Book("The Mirror Empire", "Kameron Hurley"));
         this.books.push(new Book("The Moon King", "Neil Williamson"));
         this.books.push(new Book("Mother of Eden", "Chris Beckett"));
         this.books.push(new Book("My Real Children", "Jo Walton"));
         this.books.push(new Book("Necessity", "Jo Walton"));
         this.books.push(new Book("The Nightmare Stacks", "Charles Stross"));
         this.books.push(new Book("Ninefox Gambit", "Yoon Ha Lee"));
         this.books.push(new Book("No One Gets Out Alive", "Adam Nevill"));
         this.books.push(new Book("The Obelisk Gate", "N. K. Jemisin"));
         this.books.push(new Book("Occupy Me", "Tricia Sullivan"));
         this.books.push(new Book("Otherbound", "Corinne Duyvis"));
         this.books.push(new Book("The Peripheral", "William Gibson"));
         this.books.push(new Book("The Race", "Nina Allan"));
         this.books.push(new Book("Raising Caine", "Charles E. Gannon"));
         this.books.push(new Book("Rawblood", "Catriona Ward"));
         this.books.push(new Book("The Reader", "Traci Chee"));
         this.books.push(new Book("The Relic Guild", "Edward Cox"));
         this.books.push(new Book("Resurrections", "Roz Kaveney"));
         this.books.push(new Book("Revival", "Stephen King"));
         this.books.push(new Book("Roses and Rot", "Kat Howard"));
         this.books.push(new Book("The Searching Dead", "Ramsey Campbell"));
         this.books.push(new Book("Seveneves", "Neal Stephenson"));
         this.books.push(new Book("Shipstar", "Gregory Benford & Larry Niven"));
         this.books.push(new Book("Signal to Noise", "Silvia Moreno-Garcia"));
         this.books.push(new Book("The Silence", "Tim Lebbon"));
         this.books.push(new Book("The Silver Tide", "Jen Williams"));
         this.books.push(new Book("Skin Game", "Jim Butcher"));
         this.books.push(new Book("The Sorcerer of the Wildeeps", "Kai Ashante Wilson"));
         this.books.push(new Book("Sorcerer to the Crown", "Zen Cho"));
         this.books.push(new Book("The Star-Touched Queen", "Roshani Chokshi"));
         this.books.push(new Book("Station Eleven", "Emily St. John Mandel"));
         this.books.push(new Book("Steles of the Sky", "Elizabeth Bear"));
         this.books.push(new Book("The Stone Boatmen", "Sarah Tolmie"));
         this.books.push(new Book("The Summer Goddess", "Joanne Hall"));
         this.books.push(new Book("Summerlong", "Peter S. Beagle"));
         this.books.push(new Book("Take Back the Sky", "Greg Bear"));
         this.books.push(new Book("The Three-Body Problem", "Cixin Liu"));
         this.books.push(new Book("The Three-Body Problem", "Cixin Liu , translated by Ken Liu"));
         this.books.push(new Book("The Tiger and the Wolf", "Adrian Tchaikovsky"));
         this.books.push(new Book("Tigerman", "Nick Harkaway"));
         this.books.push(new Book("Too Like the Lightning", "Ada Palmer"));
         this.books.push(new Book("Trial by Fire", "Charles E. Gannon"));
         this.books.push(new Book("Ultima", "Stephen Baxter"));
         this.books.push(new Book("The Underground Railroad", "Colson Whitehead"));
         this.books.push(new Book("The Unquiet House", "Alison Littlewood"));
         this.books.push(new Book("Unwrapped Sky", "Rjurik Davidson"));
         this.books.push(new Book("Updraft", "Fran Wilde"));
         this.books.push(new Book("Uprooted", "Naomi Novik"));
         this.books.push(new Book("Vigil", "Angela Slatter"));
         this.books.push(new Book("Visitor", "C. J. Cherryh"));
         this.books.push(new Book("The Wall of Storms", "Ken Liu"));
         this.books.push(new Book("War Dogs", "Greg Bear"));
         this.books.push(new Book("The Watchmaker of Filigree Street", "Natasha Pulley"));
         this.books.push(new Book("The Water Knife", "Paolo Bacigalupi"));
         this.books.push(new Book("Waypoint Kangaroo", "Curtis Chen"));
         this.books.push(new Book("Welcome to Night Vale", "Joseph Fink & Jeffrey Cranor"));
         this.books.push(new Book("The Widow's House", "Daniel Abraham"));
         this.books.push(new Book("The Winged Histories", "Sofia Samatar"));
         this.books.push(new Book("The Winter Boy", "Sally Wiener Grotta"));
         this.books.push(new Book("Wolves", "Simon Ings"));
         this.books.push(new Book("Words of Radiance", "Brandon Sanderson"));
         this.books.push(new Book("Work Done for Hire", "Joe Haldeman"));
         this.books.push(new Book("World of Trouble", "Ben H. Winters"));
         this.books.push(new Book("Wylding Hall", "Elizabeth Hand"));

         this.initializeBookToNomination();

         this.bookToNomination[this.books[0]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false));
         this.bookToNomination[this.books[1]].push(new Nomination(hugo, hugo.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[2]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[3]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[4]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[5]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[5]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, true));
         this.bookToNomination[this.books[5]].push(new Nomination(nebula, nebula.categories.properties.novel, 2017, true));
         this.bookToNomination[this.books[6]].push(new Nomination(hugo, hugo.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[6]].push(new Nomination(locus, locus.categories.properties.sf, 2016, true));
         this.bookToNomination[this.books[6]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[7]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, true));
         this.bookToNomination[this.books[7]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[7]].push(new Nomination(locus, locus.categories.properties.sf, 2015, true));
         this.bookToNomination[this.books[7]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[8]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[9]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, true));
         this.bookToNomination[this.books[10]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[11]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[12]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[13]].push(new Nomination(locus, locus.categories.properties.sf, 2016, false));
         this.bookToNomination[this.books[14]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[15]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[16]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[17]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[18]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[19]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[20]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[21]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[22]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[23]].push(new Nomination(nebula, nebula.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[24]].push(new Nomination(locus, locus.categories.properties.sf, 2016, false));
         this.bookToNomination[this.books[25]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[26]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[27]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[28]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[29]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[30]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[31]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[32]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[33]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[34]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[34]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[35]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[36]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[36]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[37]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, false));
         this.bookToNomination[this.books[38]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[39]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[40]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, true));
         this.bookToNomination[this.books[40]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[41]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[42]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[43]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[44]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[45]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[46]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, false));
         this.bookToNomination[this.books[47]].push(new Nomination(locus, locus.categories.properties.sf, 2017, true));
         this.bookToNomination[this.books[48]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[49]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, true));
         this.bookToNomination[this.books[50]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[51]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[52]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[53]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, false));
         this.bookToNomination[this.books[54]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[55]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[55]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[56]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2017, true));
         this.bookToNomination[this.books[57]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[57]].push(new Nomination(nebula, nebula.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[58]].push(new Nomination(hugo, hugo.categories.properties.novel, 2016, true));
         this.bookToNomination[this.books[58]].push(new Nomination(locus, locus.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[58]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[59]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[60]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[61]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[62]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, false));
         this.bookToNomination[this.books[63]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[64]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[65]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[66]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[66]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, true));
         this.bookToNomination[this.books[66]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[67]].push(new Nomination(locus, locus.categories.properties.first, 2016, true));
         this.bookToNomination[this.books[67]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[68]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[69]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[70]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[71]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[72]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false));
         this.bookToNomination[this.books[73]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[74]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2016, true));
         this.bookToNomination[this.books[74]].push(new Nomination(locus, locus.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[75]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[76]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[77]].push(new Nomination(locus, locus.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[78]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[78]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[79]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[80]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, false));
         this.bookToNomination[this.books[81]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[82]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[83]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[84]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, false));
         this.bookToNomination[this.books[85]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[86]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[87]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[87]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[88]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[89]].push(new Nomination(locus, locus.categories.properties.first, 2015, true));
         this.bookToNomination[this.books[90]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[91]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[92]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[92]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[93]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[94]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[95]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[96]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[97]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[97]].push(new Nomination(locus, locus.categories.properties.first, 2017, true));
         this.bookToNomination[this.books[97]].push(new Nomination(nebula, nebula.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[98]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, true));
         this.bookToNomination[this.books[99]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, true));
         this.bookToNomination[this.books[99]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[99]].push(new Nomination(nebula, nebula.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[100]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[101]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[102]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[103]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[103]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[104]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[105]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, true));
         this.bookToNomination[this.books[106]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[107]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[108]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[109]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[110]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[111]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2017, false));
         this.bookToNomination[this.books[112]].push(new Nomination(hugo, hugo.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[112]].push(new Nomination(locus, locus.categories.properties.sf, 2016, false));
         this.bookToNomination[this.books[113]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[114]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[114]].push(new Nomination(locus, locus.categories.properties.first, 2016, false));
         this.bookToNomination[this.books[115]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, false));
         this.bookToNomination[this.books[116]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[117]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[118]].push(new Nomination(locus, locus.categories.properties.first, 2016, false));
         this.bookToNomination[this.books[119]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, false));
         this.bookToNomination[this.books[119]].push(new Nomination(locus, locus.categories.properties.first, 2016, false));
         this.bookToNomination[this.books[120]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[121]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, false));
         this.bookToNomination[this.books[121]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[122]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[123]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[124]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[125]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[126]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[127]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[128]].push(new Nomination(hugo, hugo.categories.properties.novel, 2015, true));
         this.bookToNomination[this.books[128]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[129]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2017, true));
         this.bookToNomination[this.books[130]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[131]].push(new Nomination(hugo, hugo.categories.properties.novel, 2017, false));
         this.bookToNomination[this.books[132]].push(new Nomination(nebula, nebula.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[133]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[134]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[135]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2015, false));
         this.bookToNomination[this.books[136]].push(new Nomination(locus, locus.categories.properties.first, 2015, false));
         this.bookToNomination[this.books[137]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[138]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.fantasy, 2016, true));
         this.bookToNomination[this.books[138]].push(new Nomination(hugo, hugo.categories.properties.novel, 2016, false));
         this.bookToNomination[this.books[138]].push(new Nomination(locus, locus.categories.properties.fantasy, 2016, true));
         this.bookToNomination[this.books[138]].push(new Nomination(nebula, nebula.categories.properties.novel, 2016, true));
         this.bookToNomination[this.books[139]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[140]].push(new Nomination(locus, locus.categories.properties.sf, 2017, false));
         this.bookToNomination[this.books[141]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[142]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[143]].push(new Nomination(locus, locus.categories.properties.first, 2016, false));
         this.bookToNomination[this.books[144]].push(new Nomination(locus, locus.categories.properties.sf, 2016, false));
         this.bookToNomination[this.books[145]].push(new Nomination(locus, locus.categories.properties.first, 2017, false));
         this.bookToNomination[this.books[146]].push(new Nomination(britishFantasy, britishFantasy.categories.properties.horror, 2016, false));
         this.bookToNomination[this.books[147]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[148]].push(new Nomination(locus, locus.categories.properties.fantasy, 2017, false));
         this.bookToNomination[this.books[149]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[150]].push(new Nomination(britishSf, britishSf.categories.properties.novel, 2015, false));
         this.bookToNomination[this.books[150]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[151]].push(new Nomination(locus, locus.categories.properties.fantasy, 2015, false));
         this.bookToNomination[this.books[152]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[153]].push(new Nomination(locus, locus.categories.properties.sf, 2015, false));
         this.bookToNomination[this.books[154]].push(new Nomination(locus, locus.categories.properties.fantasy, 2016, false));

         this.initializeBookToAssessment();
         this.loadBookToAssessment();
      }

      SciFiInitialState.prototype.initializeBookToAssessment = function()
      {
         this.bookToAssessment = UserSettings.resetBookToAssessment(this.bookToAssessment, this.books, this.bookToDclUrl, this.bookToNomination);
      };

      SciFiInitialState.prototype.initializeBookToNomination = function()
      {
         this.books.forEach(function(book)
         {
            this.bookToNomination[book] = [];
         }, this);
      };

      SciFiInitialState.prototype.loadBookToAssessment = function()
      {
         var myBookToAssessment = UserSettings.loadBookToAssessment();
         Object.vizziniMerge(this.bookToAssessment, myBookToAssessment);
      };

      if (Object.freeze)
      {
         Object.freeze(SciFiInitialState);
      }

      return SciFiInitialState;
   });