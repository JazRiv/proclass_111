var modelo = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KaTencVf0/model.json", modelolisto);

WebKitCSSMatrix.set({
    with:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camara");

function take(){
    Webcam.snap(function(datauri){
        document.getElementById("resultado").innerHTML ='<img id="foto" src=" ' + datauri + '">';
    });
}

function modelolisto(){
    console.log("Ya quede");
}
