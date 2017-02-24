function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
  $urlRouterProvider.otherwise("/index/home");

  $ocLazyLoadProvider.config({
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
    .state('labs.introduction-nuc', {
      url: "/introduction-nuc",
      templateUrl: "views/labs/intro-nuc/index.html",
      data: {
        pageTitle: 'Introduction'
      }
    })
    .state('labs.hdc', {
      url: "/hdc",
      templateUrl: "views/labs/hdc/index.html",
      data: {
        pageTitle: 'The Helix Device Cloud'
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
    .state('labs.protocols-javascript', {
      url: "/protocols-javascript",
      templateUrl: "views/labs/protocols-javascript/index.html",
      data: {
        pageTitle: 'IoT Protocols: JavaScript'
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

    .state('labs.protocols-node-red', {
      url: "/protocols-node-red",
      templateUrl: "views/labs/protocols-node-red/index.html",
      data: {
        pageTitle: 'IoT Protocols: Node-Red'
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
    .state('labs.admin-interface', {
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
  .state('labs.security-nuc', {
    url: "/security-nuc",
    templateUrl: "views/labs/security-nuc/index.html",
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
  .state('labs.sensors-c', {
    url: "/sensors-c",
    templateUrl: "views/labs/sensors-c/index.html",
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
  .state('labs.sensors-javascript', {
      url: "/sensors-javascript",
      templateUrl: "views/labs/sensors-javascript/index.html",
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
    })  .state('labs.sensors-java', {
        url: "/sensors-java",
        templateUrl: "views/labs/sensors-java/index.html",
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
      .state('labs.sensors-node-red', {
        url: "/sensors-node-red",
        templateUrl: "views/labs/sensors-node-red/index.html",
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
    .state('labs.dev-hub', {
      url: "/dev-hub",
      templateUrl: "views/labs/dev-hub/index.html",
      data: {
        pageTitle: 'Intel IoT Gateway Developer Hub'
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
    .state('labs.additional-info-mqtt', {
      url: "/additional-info-mqtt",
      templateUrl: "views/labs/additional-info-mqtt/index.html",
      data: {
        pageTitle: 'Additional Information: Debugging MQTT'
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
    .state('labs.additional-info-mongodb', {
      url: "/additional-info-mongodb",
      templateUrl: "views/labs/additional-info-mongodb/index.html",
      data: {
        pageTitle: 'Additional Information: Using MongoDB'
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
    .state('index.faq', {
      url: "/faq",
      templateUrl: "views/faq.html",
      data: {
        pageTitle: 'FAQ'
      }
    });
}
angular
  .module('labs')
  .config(config)
  .run(function($rootScope, $state) {
    $rootScope.$state = $state;
  });
