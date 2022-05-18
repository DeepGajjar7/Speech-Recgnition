x =0;
y =0;
drawcircle="";
drawrectangle="";

function setup(){
    createCanvas(900,600)
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition =new SpeechRecognition()

function start(){
    document.getElementById("status").innerHTML="System is listening.Please speak";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content =event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as "+content;

    if (content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing a circle";
        drawcircle="set";
    }
    if (content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing a rectangle";
        drawrectangle="set";
    }
    
}

function draw (){
    if (drawcircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle Is Drawn"
        drawcircle=""
    }
    if (drawrectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="Rectangle Is Drawn"
        drawrectangle=""
    }
}