
var startX = 85;
var startY = 165;

var paths = [
	{
		x: 85,
		y: 165
	},
	{
		x: 80,
		y: 140
	},

	{
		x: 90,
		y: 20
	},
	{
		x: 100,
		y: 20
	},
	{
		x: 110,
		y: 80
	},
	{
		x: 100,
		y: 100
	},
	{
		x: 110,
		y: 215
	},
	{
		x: 115,
		y: 250
	},
	{
		x: 120,
		y: 260
	},
	{
		x: 120,
		y: 330
	},
	{
		x: 20,
		y: 330
	}

];

// Create a Paper.js Path to draw a line into it:
var path = new Path();
// Give the stroke a color
path.strokeColor = '#D3D3D3';
path.strokeWidth = 0.5;


var start = new Point(startX, startY);
// Move to start and draw a line from there
path.moveTo(start);
// Note the plus operator on Point objects.
// PaperScript does that for us, and much more!
// path.lineTo(start + [ 50, -140 ]);

// var x = startX;
// var y = startY;


var i = 0; // current path
var j, pt0, pt1, dx, dy;

function setPath() {
	j = 0; // point out of 100%
	i = i + 1; // set the current path
	pt0 = paths[i - 1];
	pt1 = paths[i];
	dx = pt1.x - pt0.x;
	dy = pt1.y - pt0.y;
}

setPath();

function onFrame(event) {
	
	// x += (x < paths[0].x ? 1 : 0);
	// y -= (y > paths[0].y ? 1 : 0);

	// path.lineTo([x, y]);

	if (j < 100) {
        var x = pt0.x + dx * j / 100;
        var y = pt0.y + dy * j / 100;
        // waypoints.push({
        //     x: x,
        //     y: y
        // });
        path.lineTo([x, y]);

	    j++;
	} else {
		setPath();
	}


    // Each frame, rotate the path by 3 degrees:
    // path.lineTo(start + [ x, y ]);

    // x += 1;
    // y += 2;
}



// var myPoint = new Point();
// console.log(myPoint); // { x: 0, y: 0 }

// // Now let's change the x coordinate to 10...
// myPoint.x = 10;

// // ...and the y coordinate to x + 10
// myPoint.y = myPoint.x + 10;
// console.log(myPoint);


// var raster = new Raster({
//     crossOrigin: 'anonymous',
//     source: 'http://assets.paperjs.org/images/marilyn.jpg',
//     position: view.center
// });

// console.log(view.element.toDataURL('image/png').substring(0, 32));