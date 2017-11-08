(function () {
    'use strict';

    angular
        .module('app.sidenav')
        .directive('tmplSidenav', directiveFunction)
        .controller('SidenavController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = []; 

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/sidenav/sidenav.html',
            scope: {
            },
            controller: 'SidenavController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$mdSidenav', 'SidenavService', '$mdThemingProvider'];

    /* @ngInject */
    function ControllerFunction($mdSidenav, SidenavService, $mdThemingProvider) {
        var vm = this;

        vm.toggleRight = SidenavService.buildToggler('right');

        function activate() {
            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('orange');
        }

        activate();
    }

})();
