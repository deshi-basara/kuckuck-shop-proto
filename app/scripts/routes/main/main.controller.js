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
         * Starts the checkout process after validation
         */
        function checkoutBag() {
            // validate
            if(!main.bagItems) {
                return main.showFeedback = true;
            }

        }

        /**
         * Checks if the navigation link is active
         * @param  {string}  url [Url of the navigation link]
         * @return {Boolean}     [description]
         */
        function isActive(url) {
            return url == $location.hash();
        }

        /**
         * Submits the login data (actually just closes the modal)
         */
        function submitLogin() {
            main.showModal = false;
        }

        /**
         * Toggles the shopping car open state.
         */
        function toggleBag() {
            main.bagOpen = (main.bagOpen === false) ? true : false;
        }

        //////////////////////

        angular.extend(main, {
            bagOpen: false,
            isLoading: true,
            showFeedback: false,
            showLogin: true,
            showModal: false,
            priceTotal: 0,

            bagItems: null,
            complete: {
                gehaeuse: false,
                material: false,
                ausstattung: false,
                farben: false,
                extras: false,
                checkout: false
            },

            checkoutBag: checkoutBag,
            isActive: isActive,
            submitLogin: submitLogin,
            toggleBag: toggleBag
        });

        //////////////////////

        /**
         * Listens for navigation 'active' changes.
         * @param  {object} broadEvent [Angular broadcast object]
         * @param  {int}    index      [Current slider index]
         */
        $scope.$on('nav.change', function(broadEvent, index) {
            $scope.$apply(function() {
                main.enabled = index;
            });
        });

        /**
         * Listens for navigation 'complete' changes.
         * @param  {object} broadEvent [Angular broadcast object]
         * @param  {string} key        [Object key of the completed navigation item (main.complete)]
         */
        $scope.$on('nav.complete', function(broadEvent, key) {
            $scope.$apply(function() {
                main.complete[key] = true;
            });
        });


        /**
         * Listens for requests to see the loader.
         */
        $scope.$on('loader.show', function() {
            $scope.$apply(function() {
                main.isLoading = true;
            });
        });

        /**
         * Listens for requests to hide the loader.
         */
        $scope.$on('loader.hide', function() {
            $scope.$apply(function() {
                main.isLoading = false;
            });
        });

        ////////////////////

    }

})();