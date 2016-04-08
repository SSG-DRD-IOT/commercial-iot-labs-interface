function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise("/index/home");

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: false
  });

  $stateProvider
    .state('index', {
      abstract: true,
      url: "/index",
      templateUrl: "views/common/content.html",
    })
    .state('index.home', {
      url: "/home",
      templateUrl: "views/home.html",
      data: {
        pageTitle: 'Home',
        specialClass: 'landing-page'
      }
    })
    .state('index.schedule', {
      url: "/schedule",
      templateUrl: "views/schedule.html",
      data: {
        pageTitle: 'Schedule'
      }
    })
    .state('index.presentations', {
      url: "/presentations",
      templateUrl: "views/presentations.html",
      data: {
        pageTitle: 'Slides View'
      }
    })
    .state('index.videos', {
      url: "/videos",
      templateUrl: "views/videos.html",
      data: {
        pageTitle: 'Videos'
      }
    })
    .state('labs', {
      abstract: true,
      url: "/labs",
      templateUrl: "views/common/content.html"
    })
    .state('labs.introduction', {
      url: "/introduction",
      templateUrl: "views/labs/intro/index.html",
      data: {
        pageTitle: 'Introduction'
      }
    })
    .state('labs.build', {
      url: "/build",
      templateUrl: "views/labs/build/index.html",
      data: {
        pageTitle: 'Build an Edge Device'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.networking', {
      url: "/networking",
      templateUrl: "views/labs/networking/index.html",
      data: {
        pageTitle: 'Application Protocols: MQTT and HTTP'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.protocols', {
      url: "/protocols",
      templateUrl: "views/labs/protocols/index.html",
      data: {
        pageTitle: 'Using Bluetooth and Zigbee'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.databases', {
      url: "/databases",
      templateUrl: "views/labs/databases/index.html",
      data: {
        pageTitle: 'Build an Edge Device'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.admin', {
      url: "/admin-interface",
      templateUrl: "views/labs/admin-interface/index.html",
      data: {
        pageTitle: 'Custom Administrative Interface'
      }
    })
    .state('labs.automation', {
      url: "/automation",
      templateUrl: "views/labs/automation/index.html",
      data: {
        pageTitle: 'Automation on the Internet of Things'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.security', {
      url: "/security",
      templateUrl: "views/labs/security/index.html",
      data: {
        pageTitle: 'Security on the Internet of Things'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.cloud', {
      url: "/cloud",
      templateUrl: "views/labs/cloud/index.html",
      data: {
        pageTitle: 'Data Analytics on the Cloud'
      },
      resolve: {
        loadPlugin: function($ocLazyLoad) {
          return $ocLazyLoad.load([{
            serie: true,
            files: [
              'bower_components/codemirror/lib/codemirror.css',
              'bower_components/codemirror/theme/ambiance.css',
              'bower_components/codemirror/lib/codemirror.js',
              'bower_components/codemirror/mode/javascript/javascript.js'
            ]
          }, {
            name: 'ui.codemirror',
            files: ['bower_components/angular-ui-codemirror/ui-codemirror.min.js']
          }]);
        }
      }
    })
    .state('labs.solutions', {
      url: "/solutions",
      templateUrl: "views/solutions.html",
      data: {
        pageTitle: 'Lab Solutions'
      }
    })
    .state('labs.additional', {
      url: "/more-info",
      templateUrl: "views/labs/more/index.html",
      data: {
        pageTitle: 'More Information'
      }
    })
    .state('index.faq', {
      url: "/faq",
      templateUrl: "views/faq.html",
      data: {
        pageTitle: 'FAQ'
      }
    });
}
angular
  .module('inspinia')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
