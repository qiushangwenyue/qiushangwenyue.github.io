'use strict'
//config ,程序没有运行前的配置
//对于动态加载下来的 Controller,filter等 需要手工注册， 这就需要调用  register 方法， 为了方便使用， 可以定义一个全局的 app 对象，
// 将 AngularJS 的注册 controller 、 directive 、 filter 、 factory 、 service 方法都暴露出来，

var blog=angular.module('blog')
    .config(['$controllerProvider','$compileProvider','$filterProvider','$provide',
    function ($controllerProvider, $compileProvider,$filterProvider,$provide) {
            blog.controller = $controllerProvider.register;
            blog.directive  = $compileProvider.directive;
            blog.filter     = $filterProvider.register;
            blog.factory    = $provide.factory;
            blog.service    = $provide.service;
            blog.constant   = $provide.constant;
            blog.value      = $provide.value;
          }
    ]).config(['$translateProvider', function ($translateProvider) {
        // Register a loader for the static files
        // So, the module will search missing translation tables under the specified urls.
        // Those urls are [prefix][langKey][suffix].
        // $translateProvider.useStaticFilesLoader({
        //     prefix:'l10n/',
        //     suffix: '.js'
        // });
        // Tell the module what language to use by default
        // $translateProvider.preferredLanguage('en');
        // Tell the module to store the language in the local storage
        // $translateProvider.useLocalStorage();
    }]);
