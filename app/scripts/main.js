/**
 * @file main.js - load dependencies and start the app.
 * @license MPL-2.0
 */
import FastClick from 'fastclick';
import Hammer from 'hammerjs';
import Promise from 'es6-promise';
import deb from 'debug';
import 'bootstrap';

// The core app
import App from './App';
import './workers/Delegator';

// Utils
import './utils/Env';
import './utils/underscore';
import './utils/I18n';
import './utils/Url';
import './utils/Title';
import './utils/Keybindings';

// Collections
import './collections/modules/main';

// Components
import './components/confirm/Controller';
import './components/navbar/Controller';
import './components/help/controller';
import './components/markdown/main';
import './components/codemirror/main';
import './components/linkDialog/main';
import './components/fileDialog/main';

// Router based components
import './components/notes/Router';
import './components/notebooks/Router';

const log = deb('lav:main');

// Enable promise polyfill
Promise.polyfill();

document.addEventListener('DOMContentLoaded', () => {
    // Enable debugging
    deb.enable('lav*');
    log('DOM is ready');

    // Remove 300ms delay
    FastClick.attach(document.body);

    // Enable text selection
    delete Hammer.defaults.cssProps.userSelect;

    // Start the app
    const app = new App();
    app.lazyStart();
});
