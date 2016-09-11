import HelloWorld from 'views/HelloWorld.react';
import React from 'react';
import ReactDOM from 'react-dom';

require('stylesheets/base.scss');

/**
 * App entry point
 */

ReactDOM.render(<HelloWorld />, document.getElementById('browser_mount'));