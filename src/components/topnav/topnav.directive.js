(function () {
    'use strict';

    angular
        .module('app.topnav')
        .directive('tmplTopnav', directiveFunction)
        .controller('TopnavController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/topnav/topnav.html',
            scope: {
            },
            controller: 'TopnavController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$mdSidenav'];

    /* @ngInject */
    function ControllerFunction($mdSidenav) {
        var vm = this;

        vm.toggleLeft = buildToggler('left');

        vm.isOpen = function(){
          return $mdSidenav('left').isOpen();
        };
    
        function buildToggler(componentId) {  
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }


        
        
    }

})();
