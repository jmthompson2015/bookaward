import MysteryAward from "../artifact/MysteryAward.js";
import Nomination from "../state/Nomination.js";

const SYKMBookToNominationData = {
    "A World of Curiosities by Louise Penny": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2022, true),
    ],
    "Bayou Book Thief by Ellen Byron": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Death by Bubble Tea by Jennifer J. Chow": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Fatal Reunion by Annette Dashofy": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Dead Man's Leap by Tina de Bellegarde": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2022, false),
    ],
    "Because I Could Not Stop for Death by Amanda Flowe": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2022, true),
    ],
    "The Counterfeit Wife by Mally Becker": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2022, false),
    ],
    "The Lindbergh Nanny by Mariah Fredericks": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2022, false),
    ],
    "In Place of Fear by Catriona McPherson": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2022, false),
    ],
    "Under a Veiled Moon by Karen Odden": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2022, false),
    ],
    "Cheddar Off Dead by Korina Moss": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, true),
    ],
    "The Finalist by Joan Long": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "Death in the Aegean by M.A. Monnin": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "The Bangalore Detectives Club by Harini Nagendra": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "Devil's Chew Toy by Rob Osler": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "The Gallery of Beauties by Nina Wachsman": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2022, false),
    ],
    "Cajun Kiss of Death by Ellen Byron": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2021, true),
    ],
    "Watch Her by Edwin Hill": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "The Madness of Crowds by Louise Penny": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Her Perfect Life by Hank Phillippi Ryan": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Symphony Road by Gabriel Valjan": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "contemporary"), 2021, false),
    ],
    "Death at Greenway by Lori Rader-Day": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2021, true),
    ],
    "Murder at Mallowan Hall by Colleen Cambridge": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "Clark and Division by Naomi Hirahara": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2021, false),
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "mystery"), 2022, false),
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "The Bombay Prince by Sujata Massey": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "The Devil's Music by Gabriel Valjan": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "historical"), 2021, false),
    ],
    "Arsenic and Adobo by Mia P. Manansala": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2021, true),
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "first"), 2022, true),
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "The Turncoat's Widow by Mally Becker": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "A Dead Man's Eyes by Lori Duffy Foster": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2021, false),
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "Murder in the Master by Judy L. Murray": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "Mango, Mambo, and Murder by Raquel V. Reyes": [
        new Nomination(MysteryAward["agatha"], MysteryAward.category("agatha", "first"), 2021, false),
    ],
    "The Accomplice by Steve Cavanag": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Desert Star by Michael Connelly": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "The Dark Flood by Deon Meyer": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Shifty's Boys by  Chris Offutt": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "Secret Identity by Alex Segura": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "City on Fire by Don Winslow": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2023, false),
    ],
    "In the Blood by Jack Carr": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Winter Work by Dan Fesperman": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Sierra Six by Mark Greaney": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Bad Actors by Mick Herron": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Goering's Gold by Richard O'Rawe": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Killers of a Certain Age by Deanna Raybourn": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2023, false),
    ],
    "Razorblade Tears by S.A. Cosby": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "mystery"), 2022, true),
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, true),
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "The Dark Hours by Michael Connelly": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "Last Redemption by Matt Coyle": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, false),
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Billy Summers by Stephen King": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "We Begin at the End by Chris Whitaker": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "mystery"), 2022, false),
    ],
    "Sleeping Bear by Connor Sullivan": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, true),
    ],
    "Who Is Maud Dixon? by Alexandra Andrews": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Girl  A by Abigail Dean": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Down Range by Taylor Moore": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Falling by T.J. Newman": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "Steel Fear by Brandon Webb & John David Mann": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "first mystery"), 2022, false),
    ],
    "The Good Turn by Dervla McTiernan": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, true),
    ],
    "The Hunted by Gabriel Bergmoser": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Black Coral by Andrew Mayne": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Search for Her by Rick Mofina": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Bound by Vanda Symon": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "paperback"), 2022, false),
    ],
    "Five Decembers by James Kestrel": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, true),
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2022, true),
    ],
    "The Devil's Hand by Jack Carr": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "The Nameless Ones by John Connolly": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Dead by Dawn by Paul Doiron": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Relentless by Mark Greaney": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "Slough House by Mick Herron": [
        new Nomination(MysteryAward["barry"], MysteryAward.category("barry", "thriller"), 2022, false),
    ],
    "The Wheel of Doll by Jonathan Ames": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Big Bundle by Max Allan Collins": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Goodbye Coast: A Philip Marlowe Novel by Joe Ide": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "Holmes Coming by Kenneth Johnson": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "The Blackmail by M. Ravenel": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2023, false),
    ],
    "Quarry's Blood by Max Allan Collins": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2023, false),
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "DoubleBlind by Fischer Hellmann": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Canary in the Coal Mine by Charles Salzberg": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Dead-Bang Fall by J.R. Sanders": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Hush Hush by Gabriel Valjan": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2023, false),
    ],
    "Big Fat F@!k-up by Lawrence Allan": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Pay Dirt Road by Samantha Jayne Allen": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Foote by Tom Bredehoft": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "What Meets the Eye by Alex Kenna": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "The Goldenacre by Philip Miller": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2023, false),
    ],
    "Family Business by S.J. Rozan": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2022, true),
    ],
    "Runner by Tracy Clark": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "mystery"), 2022, false),
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Pay or Play by Howard Michael Gould": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Head Case by Michael Wiley": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "hardcover"), 2022, false),
    ],
    "Every City is Every Other City by John McFetridge": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2022, true),
    ],
    "The Burden of Innocence by John Nardizzi": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Angels in the Wind by Manuel Ramos": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Frog in a Bucket by Clive Rosengren": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "An Empty Grave by Andrew Welsh-Huggins": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "paperback"), 2022, false),
    ],
    "Lost Little Girl by Gregory Stout": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2022, true),
    ],
    "Porno Valley by Phillip Elliot": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "Suburban Dicks by Fabian Nicieza": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "The Arrangement by M. Ravenel": [
        new Nomination(MysteryAward["shamus"], MysteryAward.category("shamus", "first"), 2022, false),
    ],
    "The Collective by Alison Gaylin": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "mystery"), 2022, false),
    ],
    "These Toxic Things by Rachel Howzell Hall": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "mystery"), 2022, false),
    ],
    "Her Name Is Knight by Yasmin Angoe": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "The Other Black Girl by Zakiya Dalila Harris": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "Walking Through Needles by Heather Levy": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "All Her Little Secrets by Wanda M. Morris": [
        new Nomination(MysteryAward["anthony"], MysteryAward.category("anthony", "first"), 2022, false),
    ],
    "Notes on an Execution by Danya Kukafka": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, true),
    ],
    "Devil House by John Darnielle": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Like a Sister by Kellye Garrett": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Gangland by Chuck Hogan": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "The Devil Takes You Home by Gabino Iglesias": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "The Maid by Nita Prose": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2023, false),
    ],
    "Or Else by Joe Hart": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2023, true),
    ],
    "On a Quiet Street by Seraphina Nova Glass": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "Cleopatra's Dagger by Carole Lawrence": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "A Familiar Stranger by A.R. Torre": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2023, false),
    ],
    "The Venice Sketchbook by Rhys Bowen": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "How Lucky by Will Leitch": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "No One Will Miss Her by Kat Rosenfield": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "mystery"), 2022, false),
    ],
    "Bobby March Will Live Forever by Alan Parks": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, true),
    ],
    "Kill All Your Darlings by David Bell": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Lighthouse Witches by C.J. Cooke": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Album of Dr. Moreau by Daryl Gregory": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "Starr Sign by C.S. O'Cinneide": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
    "The Shape of Darkness by Laura Purcell": [
        new Nomination(MysteryAward["edgar"], MysteryAward.category("edgar", "paperback"), 2022, false),
    ],
};

export default SYKMBookToNominationData;
