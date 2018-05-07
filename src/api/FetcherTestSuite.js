import Logger from "../utility/Logger.js";

import DCLURLFetcher0Test from "./DCLURLFetcher0.test.js";
import SFADBNomineeFetcher0Test from "./SFADBNomineeFetcher0.test.js";
import SYKMNomineeFetcher0Test from "./SYKMNomineeFetcher0.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();