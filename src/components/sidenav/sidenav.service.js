(function () {
    'use strict';

    angular
        .module('app.sidenav')
        .service('SidenavService', SidenavService);

        SidenavService.$inject = ['$mdSidenav'];

            function SidenavService($mdSidenav) {

                function buildToggler(componentId) {
                    return function() {
                        console.log('asd')
                        $mdSidenav(componentId).toggle();
                    };
                }

            return {
                buildToggler: buildToggler
            };
        }
})();
