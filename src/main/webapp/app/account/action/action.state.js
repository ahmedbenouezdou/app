(function() {
    'use strict';

    angular
        .module('appApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('action', {
            parent: 'account',
            url: '/action',
            data: {
                authorities: ['ROLE_USER'],
                pageTitle: 'global.menu.account.settings'
            },
            views: {
                'content@': {
                    templateUrl: 'app/account/action/action.html',
                    controller: 'ActionController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('settings');
                    return $translate.refresh();
                }]
            }
        }).state('bye', {
            parent: 'action',
            url: '/bye',
            data: {
                authorities: ['ROLE_USER']
            },
            views: {
                'detail': {
                    templateUrl: 'app/account/action/byeToken/byeToken.html'

                                  }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('settings');
                    return $translate.refresh();
                }]
            }
        }).state('invest', {
            parent: 'action',
            url: '/invest',
            data: {
                authorities: ['ROLE_USER']
            },
            views: {

                'detail': {
                    templateUrl: 'app/account/action/howInvest/howInvest.html'

                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                    $translatePartialLoader.addPart('settings');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
