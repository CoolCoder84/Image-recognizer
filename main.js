Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="image_captured" src="'+data_uri+'">';
    });
}
console.log("ml5 version: ",ml5.version);
clasifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I3E3w7OyL/model.json',model_loaded);

function model_loaded(){
    console.log("model is loaded");
}
function check(){
    img=document.getElementById("image_captured");
    clasifier.classify(img, gotResult);
}
function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}