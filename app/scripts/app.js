/*!
 * Simon Schuster <simon.schuster@hs-furtwangen.de>
 * Kuckuck-Shop-Proto v0.0.5 (https://github.com/deshi-basara/kuckuck-shop-proto)
 */

'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules.
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'.
angular
  .module('app', [
  'ui.router',
  'LocalStorageModule',
  'ngAnimate',
  'ngTable',
  'oitozero.ngSweetAlert',
  'countTo'
])

.constant('config', {
  'name': 'development',
  'apiUrl': 'http://localhost:1337'
})

.config(function($stateProvider, $urlRouterProvider) {

  // This starter uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  $stateProvider

    .state('landing', {
      url: '/',
      templateUrl: 'scripts/routes/landing/landing.index.tpl.html',
      controller: 'LandingCtrl',
      controllerAs: 'ctrl'
    })

    .state('planner', {
      url: '/planer',
      templateUrl: 'scripts/routes/planner/planner.index.tpl.html',
      controller: 'PlannerCtrl',
      controllerAs: 'ctrl'
    })

    .state('checkout', {
      url: '/checkout',
      templateUrl: 'scripts/routes/checkout/checkout.index.tpl.html',
      controller: 'CheckoutCtrl',
      controllerAs: 'ctrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.run(function($state, AuthService) {


});