autowatch = 1;

/*

2d vector control

mod to work with binhead...

sbl 2008

arguments: fgred fggreen fgblue bgred bggreen bbgblue radius

*/

inlets = 2;
outlets = 2;
sketch.ortho3d(); //like default3d but uses orthographic projection
var vbrgb = [0.3,0.3,0.6];
var vfrgb = [0.8,0.8,0.3];
var w = [0,0,0]; // koordinaten für den punkt
var vx = 0;
var vy = 0;
var vradius = 0.02;


var img = new Image("head.jpg");
var distance = 0;
var posToHead = 0;

// process arguments
if (jsarguments.length>1)
	vfrgb[0] = jsarguments[1]/255.;
if (jsarguments.length>2)
	vfrgb[1] = jsarguments[2]/255.;
if (jsarguments.length>3)
	vfrgb[2] = jsarguments[3]/255.;
if (jsarguments.length>4)
	vbrgb[0] = jsarguments[4]/255.;
if (jsarguments.length>5)
	vbrgb[1] = jsarguments[5]/255.;
if (jsarguments.length>6)
	vbrgb[2] = jsarguments[6]/255.;
if (jsarguments.length>7)
    	vradius = jsarguments[7];


draw();

function draw(){
	var str;
	
	with (sketch) {
		glclearcolor(vbrgb);			
		glclear();			
		glcolor(vfrgb);
		moveto(0,0,0);
        copypixels(img,130,120,0,0,50,50);
		moveto(w);
		sphere(0.03);
	}
}



// hier wird der input prozessiert

function msg_float(v)
{
	var i = inlet;
	
	if (i==0)
		list(v,vy);
	else
		list(vx,v);	
}

function list(){
	var width = box.rect[2] - box.rect[0];
	var height = box.rect[3] - box.rect[1];

	if (arguments.length>0)
		vx = arguments[0];
	if (arguments.length>1)
		vy = arguments[1];
		
	if (vx<0) vx = 0;
	else if (vx>1) vx = 1;
	if (vy<0) vy = 0;
	else if (vy>1) vy = 1;
	
	w = sketch.screentoworld(vx*width,(1.-vy)*height);
	notifyclients();
	bang();
}

// refresh & recall

function bang(){
	draw();
	refresh();
	outlet(1,distance);
	outlet(0,w[0], w[1]);
}

// aliasing
function fsaa(v){
	sketch.fsaa = v;
	bang();
}
function frgb(r,g,b){
	vfrgb[0] = r/255.;
	vfrgb[1] = g/255.;
	vfrgb[2] = b/255.;
	draw();
	refresh();
}

function brgb(r,g,b){
	vbrgb[0] = r/255.;
	vbrgb[1] = g/255.;
	vbrgb[2] = b/255.;
	draw();
	refresh();
}


function setvalueof(x,y){
	list(x,y);
}

function getvalueof(){
	var a = new Array(vx,vy);
	
	return a;
}

function onresize(w,h){
	draw();
	refresh();
}
onresize.local = 1; //private

function onclick(x,y){
	ondrag(x,y);
}
onclick.local = 1; //private

function ondrag(x,y){
	var width = box.rect[2] - box.rect[0];
	var height = box.rect[3] - box.rect[1];
	var hypo;	
	
		
	if (x<0) x = 0;
	else if (x>width) x = width;
	if (y<0) y = 0;
	else if (y>height) y = height;
	
	w = sketch.screentoworld(x,y);
	
	
	// debugger..
    // post("x: "+w[0] +" // y: "+w[1]);
    // post();
	
    hypo = Math.sqrt(Math.pow(w[0], 2) + Math.pow(w[1], 2));
    
    // umrechnen für distanz
    distance = (1 - hypo);

	
	vx = x/width;
	vy = 1- y/height;
	
	notifyclients();
	bang();
}
ondrag.local = 1; //private 