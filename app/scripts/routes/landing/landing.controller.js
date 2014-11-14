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
         * Holdes the current sliderIndex and computes it with the length of the
         * sliderArray.
         * @return {String} [SliderIndex / SliderLength]
         */
        function sliderIndex() {
            return (parseInt(ctrl.sliderPos.index) + 1) + ' / ' + ctrl.slidesArray.length;
        }

        /**
         * Changes the product slider's position accordingly to its slider position.
         */
        function sliderChange() {

        }

        function sliderTranslate(index) {
            return {'-webkit-transform': 'translate3d('+ parseInt(ctrl.sliderPos.index) * -410  +'px,0,0)'};
        }

        //////////////////////

        angular.extend(ctrl, {
            sliderPos: {index: 0},
            //sliderTranslate: {'-webkit-transform': 'translate3d(0px, 0px, 0px'},
            slidesArray: [{name: 'blau.png', price: 100}, {name: 'gelb.png', price: 100}, {name: 'rosa.png', price: 100},{name: 'blau.png', price: 100}, {name: 'gelb.png', price: 100}, {name: 'rosa.png', price: 100}],

            sliderChange: sliderChange,
            sliderIndex: sliderIndex,
            sliderTranslate: sliderTranslate
        });
    }

})();