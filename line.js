function line() {
//	var data = pv.range(1990, 2010, .1).map(function(x) {
//    return {x: x, y: Math.sin(x) + Math.random() * .5 + 2};
//  });
  
	var w = 860,
    h = 180,
    x = pv.Scale.linear(startYear, endYear).range(0, w),
    y = pv.Scale.linear(0, 100).range(0, h);

/* The root panel. */
var vis = new pv.Panel()
    .width(w)
    .height(h)
    .bottom(20)
    .left(20)
    .right(10)
    .top(5);

inputCountries = new Array("AFG", "ARM", "ABW", "BRA", "BLZ");
//get countries from map selection or search bar

var countryIndex
var maxValue = 0
var maxValueArray = []
var dummy = []
var index

for (countryIndex in inputCountries) {
	country = inputCountries[countryIndex]
	countryArray = forest[country]
	for (index in countryArray)
		if (maxValue < countryArray[index].value)
			maxValue = countryArray[index].value
	console.log(maxValue)
	maxValueArray.push(maxValue)
	console.log(maxValueArray)
	dummy.push(forest[country])
}

var maximumYvalue = Math.max.apply(null,maxValueArray) + 10
console.log(maximumYvalue)
//todo: we can't just add 10

  y = pv.Scale.linear(0, maximumYvalue).range(0, h);


vis.add(pv.Panel)
	.data(function(){
		return dummy;
	})
  .add(pv.Line)
	.data(function(d) {
		return d;
		})
		.left(function(d) {
		return x(d.year);
		})
	.bottom(function(d) {
		return y(d.value);
		})
    .lineWidth(2);
		
//  .add(pv.Label)
//    .visible(function() this.index == S-1)
//    .textBaseline("middle")
//    .textMargin(6)
//    .text(ft);
	
/* Y-axis and ticks. */
vis.add(pv.Rule)
    .data(y.ticks(5))
    .bottom(y)
    .strokeStyle(function(d) { return d ? "#eee" : "#000";})
  .anchor("left").add(pv.Label)
    .text(y.tickFormat);

///* X-axis and ticks. */
vis.add(pv.Rule)
    .data(x.ticks())
    .visible(function(d) { return d;})
    .left(x)
    .bottom(-5)
    .height(5)
  .anchor("bottom").add(pv.Label)
    .text(x.tickFormat);

//vis.add(pv.Line)
//    .data(data)
//    .left(function(d) { return x(d.year); 
//	})
//    .bottom(function(d) { return y(d.value);
//	})
//    .lineWidth(3);

vis.render();
}
