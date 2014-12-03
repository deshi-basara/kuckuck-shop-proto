(function () {

    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$location', '$state'];

    /**
     * Handles the landing view and all interactions
     */
    function MainCtrl($scope, $location, $state) {
        var main = this;

        /**
         * Starts the checkout process after validation
         */
        function checkoutBag() {
            // validate
            if(main.bagItems.length === 0) {
                return main.showFeedback = true;
            }

            $state.go('checkout');
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

            bagItems: [],
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
         * Listens for new shopping card items
         */
        $scope.$on('card.item', function() {
            main.bagItems.push('fake');
        });

        /**
         * Listens for navigation 'active' changes.
         * @param  {object} broadEvent [Angular broadcast object]
         * @param  {int}    index      [Current slider index]
         */
        $scope.$on('nav.change', function(broadEvent, index) {
            main.enabled = index;
        });

        /**
         * Listens for navigation 'complete' changes.
         * @param  {object} broadEvent [Angular broadcast object]
         * @param  {string} key        [Object key of the completed navigation item (main.complete)]
         */
        $scope.$on('nav.complete', function(broadEvent, key) {
            main.complete[key] = true;

            // when colors are completed, show the checkout navigation
            if(key === 'farben') {
                main.complete.checkout = true;
            }
        });
        $scope.$on('nav.uncomplete', function(broadEvent, key) {
            main.complete[key] = false;

            // when extras are uncompleted, hide the checkout navigation
            if(key === 'extras') {
                main.complete.checkout = false;
            }
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