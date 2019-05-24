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
        .state('opportunities', {
            url : '/opportunities',
            templateUrl : 'js/opportunities.html'
        })
        .state('blog', {
            url : '/blog',
            templateUrl : 'js/blog.html'
        })
        .state('contact', {
            url : '/contact',
            templateUrl : 'js/contact/contact.html'
        })
        ;
}

yapsApp.config(YapsConfig);

window.addEventListener("scroll", function() {
    var { scrollY } = window
    if(scrollY > 140) {
        document.getElementById("right-banner").style.top = "20px";
    } else {
        document.getElementById("right-banner").style.top = "160px";

    }
})
