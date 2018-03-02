'use strict';

const xsjs = require('@sap/xsjs');
const xsenv = require('@sap/xsenv');

const port = process.env.PORT || 3000;

const options = xsenv.getServices({
    hana: {
        tag: 'hana'
    },
    uaa: {
        tag: 'xsuaa'
    }
});

xsjs(options).listen(port);

console.log('Server listening on port %d', port);
