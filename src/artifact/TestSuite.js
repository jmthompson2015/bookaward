import Logger from "../utility/Logger.js";

import AssessmentTest from "./Assessment.test.js";
import LibraryTest from "./Library.test.js";
import MysteryAward from "./MysteryAward.test.js";
import SciFiAward from "./SciFiAward.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();