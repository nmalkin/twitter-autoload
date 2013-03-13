/*global require:false */
"use strict";

var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');
var prefs = require("sdk/simple-prefs");

pageMod.PageMod({
    include: '*.twitter.com',
    contentScriptFile: data.url('main.js'),
    onAttach: function(worker) {
        worker.port.emit('interval', prefs.prefs.interval);
    }
});
