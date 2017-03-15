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
      templateUrl: "views/labs/introduction/index.html",
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
    .state('labs.protocols-javascript-http', {
      url: "/protocols-javascript-http",
      templateUrl: "views/labs/protocols-javascript-http/index.html",
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
    .state('labs.protocols-javascript-mqtt', {
      url: "/protocols-javascript-mqtt",
      templateUrl: "views/labs/protocols-javascript-mqtt/index.html",
      data: {
        pageTitle: ''
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

  .state('labs.security-tls', {
    url: "/security-tls",
    templateUrl: "views/labs/security-tls/index.html",
    data: {
      pageTitle: 'Setup TLS'
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
.state('labs.security-mcafee', {
  url: "/security-mcafee",
  templateUrl: "views/labs/security-mcafee/index.html",
  data: {
    pageTitle: 'McAfee'
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

.state('labs.security-systemd', {
  url: "/security-systemd",
  templateUrl: "views/labs/security-systemd/index.html",
  data: {
    pageTitle: 'Systemd'
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
    .state('labs.additional-info-virtual-sensor', {
      url: "/additional-info-virtual-sensor",
      templateUrl: "views/labs/additional-info-virtual-sensor/index.html",
      data: {
        pageTitle: 'Additional Information: Virtual Sensor'
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
    .state('labs.additional-info-mongodb-schemas', {
      url: "/additional-info-mongodb-schemas",
      templateUrl: "views/labs/additional-info-mongodb-schemas/index.html",
      data: {
        pageTitle: 'Additional Information: Mongoose Schemas'
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
    .state('labs.additional-info-hdc', {
      url: "/additional-info-hdc",
      templateUrl: "views/labs/additional-info-hdc/index.html",
      data: {
        pageTitle: 'Additional Information: Installing HDC'
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
    .state('labs.additional-info-xdk', {
      url: "/additional-info-xdk",
      templateUrl: "views/labs/additional-info-xdk/index.html",
      data: {
        pageTitle: 'Additional Information: Debugging Intel XDK'
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
