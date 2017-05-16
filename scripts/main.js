requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        jquery_ui: '../bower_components/jquery-ui/jquery-ui.min',
        application: 'application'
    }
});
requirejs(['application'])
