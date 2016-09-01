/* I fucking hate javascript :) */
$(document).ready(function(){
    var cells = new Set();
    var X;
    var Y;
    var WRAP = false;
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    /*-----DRAWING FUNCTIONS-----*/
    draw = function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = "#3d3d29";
	ctx.fillStyle = "#f5f5f0";
	for(i = 0; i < X; i++){
	    for(j = 0; j < Y; j++){
		ctx.rect(i*10, j*10, 10, 10);
		ctx.fillRect(i*10+1, j*10+1, 8, 8);
	    };
	};
	ctx.fillStyle = "#33ccff";
	cells.forEach(function(cell){
	    ctx.fillRect(cell[0]*10+1, cell[1]*10+1, 8, 8);
	});
	ctx.stroke();
	
    };
    
    /*-----CLICK FUNTIONALITY-----*/
    $("#xybutton").on("click", function(){
	X = $("#X").val();
	Y = $("#Y").val();
	WRAP = document.getElementById("wrapbox").checked
	ctx.canvas.width = X * 10;
	ctx.canvas.height = Y * 10;
	draw();
    });
    
    canvas.addEventListener("click", function(event){
	var x = event.pageX - canvas.offsetLeft,
	    y = event.pageY - canvas.offsetTop;
	var c = null;
	cells.forEach(function(cell){
	    if(cell.toString()==[Math.floor(x/10),Math.floor(y/10)].toString())
	       c = cell;
	});
	if(c == null){
	    cells.add([Math.floor(x/10), Math.floor(y/10) ]);
	} else {
	    cells.delete(c);
	};
	draw();
    });


    /*-----  ~LIFE~  -----*/
    life = function(cells) {
	var next = new Set()
	var tocheck = new Set()
	cells.forEach(function(cell){
	    var nbrs = 0;
	    /*
	    for(i=0;i<8;i++){
		var n = [[-1, -1],[-1, 0],[-1, 1],
			 [0, -1],         [0, 1],
			 [1, -1], [1, 0], [1, -1]][i]
	    */
	    };
	});
	
    };

});
