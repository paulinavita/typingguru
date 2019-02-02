var timestamp = document.querySelector('.timer-box-text');
var button = document.querySelector('button');
var words = document.querySelector(".word-show-text");
var scoreDiv = document.querySelector(".top-score-text");
var timerDiv = document.querySelector('.timer-box-text');

var input = document.getElementById('inputLetter')
var points = 0;
var spans = ''
var typed = ''
var seconds = 61;
var arrayWords = ["ACTUALISM","ADD","AFFLUENT","ALIZARINE","ANOXIC","ANTARTHRITIC","APHAREUS","ARCHIBALD","ART","ASCENDING","ASCITIC",
"ASININITY","BABY","BALL","BALSAMY","BANK","BANNISTER","BAR","BAY","BEE","BEMUSEMENT","BENEMID","BET","BIOSCOPY","BOW","BRAG","BUTYLENE",
"CAJEPUTOLE","CAR","CARE","CARISA","CHAPERONE","CLAY","CLUB","COCAINISED","COLCHESTER","COMITIAL","CORD","COUP","COURTLIER","CROP","CYLINDROMA",
"DEAD","DESPISINGLY","DISTRAINEE","DOME","DOMINIKUS","DOSE","DRAW","EASY","EGO","ENQUIRIES","ERADICATE","EUPHUES","FIND","FINE","FIRM","FIST",
"FISTULOUS","FLAT","FOOL","FORECASTLE","FORM","GAME","GAMEKEEPER","GARNETTER","GEAR","GELLIGAER","GET","GOOD","GROW","GUN","HALL","HEAT","HEIR",
"HELP","HIGH","HILL","HOT","HURT","ICE","ICONOGRAPH","INDICTMENT","INHIBITIVE","INTERVIEW","IRON","KID","KNIT","LAMB","LAMP","LAST","LEWISBURG",
"LICK","LID","LIENABLE","LIKE","LION","LOAD","LOT","MEAT","METHYLBENZENE","MILE","MISAPPLY","MOONRAKER","MOONSCAPE","NAME","NAP","NAUPLIFORM",
"NOMOCANON","NONCONSULAR","NONGASES","ODOROUS","OVERFORCE","PAGE","PARAMENT","PATH","PATRISTIC","PHILOSOPHER","PILE","PIN","POEM","POLL","PONY",
"POSTBUCCAL","POT","PREDISRUPT","PROGLOTID","PROPYLON","PUMP","PUT","PYRRHONIST","RAPE","READ","REAR","RECONTRACTION","REENJOY","RICH","ROLL",
"ROOT","RUSH","SACCHARIC","SENSATION", "SEX","SHED","SHELLBARK","SILK","SIT","SKIP","SLAB","SMATTERER","SNOW","SOAP","SOUL","SOUP","SUBSTRATUM",
"SUM","SYSSARCOSIS","TERM","TEXT","THIN","TRANSLATE","UNANGRILY","UNDESPISED","UNDEVOTED","UNFRICATIVE","UNGRATIFIED","UNIT","UNPRATING",
"UNSHEDDING","VAIN","VANZETTI","VEIN","VULPICIDE","WALL","WARN","WAY","WEIRDNESS","WRAP", "ZWITTERIONIC"]
var imagesLists = ["img/80sbackground.jpg","img/80sbackground_shift.jpg"]
// const isStorage = 'undefined' !== typeof localStorage
var eightiesImages = document.getElementById("eightiesBackground");
var arrayHighLists = [];
var arrayHighListsName =[];


window.onload = init
input.disabled = true


//mengganti background
var k = 0;
  setInterval (function() {
  eightiesImages.style.backgroundImage = "url(" + imagesLists[k] + ")";
  k += 1
    if ( k === imagesLists.length - 1) {
      k = 0
    }
  }, 250); 

