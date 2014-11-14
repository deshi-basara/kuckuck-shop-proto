(function () {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    /**
     * Handles the landing view and all interactions
     */
    function MainCtrl($scope) {
        var main = this;

        /**
         * Toggles the shopping car open state.
         */
        function toggleBag() {
            main.bagOpen = (main.bagOpen === false) ? true : false;
        }

        /**
         * Listens for requests to see the loader
         */
        $scope.$on('loader.show', function() {
            $scope.$apply(function() {
                main.isLoading = true;
            });
        });

        /**
         * Listens for requests to hide the loader
         */
        $scope.$on('loader.hide', function() {
            $scope.$apply(function() {
                main.isLoading = false;
            });
        });

        //////////////////////

        angular.extend(main, {
            bagOpen: false,
            isLoading: true,

            toggleBag: toggleBag
        });
    }

})();