import Logger from "../utility/Logger.js";

import MysteryBookLoaderTest from "./MysteryBookLoader.test.js";
import SciFiBookLoaderTest from "./SciFiBookLoader.test.js";
import UrlGeneratorTest from "./UrlGenerator.test.js";

window.LOGGER = new Logger();
LOGGER.setTraceEnabled(false);
LOGGER.setDebugEnabled(false);
LOGGER.setInfoEnabled(false);

QUnit.start();