//buat pop up name kalau onload or refresh
function init() {
  var popMsg = ''
  var nameText = prompt("Please enter your name:", "");
  if (nameText === null || nameText === "" ) {
    alert("Cannot play without name!")
  } else {
    document.querySelector(".name-box-text").innerHTML = nameText
  }
}

// function untuk men generetae kata random di layar
function randomWords () {
  "words".innerHTML = ''
  "input".innerHTML = ''
  var minIdx = 0
  var maxIdx = arrayWords.length - 1
  var randomIdx =  Math.floor(Math.random() * maxIdx - minIdx + 1) + minIdx
  words.innerHTML =  arrayWords[randomIdx]
}

//panggil function countdown kalau button di klik
button.addEventListener("click", function(){
  decrementTime();
  randomWords();
  button.disabled = true;	
  input.disabled = false;
});

//buat function countdown
function decrementTime() {
  points = 0
  var timer = setInterval(function(){
    button.disabled = true // kalo mulai game tidak bs push soalnya kalo push speednya jadi 2x lipat terus countdownnya
    seconds--;
    timestamp.innerHTML = seconds;
    if (seconds === 0) {
      // if (isStorage && localStorage.getItem(points)) {
      //   var highestScoreSaved = document.querySelector(".highest-score-points")
      //   elements.highestScoreSaved = localStorage.getItem(points)
      // }
      seconds--;
      alert("Thank you for playing! Your points : " + points + 'You can check if you are on the toplist');
      window.location = 'index.html' // 
      clearInterval(timer);
      // scoreDiv.innerHTML = 0
      nameDiv.innerHTML = ""
      button.disabled = false // kalo nol dia bisa jd pencet lagi
      timerDiv.innerHTML = 60 // ubah jadi 10 lagi
      seconds = 60;
      button.disabled = false;	
    }
}, 1000);
// isStorage && localStorage.setItem(points, elements.highestScoreSaved);
}

//kalo di tekan enter
document.addEventListener('keyup', changeWord);
document.addEventListener('keydown', grade);

function changeWord(evt) {
  if (evt.key === 'Enter') {
    if (words.innerHTML=== input.value) {
      randomWords()
    }
  }
}

function grade() {
    if (words.innerHTML=== input.value) {
      input.value = ''
      points += 1
      scoreDiv.innerHTML = points
      randomWords()
    }
    arrayHighLists.push(points) 
    arrayHighListsName.push(document.querySelector(".name-box-text").innerHTML)
}

  

//membuat highscore (still not working)
/* 
push input nama ke array
push points ke array
kalo gak ada di highscore obj, key namaorang, maka buat key tsb
if (!highscoreObj[inputnama]) {
  highscoreObj[inputnama] = {}
  highscoreObj[inputnama].nama = inputnama[i]
  highscoreObj[inputnama].points = points[i]
}

*/




// var highscoreList=[
//   {score:2, name:'John', highscoreLine:[3,1,4,5,4,3,2]},
//   {score:5, name:'John B', highscoreLine:[3,1,4,5,2,3,3]},
//   {score:10, name:'John C', highscoreLine:[3,1,4,5,7,6,8]},
//   {score:4, name:'John', highscoreLine:[3,1,4,5,9,8,7]}
// ];

// highscoreList.sort(function(a,b){return a.score < b.score});
// console.log(highscoreList)















//panggil checker kalau enter di pencet
// function checker (e) {
//   var hitung = 0
//   for (j = 0; i < words.innerHTML.length ;j++) {
//     if (words.innerHTML[j] === input[j].value) {
//       hitung++
//     }
//     if (hitung === words.innerHTML.length) {
//       points += 1
//       scoreDiv.innerHTML = points
//       document.removeEventListener("keydown", checker, false);
//       setTimeout(function(){
//       words.className = "words"; // restart the classes
//       randomWords(); // give another word
//       document.removeEventListener("keydown", checker, false);

//     }, 400);
//   }
// }
// }

// document.addEv