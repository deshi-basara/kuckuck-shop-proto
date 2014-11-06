(function () {

    'use strict';

    angular
        .module('app')
        .controller('LandingCtrl', LandingCtrl);

    LandingCtrl.$inject = [];

    /**
     * Handles the landing view and all interactions
     */
    function LandingCtrl() {
        var ctrl = this;

        /**
         * Initiate pagepilling when the dom is ready
         */
        angular.element(document).ready(function () {
            $('#landing').pagepiling({
                menu: null,
                direction: 'vertical',
                verticalCentered: true,
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
                anchors: [],
                scrollingSpeed: 700,
                easing: 'swing',
                loopBottom: false,
                loopTop: false,
                css3: true,
                navigation: {
                    'textColor': '#000',
                    'bulletsColor': '#000',
                    'position': 'left',
                    'tooltips': ['Start', 'Fertige Produkte', 'Zum Konfigurator']
                },
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: true,
                sectionSelector: '.section',
                animateAnchor: false,

                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
            });
        });

        /**
         * [openBag description]
         * @return {[type]} [description]
         */
        function openBag() {
            console.log('open');
            ctrl.bagOpen = true;
        }

        //////////////////////

        angular.extend(ctrl, {
            //bagOpen: false,

            //openBag: openBag
        });
    }

})();