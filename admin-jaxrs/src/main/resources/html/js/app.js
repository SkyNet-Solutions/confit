/*jslint browser: true*/
/*global $, jQuery*/

var ConfigAdmin = angular.module( "ConfigAdmin",
    [
        'ui',
        'confit-module',
        'confit-property-module',
        'paginate-module',
        'ngResource'
    ]);

ConfigAdmin.config(
    function( $routeProvider ){
        $routeProvider
            .when(
            "/",
            {
                action: "bean.default"
            })
            .when(
            "/bean-create/:schemaName",
            {
                action: "bean.bean-create"

            })
            .when(
            "/bean-detail/:schemaName/:id",
            {
                action: "bean.bean-detail"

            })
            .when(
            "/bean-list/:schemaName",
            {
                action: "bean.bean-list"
            })
            .when(
            "/bean-scroll/:schemaName",
            {
                action: "bean.bean-list-scroll"
            }
        )
    }
);
