(function () {

    'use strict';

    angular.module('app.template')
        .directive('tmplTemplate', directiveFunction)
        .controller('TemplateController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'E',
            templateUrl: 'components/template/template.html',
            scope: {
            },
            controller: 'TemplateController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['logger'];

    /* @ngInject */
    function ControllerFunction(logger) {

        var vm = this;

        activate();

        function activate() {
            logger.log('Activated Template View');
        }

    }

})();
