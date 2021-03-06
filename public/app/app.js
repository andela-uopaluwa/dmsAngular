"use strict";
angular.module("dmsApp", ['ui.router','ngMaterial','ngMdIcons'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('homepage', {
        url: '/home',
        templateUrl: 'app/views/login.html',
        controller: 'homeCtrl'
      })
      .state('profile', {
        url: '/userprofile',
        templateUrl: 'app/views/profilepage.view.html',
        controller: 'userCtrl'
      })
      .state('create', {
        url: '/createdoc',
        templateUrl: 'app/views/createdoc.view.html',
        controller: 'userCtrl'
      })
      .state('userhome', {
        url: '/userhome',
        templateUrl: 'app/views/userhome.html',
        controller: 'userCtrl'
      });
    //go to landing if it is an invalid url
    $urlRouterProvider.otherwise('/home');
  });

angular.module('dmsApp')
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('light-blue')
  .warnPalette('red');
});
