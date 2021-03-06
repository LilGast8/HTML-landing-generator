

HLG.Path = ( function( window ) {
	'use strict';
	
	
	function Path() {
		this.URL = null;
	}
	
	
	Path.prototype.init = function() {
		_setPaths.call( this );
	};
	
	
	var _setPaths = function() {
		// var baseUrl = HLG.Config.ENVS.base_url;
		// var baseUrl = BASE_URL;
		
		// url paths
		this.URL = {
			// base:		baseUrl,
			assets:		/*baseUrl + */'assets/',
			css:		/*baseUrl + */'assets/css/',
			favicons:	/*baseUrl + */'assets/favicons/',
			files:		/*baseUrl + */'assets/files/',
			img:		/*baseUrl + */'assets/img/',
			js:			/*baseUrl + */'assets/js/',
			json:		/*baseUrl + */'assets/json/',
			sounds:		/*baseUrl + */'assets/sounds/',
			svg:		/*baseUrl + */'assets/svg/',
			videos:		/*baseUrl + */'assets/videos/',
			routes:		/*baseUrl + */'configs/routes/',
			server:		/*baseUrl + */'server/',
		};
	};
	
	
	Path.prototype.overwriteSpecialPaths = function() {
		this.URL.assets = HLG.MainView.$mainCont[0].getAttribute( 'data-assets-base-url' );
	};
	
	
	return new Path();
	
	
} ) (window);

