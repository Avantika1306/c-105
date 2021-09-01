var camera=document.getElementById("camera");
Webcam.set({
    height:300,
    width:350,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';

    })
}
console.log('ml5 version',ml5.version);
var classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eI7O3BwlG/model.json',modelLoaded);
function modelLoaded(){
    console.log('model Loaded');
}
function identify(){
    var img=document.getElementById("selfie_image");
    classifier.classify(img,gotResults);
}
 function gotResults(error,results){
if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);

}
 }