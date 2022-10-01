import { config } from 'js/font-awesome/fontawesome-svg-core';
import { faGithub } from 'js/font-awesome/free-brands-svg-icons/faGithub';
import { faFile } from 'js/font-awesome/free-regular-svg-icons/faFile';
import { faTerminal } from 'js/font-awesome/free-solid-svg-icons/faTerminal';
import { faTimeline } from 'js/font-awesome/free-solid-svg-icons/faTimeline';

// Configuration.
// See also https://fontawesome.com/docs/apis/javascript/configuration for v6.
// See also https://fontawesome.com/v5/docs/apis/javascript/configuration for v5.
config.showMissingIcons = false;

const icons = [
    // Regular icons
    faFile,

    // Solid icons
    faTerminal, faTimeline, 

    // Brand icons
    faGithub,
];

export default icons;
