/*global self:false, unsafeWindow:false, document:false, window:false */
"use strict";

var triggerTweetLoad, newTweetsAvailable, pageIsScrolledToTop, startInterval;

var $ = unsafeWindow.$;

triggerTweetLoad = function() {
    var pressPeriod = $.Event('keydown', {which: 190});
    $(document.body).trigger(pressPeriod);
};

newTweetsAvailable = function() {
    return $('.new-tweets-bar').length > 0;
};

pageIsScrolledToTop = function() {
    return $(window).scrollTop() === 0;
};

startInterval = function(interval) {
    window.setInterval(function() {
        if(pageIsScrolledToTop() && newTweetsAvailable()) {
            triggerTweetLoad();
        }
    }, interval * 1000);
};

(function() {
    self.port.on('interval', function(interval) {
        startInterval(interval);
    });
})();
