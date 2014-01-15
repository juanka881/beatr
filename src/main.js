require.config({
	paths: {
		'react': '../bower_components/react/react',		
		'sugar': '../bower_components/sugar/release/sugar-full.development'
	}
});

require(['app', 'sugar'], function(App, sugar) {
	var app = new App();
	app.run();
});


