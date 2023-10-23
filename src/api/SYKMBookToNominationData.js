import MysteryAward from "../artifact/MysteryAward.js";
import Nomination from "../state/Nomination.js";

const SYKMBookToNominationData = {
    "Like a Sister by Kellye Garrett": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, true),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "The Devil Takes You Home by Gabino Iglesias": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "The Bullet That Missed by Richard Osman": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, false),
    ],
    "A World of Curiosities by Louise Penny": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2022, true),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, false),
    ],
    "The Maid by Nita Prose": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2023, true),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Secret Identity by Alex Segura": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover"), 2023, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "The Quarry Girls by Jess Lourey": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback"), 2023, true),
    ],
    "Real Bad Things by Kelly J. Ford": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback"), 2023, false),
    ],
    "Dead Drop by James L'Etoile": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback"), 2023, false),
    ],
    "Hush Hush by Gabriel Valjan": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback"), 2023, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "In the Dark We Forget by Sandra SG Wong": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback"), 2023, false),
    ],
    "Don't Know Tough by Eli Cranor": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2023, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2023, true),
    ],
    "Shutter by Ramona Emerson": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2023, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2023, false),
    ],
    "The Bangalore Detectives Club by Harini Nagendra": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2023, false),
    ],
    "Devil's Chew Toy by Rob Osler": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2023, false),
    ],
    "Anywhere You Run by Wanda M. Morris": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, true),
    ],
    "The Lindbergh Nanny by Mariah Fredericks": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2022, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, false),
    ],
    "In Place of Fear by Catriona McPherson": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2022, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, false),
    ],
    "Danger on the Atlantic by Erica Ruth Neubauer": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, false),
    ],
    "Under a Veiled Moon by Karen Odden": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2022, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, false),
    ],
    "Lavender House by Lev AC Rosen": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "historical"), 2023, false),
    ],
    "Razorblade Tears by S.A. Cosby": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "mystery"), 2022, true),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, true),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "Runner by Tracy Clark": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "mystery"), 2022, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "The Collective by Alison Gaylin": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "mystery"), 2022, false),
    ],
    "Clark and Division by Naomi Hirahara": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2021, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "mystery"), 2022, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "These Toxic Things by Rachel Howzell Hall": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "mystery"), 2022, false),
    ],
    "Arsenic and Adobo by Mia P. Manansala": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2021, true),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first"), 2022, true),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Her Name Is Knight by Yasmin Angoe": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "The Other Black Girl by Zakiya Dalila Harris": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "Walking Through Needles by Heather Levy": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "All Her Little Secrets by Wanda M. Morris": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "Bloodline by Jess Lourey": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback2"), 2022, true),
    ],
    "The Ninja Betrayed by Tori Eldridge": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback2"), 2022, false),
    ],
    "Warn Me When It's Time by Cheryl A. Head": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback2"), 2022, false),
    ],
    "Bury Me In Shadows by Greg Herren": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback2"), 2022, false),
    ],
    "The Mother Next Door by Tara Laskowski": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback2"), 2022, false),
    ],
    "Blacktop Wasteland by S.A. Cosby": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover2"), 2021, true),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, true),
    ],
    "What You Don't See by Tracy Clark": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover2"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2021, false),
    ],
    "Little Secrets by Jennifer Hillier": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover2"), 2021, false),
    ],
    "And Now She's Gone by Rachel Howzell Hall": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover2"), 2021, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2021, false),
    ],
    "The First To Lie by Hank Phillippi Ryan": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "hardcover2"), 2021, false),
    ],
    "Winter Counts by David Heska Wanbli Weiden": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2021, true),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, true),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2021, false),
    ],
    "Derailed by Mary Keliikoa": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2020, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2021, false),
    ],
    "Murder in Old Bombay by Nev March": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2021, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2021, false),
    ],
    "Murder at the Mena House by Erica Ruth Neubauer": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2020, true),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2021, false),
    ],
    "The Thursday Murder Club by Richard Osman": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "first2"), 2021, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, false),
    ],
    "Unspeakable Things by Jess Lourey": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback3"), 2021, true),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2021, false),
    ],
    "The Fate of a Flapper by Susanna Calkins": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2020, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback3"), 2021, false),
    ],
    "When No One Is Watching by Alyssa Cole": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback3"), 2021, false),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2021, true),
    ],
    "The Lucky One by Lori Rader-Day": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2020, false),
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback3"), 2021, false),
    ],
    "Dirty Old Town by Gabriel Valjan": [
        new Nomination(MysteryAward.award("anthony"), MysteryAward.category("anthony", "paperback3"), 2021, false),
    ],
    "The Accomplice by Steve Cavanag": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Desert Star by Michael Connelly": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "The Dark Flood by Deon Meyer": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Shifty's Boys by  Chris Offutt": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "City on Fire by Don Winslow": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Before You Knew My Name by Jacqueline Bublitz": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
    ],
    "Blood Sugar by Sascha Rothchild": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
    ],
    "Dirt Creek by Hayley Scrivenor": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "debut"), 2023, false),
    ],
    "In the Blood by Jack Carr": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Winter Work by Dan Fesperman": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Sierra Six by Mark Greaney": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Bad Actors by Mick Herron": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Goering's Gold by Richard O'Rawe": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Killers of a Certain Age by Deanna Raybourn": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "The Dark Hours by Michael Connelly": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "Last Redemption by Matt Coyle": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Billy Summers by Stephen King": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "We Begin at the End by Chris Whitaker": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "Sleeping Bear by Connor Sullivan": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, true),
    ],
    "Who Is Maud Dixon? by Alexandra Andrews": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Girl  A by Abigail Dean": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Down Range by Taylor Moore": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Falling by T.J. Newman": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Steel Fear by Brandon Webb & John David Mann": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "The Good Turn by Dervla McTiernan": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, true),
    ],
    "The Hunted by Gabriel Bergmoser": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Black Coral by Andrew Mayne": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Search for Her by Rick Mofina": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Bound by Vanda Symon": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Five Decembers by James Kestrel": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, true),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2022, true),
    ],
    "The Devil's Hand by Jack Carr": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "The Nameless Ones by John Connolly": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Dead by Dawn by Paul Doiron": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Relentless by Mark Greaney": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Slough House by Mick Herron": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "The Boy from the Woods by Harlan Coben": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, false),
    ],
    "The Law of Innocence by Michael Connelly": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, false),
    ],
    "Moonflower Murders by Anthony Horowitz": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, false),
    ],
    "All the Devils Are Here by Louise Penny": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2020, true),
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "mystery"), 2021, false),
    ],
    "Deep State by Chris Hauty": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, false),
    ],
    "The Eighth Detective by Alex Pavesi": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, false),
    ],
    "Darling Rose Gold by Stephanie Wrobel": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "first"), 2021, false),
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2021, false),
    ],
    "Turn to Stone by James W. Ziskin": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, true),
    ],
    "Monkok Station by Jake Needham": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, false),
    ],
    "Hide Away by Jason Pinter": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, false),
    ],
    "Bad News Travels Fast by James Swain": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, false),
    ],
    "Darkness for Light by Emma Viskic": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "paperback"), 2021, false),
    ],
    "Eddie's Boy by Thomas Perry": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, true),
    ],
    "Double Agent by Tom Bradby": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, false),
    ],
    "Blind Vigil by Matt Coyle": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2021, true),
    ],
    "One Minute Out by Mark Greaney": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, false),
    ],
    "The Last Hunt by Deon Meyer": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, false),
    ],
    "The Wild One by Nick Petrie": [
        new Nomination(MysteryAward.award("barry"), MysteryAward.category("barry", "thriller"), 2021, false),
    ],
    "The Wheel of Doll by Jonathan Ames": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Big Bundle by Max Allan Collins": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Goodbye Coast: A Philip Marlowe Novel by Joe Ide": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "Holmes Coming by Kenneth Johnson": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Blackmail by M. Ravenel": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "Quarry's Blood by Max Allan Collins": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2023, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "DoubleBlind by Fischer Hellmann": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Canary in the Coal Mine by Charles Salzberg": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Dead-Bang Fall by J.R. Sanders": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Big Fat F@!k-up by Lawrence Allan": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Pay Dirt Road by Samantha Jayne Allen": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Foote by Tom Bredehoft": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "What Meets the Eye by Alex Kenna": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "The Goldenacre by Philip Miller": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Family Business by S.J. Rozan": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2022, true),
    ],
    "Pay or Play by Howard Michael Gould": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Head Case by Michael Wiley": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Every City is Every Other City by John McFetridge": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2022, true),
    ],
    "The Burden of Innocence by John Nardizzi": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Angels in the Wind by Manuel Ramos": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Frog in a Bucket by Clive Rosengren": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "An Empty Grave by Andrew Welsh-Huggins": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Lost Little Girl by Gregory Stout": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2022, true),
    ],
    "Porno Valley by Phillip Elliot": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "A Dead Man's Eyes by Lori Duffy Foster": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "Suburban Dicks by Fabian Nicieza": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2022, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "The Arrangement by M. Ravenel": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "Do No Harm by Max Allan Collins": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2021, false),
    ],
    "House on Fire by Joseph Finder": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "hardcover"), 2021, false),
    ],
    "Brittle Karma by Richard Helms": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2021, true),
    ],
    "Farewell Las Vegas by Grant Bywaters": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2021, false),
    ],
    "All Kinds of Ugly by Ralph Dennis": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2021, false),
    ],
    "Remember My Face by John Lantigua": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2021, false),
    ],
    "Damaged Goods by Debbi Mack": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "paperback"), 2021, false),
    ],
    "The Missing American by Kwei Quartey": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, false),
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2021, true),
    ],
    "I Know Where You Sleep by Alan Orloff": [
        new Nomination(MysteryAward.award("shamus"), MysteryAward.category("shamus", "first"), 2021, false),
    ],
    "Bayou Book Thief by Ellen Byron": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Death by Bubble Tea by Jennifer J. Chow": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Fatal Reunion by Annette Dashofy": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Dead Man's Leap by Tina de Bellegarde": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Because I Could Not Stop for Death by Amanda Flowe": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2022, true),
    ],
    "The Counterfeit Wife by Mally Becker": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2022, false),
    ],
    "Cheddar Off Dead by Korina Moss": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, true),
    ],
    "The Finalist by Joan Long": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "Death in the Aegean by M.A. Monnin": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "The Gallery of Beauties by Nina Wachsman": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "Cajun Kiss of Death by Ellen Byron": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2021, true),
    ],
    "Watch Her by Edwin Hill": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "The Madness of Crowds by Louise Penny": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Her Perfect Life by Hank Phillippi Ryan": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Symphony Road by Gabriel Valjan": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Death at Greenway by Lori Rader-Day": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2021, true),
    ],
    "Murder at Mallowan Hall by Colleen Cambridge": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "The Bombay Prince by Sujata Massey": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "The Devil's Music by Gabriel Valjan": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "The Turncoat's Widow by Mally Becker": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "Murder in the Master by Judy L. Murray": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "Mango, Mambo, and Murder by Raquel V. Reyes": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "The Gift of the Magpie by Donna Andrews": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2020, false),
    ],
    "Murder in the Bayou Boneyard by Ellen Byron": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2020, false),
    ],
    "From Beer to Eternity by Sherry Harris": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "contemporary"), 2020, false),
    ],
    "The Last Mrs. Summers by Rhys Bowen": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2020, true),
    ],
    "A Lady's Guide to Mischief and Murder by Dianne Freeman": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2020, false),
    ],
    "Taken Too Soon by Edith Maxwell": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2020, false),
    ],
    "The Turning Tide by Catriona McPherson": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "historical"), 2020, false),
    ],
    "A Spell for Trouble by Esme Addison": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2020, false),
    ],
    "Winter Witness by Tina deBellegarde": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2020, false),
    ],
    "Murder Most Sweet by Laura Jensen Walker": [
        new Nomination(MysteryAward.award("agatha"), MysteryAward.category("agatha", "first"), 2020, false),
    ],
    "Notes on an Execution by Danya Kukafka": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, true),
    ],
    "Devil House by John Darnielle": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Gangland by Chuck Hogan": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Jackal by Erin E. Adams": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2023, false),
    ],
    "More Than You'll Ever Know by Katie Gutierrez": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2023, false),
    ],
    "Portrait of a Thief by Grace D. Li": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2023, false),
    ],
    "Or Else by Joe Hart": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2023, true),
    ],
    "On a Quiet Street by Seraphina Nova Glass": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "Cleopatra's Dagger by Carole Lawrence": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "A Familiar Stranger by A.R. Torre": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "The Venice Sketchbook by Rhys Bowen": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "How Lucky by Will Leitch": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "No One Will Miss Her by Kat Rosenfield": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "Deer Season by Erin Flanagan": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2022, true),
    ],
    "Never Saw Me Coming by Vera Kurian": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2022, false),
    ],
    "What Comes After by JoAnne Tompkins": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2022, false),
    ],
    "The Damage by Caitlin Wahrer": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2022, false),
    ],
    "Bobby March Will Live Forever by Alan Parks": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, true),
    ],
    "Kill All Your Darlings by David Bell": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Lighthouse Witches by C.J. Cooke": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Album of Dr. Moreau by Daryl Gregory": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "Starr Sign by C.S. O'Cinneide": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Shape of Darkness by Laura Purcell": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "Djinn Patrol on the Purple Line by Deepa Anappara": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, true),
    ],
    "Before She Was Helen by Caroline B. Cooney": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, false),
    ],
    "These Women by Ivy Pochoda": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, false),
    ],
    "The Distant Dead by Heather Young": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "mystery"), 2021, false),
    ],
    "Please See Us by Caitlin Mullen": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2021, true),
    ],
    "Catherine House by Elisabeth Thomas": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "first"), 2021, false),
    ],
    "The Deep, Deep Snow by Brian Freeman": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2021, false),
    ],
    "Keeper by Jessica Moor": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2021, false),
    ],
    "East of Hounslow by Khurrum Rahman": [
        new Nomination(MysteryAward.award("edgar"), MysteryAward.category("edgar", "paperback"), 2021, false),
    ],
};

export default SYKMBookToNominationData;
