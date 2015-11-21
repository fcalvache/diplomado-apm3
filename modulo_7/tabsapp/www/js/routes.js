angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('page', {
      url: '/page2',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })
        
      
    
      
        
    .state('tabsController.cameraTabDefaultPage', {
      url: '/page3',
      views: {
        'tab1': {
          templateUrl: 'templates/cameraTabDefaultPage.html',
          controller: 'cameraTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
        
    .state('cartTabDefaultPage', {
      url: '/page4',
      templateUrl: 'templates/cartTabDefaultPage.html',
      controller: 'cartTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('tabsController.cloudTabDefaultPage', {
      url: '/page5',
      views: {
        'tab3': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2');

});