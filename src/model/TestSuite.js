import Logger from "../utility/Logger.js";

// import ActionTest from "./Action.test.js";
// import BookTest from "./Book.test.js";
// import BookComparatorTest from "./BookComparator.test.js";
import MysteryBookLoaderTest from "./MysteryBookLoader.test.js";
// import NominationTest from "./Nomination.test.js";
// import NominationComparatorTest from "./NominationComparator.test.js";
// import ReducerTest from "./Reducer.test.js";
import SciFiBookLoaderTest from "./SciFiBookLoader.test.js";
// import UserSettingsTest from "./UserSettings.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();
