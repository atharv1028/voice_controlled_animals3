var roar = 0;
var meow = 0;
var cluck = 0;
var mooing = 0;
var bark = 0;
backgroundNoise = 0;
var img1 = "";

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true,video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SkI0AGM8j/model.json',{ probabilityThreshold: 0.7 }, modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.log("error")
    }else
    {     
        console.log(results);
        
        document.getElementById("animal_sound").innerHTML = 'Detected voice ' + results[0].label;

        if (results[0].label == "Meow")
        {
            console.log("Cat");
            img1 = "catMeow.jpg";
            meow = meow + 1;
        }else if (results[0].label == "Bark")
        {
            img1 = "dogBark.jpg";
            bark = bark + 1;
        }else if (results[0].label == "Mooing")
        {
            img1 = "cowMooing.png";
            mooing = mooing + 1;
        }else if (results[0].label == "Cluck")
        {
            img1 = "chickenCluck.jpg";
            Cluck = cluck + 1;
        }else if (results[0].label == "Roar")
        {
            img1 = "lionRoar.jpg";
            roar = roar + 1;
        }else if (results[0].label == "Background Noise")
        {
            img1 = "ear.png";
            backgroundNoise = backgroundNoise + 1;
        }

        document.getElementById("animal").src = img1;
    }
}