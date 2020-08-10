const brain = require('brain.js');
const network  = new brain.NeuralNetwork();
window.onload = function(){
    console.log('onload');
     training();
}
function update(){
    console.log('update');
    let body = document.getElementsByTagName("body")[0];
    let r = document.getElementById("r").value;
    let g = document.getElementById("g").value;
    let b = document.getElementById("b").value;
    let input = [];
    input.push(parseInt(r));
    input.push(parseInt(g));
    input.push(parseInt(b));
    console.log('rgb(' + r + ',' + g + ',' + b +')');
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b +')';
    var guess  = brain.likely(input, network);
    console.log(guess);
    let result  = document.getElementById("guess");
    result.innerHTML = "Guess:" + guess;
   

    


    
}

function training(){
    network.trainAsync([
        {input: [0,0,0] , output: {"black": 1}},
        {input: [255,255,255] , output: {"white": 1}},
        {input: [255,0,0] , output: {"red": 1}},
        {input: [0,255,0] , output: {"green": 1}},
        {input: [0,0,255] , output: {"blue": 1}},
        {input: [255,255,0] , output: {"yellow": 1}},
        {input: [128,128,128] , output: {"yellow": 1}},
    ]).then(res=>{
        console.log("Finished traning");
        trained  = true;
    });
}

