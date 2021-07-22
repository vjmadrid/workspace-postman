#!/usr/bin/env node

var newman = require('newman');

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: require('./sample-collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) { throw err; }
    console.info('collection run complete!');
});