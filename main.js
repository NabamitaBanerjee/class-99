var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds!";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);

    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});