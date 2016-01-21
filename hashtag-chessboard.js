// Your code here for the chessboard exercise
var chessboard = "";
var chesspiece = "";
var newline = "\n";
var rownum = 1;
var rowswitch = 0;
var size = 10;

for(var i = 1 ; i <= size*size ; i++){
  	chesspiece = i % 2 === rowswitch ? "#" : " ";
  	chessboard += chesspiece;
  	if(i % size === 0){
  		chessboard += newline;
      	rowswitch = rownum % 2 === 0 ? 0 : 1;
      	rownum++;
    }
}
console.log(chessboard);