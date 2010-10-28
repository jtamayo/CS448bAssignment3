var year = 2005;
var startYear = 1990;
var endYear = 2007;

function map() {
	var fill = pv.Scale.linear()
	    .domain(0, 100)
	    .range("#91bfdb", "#ffffbf", "#fc8d59");
	
	countries.forEach(function(c) {
		var country = countryCodeMap.twoToThree[c.code];
        var y = forest[country];
        c.color = y ? fill(y[0].value) : "#CCC";
	});
	
	var w = 860,
	    h = 3 / 5 * w,
	    geo = pv.Geo.scale("hammer").range(w, h);
	
	var vis = new pv.Panel()
	    .width(w)
	    .height(h);
	
	/* Countries. */
	vis.add(pv.Panel)
	    .data(countries)
	  .add(pv.Panel)
	    .data(function(c) { return c.borders;})
	  .add(pv.Line)
	    .data(function(b) { return b; })
	    .left(geo.x)
	    .top(geo.y)
	    .title(function(d, b, c) { return c.name;})
	    .fillStyle(function(d, b, c) {return c.color;})
	    .strokeStyle(function() { return this.fillStyle() ? this.fillStyle().darker() : this.fillStyle();})
	    .lineWidth(1)
	    .antialias(false);
	
	/* Latitude ticks. */
	vis.add(pv.Panel)
	    .data(geo.ticks.lat(500))
	  .add(pv.Line)
	    .data(function(b) { return b;})
	    .left(geo.x)
	    .top(geo.y)
	    .strokeStyle("rgba(128,128,128,.3)")
	    .lineWidth(1)
	    .interpolate("cardinal")
	    .antialias(false);
	
	/* Longitude ticks. */
	vis.add(pv.Panel)
	    .data(geo.ticks.lng(500))
	  .add(pv.Line)
	    .data(function(b) { return b;})
	    .left(geo.x)
	    .top(geo.y)
	    .strokeStyle("rgba(128,128,128,.3)")
	    .lineWidth(1)
	    .interpolate("cardinal")
	    .antialias(false);
	
	vis.render();
	
}




