(function( $ ) {
	var MetaQ = window.MetaQ = function( options ) {
		this.init( options );
	};

	MetaQ.prototype = {
		init: function( options ) {
			this.options = options;

			this.getMatches();
		},

		start: function( fetchInterval ) {
			this.options.fetchInterval = fetchInterval || 3000;

			this.getMatches();
		},

		stop: function() {
			this.options.fetchInterval = null;
		},

		setDuration: function( duration ) {
			this.options.duration = duration;
		},

		setFetchInterval: function( fetchInterval ) {
			this.options.fetchInterval = fetchInterval;
		},

		getMatches: function() {
			if ( $ ) {
				this.getMatchesjQuery();
			}
			else {
				this.getMatchesNative();
			}
		},

		getMatchesNative: function() {
			var req = new XMLHttpRequest(),
				self = this;

			req.onload = function() {
				self.processMatches();

				if ( self.options.fetchInterval ) {
					setTimeout(function() {
						self.getMatchesNative();
					}, self.options.fetchInterval );
				}
			};

			req.open(
					"get",
					"//livefeed.api.tv/hack2013/v1/getlivefeeditems/args/livefeed/" +
					this.options.feedID.toString() +"/starttime/live/duration/" +this.options.duration.toString() +
					"/stream/Office/showMatches/true/type/metaq/format.json",
					true
			);
			req.send();
		},

		getMatchesjQuery: function() {
			var self = this;

			$.ajax({
				url:
					"//livefeed.api.tv/hack2013/v1/getlivefeeditems/args/livefeed/" +
					this.options.feedID +"/starttime/live/duration/" +this.options.duration +
					"/stream/Office/showMatches/true/type/metaq/format.json"
			}).done(function( data ) {
				self.processMatches( data );

				if ( self.options.fetchInterval ) {
					setTimeout(function() {
						self.getMatchesjQuery();
					}, self.options.fetchInterval );
				}
			});
		},

		processMatches: function( data ) {
			this.options.handler( data );
		}
	};
})( window.jQuery );