var xi = 0;
var yi = 40;
var y = 0;
var x;
var m;
var g = 10;
var ey = 0.9;
var ex = 0.95;
var t = 0;
var v0 = 50;
var vx;
var vy;
var pi = Math.PI;

function load() {
    console.log("Page load finished");
}


function getAlturaInicial(t) {
    return yi + v0 * Math.sin(42 * pi / 180) * t - g*(Math.pow(t,2)) / 2;
}

function getDistanciaHorizontal(t) {
    return v0 * Math.cos(42 * pi / 180) * t;
}

function getVelocidadY(t) {
    return v0 * Math.sin(42 * pi / 180) - g * t;
}

function getVelocidadX(t) {
    return v0 * Math.cos(42 * pi / 180);
}



function fun1(x) {return Math.sin(x);  }
function fun2(x) {return Math.cos(3*x);}

function draw() {
    console.log("draw");
    var canvas = document.getElementById("canvas1");
    if (null == canvas || !canvas.getContext) return;
    var axes = {}, ctx1 = canvas.getContext("2d");
    axes.x0 = .5 + .07 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
    axes.scale = 40;                 // 40 pixels from x=0 to x=1
    axes.doNegativeX = false;
    showAxes(ctx1, axes);
    funGraph(ctx1, axes, getDistanciaHorizontal,getAlturaInicial, "rgb(11,153,11)", 1);
    var canvas2 = document.getElementById("canvas2");
    if (null == canvas2 || !canvas2.getContext) return;
    var axes = {}, ctx2 = canvas2.getContext("2d");
    axes.x0 = .5 + .07 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
    axes.scale = 40;                 // 40 pixels from x=0 to x=1
    axes.doNegativeX = false;
    showAxes(ctx2, axes);
    funGraph(ctx2, axes, getDistanciaHorizontal,getAlturaInicial, "rgb(11,153,11)", 1);
}

function showAxes(ctx, axes) {
    var x0 = axes.x0, w = ctx.canvas.width;
    var y0 = axes.y0, h = ctx.canvas.height;
    var xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(xmin, y0); ctx.lineTo(w, y0);  // X axis
    ctx.moveTo(x0, 0); ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}


function funGraph(ctx, axes, funcX,funcY, color, thick) {
    var xx, yy, dx = 4, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;
    var iMax = 20;
    var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;

    for (var i = 0; i <= iMax; i= i + 0.1) {
        xx = 0.5 * funcX(i/0.5); 
        yy = 0.5 *  funcY(i/0.5);
        if (yy <= 0){
            break;
        }
        if (i == iMin) ctx.moveTo(x0 + xx, y0 - yy);
        else ctx.lineTo(x0 + xx, y0 - yy);
    }
    
    ctx.stroke();
}





