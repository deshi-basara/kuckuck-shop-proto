(function () {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$location'];

    /**
     * Handles the landing view and all interactions
     */
    function MainCtrl($scope, $location) {
        var main = this;

        /**
         * Checks if the navigation link is active
         * @param  {string}  url [Url of the navigation link]
         * @return {Boolean}     [description]
         */
        function isActive(url) {
            console.log(url + ' === ' + $location.url());
            return url === $location.url();
        }

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
            console.log('show');
            $scope.$apply(function() {
                main.isLoading = true;
            });
        });

        /**
         * Listens for requests to hide the loader
         */
        $scope.$on('loader.hide', function() {
            console.log('hide');
            $scope.$apply(function() {
                main.isLoading = false;
            });
        });

        //////////////////////

        angular.extend(main, {
            bagOpen: false,
            isLoading: true,

            isActive: isActive,
            toggleBag: toggleBag
        });
    }

})();