(function () {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = [];

    /**
     * Handles the landing view and all interactions
     */
    function MainCtrl() {
        var main = this;

        /**
         * Toggles the shopping car open state.
         */
        function toggleBag() {
            console.log('open');

            main.bagOpen = (main.bagOpen === false) ? true : false;
        }

        //////////////////////

        angular.extend(main, {
            bagOpen: false,

            toggleBag: toggleBag
        });
    }

})();