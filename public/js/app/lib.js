define(['jquery'], function ($) {
    return {
        getBody: function () {
            return $('body');
        },
        getApp: function () {
            return $('#app');
        }
    };
});
