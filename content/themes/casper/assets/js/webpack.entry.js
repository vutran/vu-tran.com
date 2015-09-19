// Load stylesheets
import '../css/screen.css';
import '../css/fontello.css';
import '../css/prism.css';

// Load default scripts
import './prism.js';
import './jquery.fitvids.js';
import './index.js';

// Load custom components
import touchMenu from './components/touchMenu.js';


// Instantiate the touch menu
var tm = new touchMenu({
    bodyOpenedClass: 'nav-opened',
    bodyClosedClass: 'nav-closed',
    closeButton: '.nav-close',
    openButton: '.menu-button',
    nav: '.nav',
    content: '.site-wrapper'
});
tm.init();
