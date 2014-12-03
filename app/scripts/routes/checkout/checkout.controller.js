(function () {

    'use strict';

    angular
        .module('app')
        .controller('CheckoutCtrl', CheckoutCtrl);

    CheckoutCtrl.$inject = ['$rootScope', '$timeout', 'SweetAlert'];

    /**
     * Handles the landing view and all interactions
     */
    function CheckoutCtrl($rootScope, $timeout, SweetAlert) {
        var ctrl = this;

        /**
         * Initiate pagepilling when the dom is ready
         */
        angular.element(document).ready(function () {
            setTimeout(function() {

                $('#checkout').pagepiling({
                    menu: null,
                    direction: 'vertical',
                    verticalCentered: true,
                    sectionsColor: ['#7BAABE', '#7BAABE', '#7BAABE'],
                    anchors: [],
                    scrollingSpeed: 700,
                    easing: 'swing',
                    loopBottom: false,
                    loopTop: false,
                    css3: true,
                    navigation: false,
                    normalScrollElements: null,
                    normalScrollElementTouchThreshold: 5,
                    touchSensitivity: 5,
                    keyboardScrolling: true,
                    sectionSelector: '.section',
                    animateAnchor: false,

                    //events
                    onLeave: function(index, nextIndex, direction) {},
                    afterLoad: function(anchorLink, index){
                    },
                    afterRender: function(){

                        // hide the loader
                        $timeout(function() {
                            $rootScope.$broadcast('loader.hide');
                        }, 500);
                    },
                });

            }, 10);
        });

        /**
         * Pagepiling scroll down
         */
        function scrollDown() {
            $.fn.pagepiling.moveSectionDown();
        }

        function scrollUp() {
            $.fn.pagepiling.moveSectionUp();
        }

        /**
         * Fake checkout submit
         */
        function submitCheckout() {
            SweetAlert.swal("Oh noooo", "Diese Funktionalität hat es leider nicht in den Prototypen geschafft :'-(");
        }

        //////////////////////

        angular.extend(ctrl, {
            check: {
                account: false,
                discount: false,
                shipping: false,
                pay: {
                    paypal: false,
                    credit: false,
                    transfer: false
                }
            },
            form: {
            },

            scrollDown: scrollDown,
            scrollUp: scrollUp,
            submitCheckout: submitCheckout
        });

        //////////////////////

        // mark checkout in the navigation as active
        $rootScope.$broadcast('nav.change', 6);
    }

})();