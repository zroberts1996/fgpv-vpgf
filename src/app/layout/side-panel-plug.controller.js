(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidePanelPlugController', SidePanelPlugController);

    /* @ngInject */
    function SidePanelPlugController() {
        var self = this;
        self.active = true;
    }
})();
