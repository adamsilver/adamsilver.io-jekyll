module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			css: [
				'_site/assets/css/*.css'
			]
		},
		cssmin: {
			options: {
				report: 'gzip'
			}
		},
		filerev: {
			dist: {
                src: [
                    '_site/assets/css/*.css'
                ]
            }
		},
		useminPrepare: {
			html: '_site/signup/index.html',
			options: {
				dest: '_site/',
				root: '_site/'
			}
		},
		usemin: {
			html: '_site/**/*.html',
			options: {
				assetsDirs: ['_site', '_site/css']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-filerev');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('log', function() {
		console.log(grunt.filerev.summary);
	});

	grunt.registerTask('default', [
		'useminPrepare',
		'concat:generated',
		'concat:generated',
		'cssmin:generated',
		'filerev:dist',
		'usemin'
	]);

};