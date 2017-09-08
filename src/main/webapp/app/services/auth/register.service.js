(function () {
    'use strict';

    angular
        .module('accountPeculiumApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
