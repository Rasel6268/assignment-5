const colorContainer = ['#FFBF00','#CCCCFF','#40E0D0','#FF00FF','#9FE2BF','#FFFFFF']


let indexOfColor = 0;
document.getElementById('bgChange').addEventListener('click',function(){
    document.body.style.backgroundColor = colorContainer[indexOfColor]
    indexOfColor++
    if(indexOfColor >= colorContainer.length){
        indexOfColor = 0;
    }
})