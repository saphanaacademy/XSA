'use strict';

var xsjs = require('sap-xsjs');
var xsenv = require('sap-xsenv');

var port = process.env.PORT || 3000;

var options = xsenv.getServices({uaa:{tag:'xsuaa'}});

xsjs(options).listen(port);

console.log('Server listening on port %d', port);
