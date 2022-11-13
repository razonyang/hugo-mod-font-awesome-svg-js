import customIcons from 'font-awesome/js/custom';
import icons from 'font-awesome/js/icons';
import { dom, library } from 'js/font-awesome/fontawesome-svg-core';

library.add(...icons);
library.add(...customIcons);
library.add(...modulesIcons);

dom.watch();
