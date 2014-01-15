module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-devserver");

	grunt.initConfig({
		devserver: {
			dev: {
				options: {
					port: 8888,
					base: "./"
				}				
			}			
		},
	});

	grunt.registerTask("web", ["devserver:dev"]);
		
};