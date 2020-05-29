function smart_vacuum(){
    
    // takes input from browser
    var dimensions = document.getElementById("dimensions").value.split(" ");
    var position = document.getElementById("start").value.split(" ");
    var dirty_squares = document.getElementById("dirty_squares").value.split(",");
    var directions = document.getElementById("directions").value.split("");
    
    // function to create the "room", represented by a coordinate grid
    function create_grid(dim, dirt){
        var grid = [];
        var x,y;
        for (x = 0; x < dim[0]; x++){
            var row = []
            
            for (y = 0; y<dim[1]; y++){
                var d;
                var square_states = 0;                  // clean squares marked 0, dirty squares marked 1
                for (d = 0; d < dirt.length; d++){      
                    var dirty = dirt[d].split(" ");
                    var d_x = parseInt(dirty[0]);
                    var d_y = parseInt(dirty[1]); 
                    if (d_x == x && d_y == y){
                        square_states = 1;
                    }
                    
                }

            row.push(square_states); 
            }
            
        grid.push(row);
        }
        
        return grid;    
    }
    
    // function to move robot around the room
    // takes cardinal direction: with N and S as the y-axis, E and W as the x-axis
    function movement(dim, dirt, way,start){
        var grid = create_grid(dim,dirt);
        var pos_x = parseInt(start[0]);
        var pos_y = parseInt(start[1]);
        var i;
        var move = [];
        var start_string = "<br><br> _____MOVEMENT________ <br> Start: "+ pos_x+", " + pos_y+"<br>";
        move.push(start_string);
        var cleanup = 0;
        for (i = 0; i < way.length; i++){                       
            if (way[i] == "N" && pos_y < dim[1] - 1){           // up -> N = y + 1
                pos_y += 1;
            }
            else if (way[i] == "S" && pos_y > 0){               // down -> S = y - 1
                pos_y -= 1;
            }
            else if (way[i] == "E" && pos_x < dim[0] - 1){      // left -> E = x + 1
               pos_x += 1;
            }
            else if (way[i] == "W" && pos_x > 0){               // right -> W = x - 1
                pos_x -= 1;
            }
            
            if (grid[pos_x][pos_y] == 1){       // if the current square is dirty, clean it and set it back to 0
                cleanup += 1;                   // adds to total number of dirty spots cleaned
                grid[pos_x][pos_y] = 0;
            }

            // outputs the result of each step into web page
            var movement_string = "Moved " + way[i]+ " changing position to "+pos_x+", "+ pos_y +"<br>";
            move.push(movement_string);
            
        }
       
        var pretty_output = "";
        var a, b;
        for (a = grid[0].length-1; a >=0; a--){
            pretty_output  += "<br>";
            for (b = 0; b < grid[1].length; b++){
                pretty_output += " "+ grid[b][a] + " ";
            }
        }
        
        var output = pretty_output + move + "<br> Final position:" + [pos_x,pos_y] + "<br> Dirty spots cleaned: "+cleanup;
        return output
    }

    document.getElementById("grid").innerHTML = movement(dimensions,dirty_squares, directions, position);
   
}
        
        




