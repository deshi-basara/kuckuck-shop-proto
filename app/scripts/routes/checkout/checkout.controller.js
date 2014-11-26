(function () {

    'use strict';

    angular
        .module('app')
        .controller('CheckoutCtrl', CheckoutCtrl);

    CheckoutCtrl.$inject = ['$rootScope', '$timeout'];

    /**
     * Handles the landing view and all interactions
     */
    function CheckoutCtrl($rootScope, $timeout) {
        var ctrl = this;

        /**
         * Initiate pagepilling when the dom is ready
         */
        angular.element(document).ready(function () {
            $timeout(function() {
                $rootScope.$broadcast('loader.hide');
            }, 500);
        });


        //////////////////////

        angular.extend(ctrl, {

        });
    }

})();