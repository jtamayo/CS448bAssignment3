function line() {
//	var data = pv.range(1990, 2010, .1).map(function(x) {
//    return {x: x, y: Math.sin(x) + Math.random() * .5 + 2};
//  });
  var data = forest['AFG'];
		
	var w = 860,
    h = 180,
    x = pv.Scale.linear(startYear, endYear).range(0, w),
    y = pv.Scale.linear(0, 4).range(0, h);

/* The root panel. */
var vis = new pv.Panel()
    .width(w)
    .height(h)
    .bottom(20)
    .left(20)
    .right(10)
    .top(5);

/* Y-axis and ticks. */
vis.add(pv.Rule)
    .data(y.ticks(5))
    .bottom(y)
    .strokeStyle(function(d) { return d ? "#eee" : "#000";})
  .anchor("left").add(pv.Label)
    .text(y.tickFormat);

/* X-axis and ticks. */
vis.add(pv.Rule)
    .data(x.ticks())
    .visible(function(d) { return d;})
    .left(x)
    .bottom(-5)
    .height(5)
  .anchor("bottom").add(pv.Label)
    .text(x.tickFormat);

vis.add(pv.Line)
    .data(data)
    .left(function(d) { return x(d.year); 
	})
    .bottom(function(d) { return y(d.value);
	})
    .lineWidth(3);

vis.render();
}