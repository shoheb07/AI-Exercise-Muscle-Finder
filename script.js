const exercises = {

"dumbbell press":{
muscle:"Chest",
part:"chest",
gif:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Bench-Press.gif"
},

"bicep curl":{
muscle:"Biceps",
part:"biceps",
gif:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Curl.gif"
},

"squat":{
muscle:"Legs",
part:"legs",
gif:"https://fitnessprogramer.com/wp-content/uploads/2021/04/Barbell-Squat.gif"
},

"plank":{
muscle:"Abs",
part:"abs",
gif:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif"
}

};

function resetBody(){
document.querySelectorAll("svg rect").forEach(el=>{
el.style.fill="#ccc";
});
}

function searchExercise(){

let input=document.getElementById("exerciseInput").value.toLowerCase();

if(exercises[input]){

resetBody();

let data=exercises[input];

document.getElementById(data.part).style.fill="red";

document.getElementById("exerciseGif").src=data.gif;

document.getElementById("exerciseTitle").innerText=input.toUpperCase();

document.getElementById("muscleName").innerText="Primary Muscle: "+data.muscle;

}
else{

document.getElementById("exerciseTitle").innerText="Exercise Not Found";

}

}

function startVoice(){

const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();

recognition.lang="en-US";

recognition.start();

recognition.onresult=function(event){

let voiceText=event.results[0][0].transcript;

document.getElementById("exerciseInput").value=voiceText;

searchExercise();

}

}
