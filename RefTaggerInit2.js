	var refTagger = {
		settings: {
			disableInlineCss: true,
			bibleVersion: "NKJV",
			customStyle : {
				heading: {
					backgroundColor : "#000000",
					color : "#000000"
				},
				body   : {
					color : "#000000"
				}
			}
		}
	};
	(function(d, t) {
		var n=d.querySelector("[nonce]");
		refTagger.settings.nonce = n && (n.nonce||n.getAttribute("nonce"));
		var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
		g.src = "https://api.reftagger.com/v2/RefTagger.js";
		g.nonce = refTagger.settings.nonce;
		s.parentNode.insertBefore(g, s);
	}(document, "script"));
