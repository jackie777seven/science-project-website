var canvas = document.getElementById("PlantGrowthGraph");
var ctx = canvas.getContext("2d");
var xGrid=10;
var yGrid=10;

function drawGRids()
{
    ctx.beginPath();
    
    while(xGrid<canvas.height)
    {
        ctx.moveTo(0,xGrid);
        ctx.lineTo(canvas.width,xGrid);
        xGrid+=10;
    }
    
    ctx.stroke()
    
}

drawGrids();