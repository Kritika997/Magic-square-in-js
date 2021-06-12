const magic_square = [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2]
];
var raw1 = 0;
var raw2 = 0;
var raw3 = 0;
var colum1 = 0;
var colum2 = 0;
var colum3 = 0;
var dign = 0;
var dign2 =0;
for(let i=0; i<magic_square.length; i++){
    for(let j = 0; j<magic_square[i].length; j++){
        if (raw1!==15){
            raw1+=magic_square[i][j];
        } else if (raw2!==15){
            raw2+=magic_square[i][j];
        } else {
            raw3+=magic_square[i][j];
        };
    };
};
console.log(raw1,raw2,raw3)
for(let i=0; i<magic_square.length; i++){
    for(let j=0; j<magic_square[i].length; j++){
        if (colum1!==15){
            colum1+=magic_square[j][i];
        }else if (colum2!==15){
            colum2+=magic_square[j][i];
        }else{
            colum3+=magic_square[j][i];
        };
    };
};
console.log(colum1,colum2,colum3)
for (let i = 0; i<magic_square.length; i++){
    for (let j = i; j<magic_square[i].length; j+=3){
        dign+=magic_square[i][j];
    };
};
console.log(dign)
var len = magic_square.length;
for (let i = 0; i<magic_square.length; i++){
    for (let j = len-1; j>0; j-=2){
        dign2+=magic_square[i][j];
    };
    len-=1;
};
dign2+=magic_square[2][0];
console.log(dign2)

if (raw1==raw2 && raw3==colum1 && colum2==colum3 && dign==dign2){
    console.log("it is magic square:👍 ");
}else{
    console.log("no it is not:👎 ");
};



