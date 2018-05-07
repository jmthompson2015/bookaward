import Logger from "../utility/Logger.js";

import CrimeAndBeyondFetcherTest from "./CrimeAndBeyondFetcher.test.js";
import DCLURLFetcherTest from "./DCLURLFetcher.test.js";
import SFADBNomineeFetcherTest from "./SFADBNomineeFetcher.test.js";
import SYKMNomineeFetcherTest from "./SYKMNomineeFetcher.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();