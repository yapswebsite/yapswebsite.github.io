var yapsApp = angular.module('yapsApp', ['ui.router']);

YapsConfig.$inject = ['$stateProvider', '$urlRouterProvider']
function YapsConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url : '/home',
            templateUrl : 'js/home/home.html'
        })
        .state('student', {
            url : '/student',
            templateUrl : 'js/home/forStudent.html'
        })
        .state('socialEnterprises', {
            url : '/socialEnterprises',
            templateUrl : 'js/home/forSocialEnterprises.html'
        })
        .state('about', {
            url : '/about',
            templateUrl : 'js/about/about.html'
        })
        .state('services', {
            url : '/services',
            templateUrl : 'js/services/services.html'
        })
        .state('Opportunities', {
            url : '/Opportunities',
            templateUrl : 'js/opportunities.html'
        })
        .state('contact', {
            url : '/contact',
            templateUrl : 'js/contact/contact.html'
        })
        ;
}

yapsApp.config(YapsConfig);
