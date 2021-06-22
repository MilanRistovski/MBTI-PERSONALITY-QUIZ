let button = document.getElementById('submit-btn');
let questions = document.getElementById('questionshere');
let infobox = document.getElementById('infobox');
let startbutton = document.getElementById('start-btn');
let footer = document.getElementById('quizFooter');
let showFirstLetter = document.getElementById('showFirst');
let showSecondLetter = document.getElementById('showSecond');
let showThirdLetter = document.getElementById('showThird');
let showFourthLetter = document.getElementById('showFourth');
let showFifthLetter = document.getElementById('showFifth');
// let lastThreeLabels = document.querySelectorAll("label[class=radio_label]");
button.addEventListener('click', () => {
    button.style.visibility ='hidden';

    questions.style.display = 'block';
    infobox.style.display = 'none';
    startbutton.style.display = 'none';
    questions2.style.display = 'none';
    questions3.style.display = 'none';
    questions4.style.display = 'none';
    footer.style = "position: relative";
    // document.body.style.background = '#F4B324';
});

var showResultsButtton = document.getElementById('next-btn-5');
var judgerPerceiverShowResult = document.getElementById('showResultJudgerPerceiver');
var introvertExtrovertShowResult = document.getElementById('showResultIntrovertExtrovert');
var feelerThinkerShowResult = document.getElementById('showResultFeelerThinker');
var intuitiveSensorShowResult = document.getElementById('showResultIntuitiveSensor');
var assertiveTurbulentShowResult = document.getElementById('showResultAssertiveTurbulent');

// JUDGER / PERCEIVER


let nextButton = document.getElementById('next-btn');

let questions2 = document.getElementById('questionshere2');
nextButton.addEventListener('click', () => {
    questions.style.display = 'none';
    questions2.style.display = 'block';
    questions3.style.display = 'none';
    questions4.style.display = 'none';
});

// INTROVERT/EXTROVERT

var intorExtCheckboxes = document.getElementById('questionshere2').querySelectorAll("input[type=radio][class=IntrovertExtrovert]");
let answeredQuestionsIntOrExt = [];

intorExtCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    answeredQuestionsIntOrExt =
      Array.from(intorExtCheckboxes) // Convert checkboxes to an array to use filter and map.
      .filter(z => z.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(z => z.value); // Use Array.map to extract only the checkbox values from the array of objects.

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
     function determineIntrovertOrExtrovert(){
        var x = arrSum(answeredQuestionsIntOrExt);
        if (x>0) {
           let finalResultX = ((1000 + x) / 2000) * 100;
           showResultsButtton.addEventListener('click', function (){
            introvertExtrovertShowResult.innerText = `${finalResultX.toFixed()}% introverted - ${100 - finalResultX.toFixed()}% extroverted`;
            showFirstLetter.innerText = "I";
           })
    }
    else if (x < 0) {
        let finalResultY = ( ((1000 - (x)) / 2000) * 100);
        showResultsButtton.addEventListener('click', function (){
          introvertExtrovertShowResult.innerText = `${finalResultY.toFixed()}% extroveted - ${100 - finalResultY.toFixed()}% introverted`;
          showFirstLetter.innerText = "E";
         })
    }
    }
    determineIntrovertOrExtrovert();
  })
});

//INTUITIVE/SENSOR

let nextButton2 = document.getElementById('next-btn-3');
let questions4 = document.getElementById('questionshere4');
nextButton2.addEventListener('click', () => {
  questions.style.display = 'none';
  questions2.style.display = 'none';
  questions3.style.display = 'none';
  questions4.style.display = 'block';
});

var intuitiveObservantCheckboxes = document.getElementById('questionshere4').querySelectorAll("input[type=radio][class=IntuitiveSensor]");
let answeredQuestionsintOrSensor = [];

intuitiveObservantCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    answeredQuestionsintOrSensor =
      Array.from(intuitiveObservantCheckboxes) // Convert checkboxes to an array to use filter and map.
      .filter(z => z.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(z => z.value); // Use Array.map to extract only the checkbox values from the array of objects.

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
     function determineIntuitiveSensor(){
        var x = arrSum(answeredQuestionsintOrSensor);
        if (x>=0) {
           let finalResultX = ((1000 + x) / 2000) * 100;
           showResultsButtton.addEventListener('click', function (){
            intuitiveSensorShowResult.innerText = `${finalResultX.toFixed()}% intuitive - ${100 - finalResultX.toFixed()}% observant`;
            showSecondLetter.innerText = "N";
           })
    }
    else if (x < 0) {
        let finalResultY = ( ((1000 - (x)) / 2000) * 100);
        showResultsButtton.addEventListener('click', function (){
          intuitiveSensorShowResult.innerText = `${finalResultY.toFixed()}% observant - ${100 - finalResultY.toFixed()}% intuitive`;
          showSecondLetter.innerText = "S";
         })
    }
    }
    determineIntuitiveSensor();
  })
});

//    FEELER/THINKER

let nextButton1 = document.getElementById('next-btn-1');
let questions3 = document.getElementById('questionshere3');
nextButton1.addEventListener('click', () => {
  questions.style.display = 'none';
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  questions4.style.display = 'none';
});

var feelOrThinkCheckboxes = document.getElementById('questionshere3').querySelectorAll("input[type=radio][class=FeelerThinker]");
let answeredQuestionsfeelOrThink = [];

feelOrThinkCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    answeredQuestionsfeelOrThink =
      Array.from(feelOrThinkCheckboxes) // Convert checkboxes to an array to use filter and map.
      .filter(z => z.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(z => z.value); // Use Array.map to extract only the checkbox values from the array of objects.

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
     function determineFeelerOrThinker(){
        var x = arrSum(answeredQuestionsfeelOrThink);
        if (x>=0) {
           let finalResultX = ((1000 + x) / 2000) * 100;
           showResultsButtton.addEventListener('click', function (){
            feelerThinkerShowResult.innerText = `${finalResultX.toFixed()}% feeling - ${100 - finalResultX.toFixed()}% thinking`;
            showThirdLetter.innerText = "F";
           })
    }
    else if (x < 0) {
        let finalResultY = ( ((1000 - (x)) / 2000) * 100);
        showResultsButtton.addEventListener('click', function (){
          feelerThinkerShowResult.innerText = `${finalResultY.toFixed()}% thinking - ${100 - finalResultY.toFixed()}% feeling`;
          showThirdLetter.innerText = "T";
         })
    }
    }
    determineFeelerOrThinker();
  })
});

var checkboxes = document.getElementById('questionshere').querySelectorAll("input[type=radio][class=JudgerPerceiver]");
let answeredQuestions = [];

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    answeredQuestions =
      Array.from(checkboxes) // Convert checkboxes to an array to use filter and map.
      .filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value); // Use Array.map to extract only the checkbox values from the array of objects.

      function arrSum(arr){
        return arr.reduce(function(a,b){
          return parseInt(a) + parseInt(b)
        }, 0);
      }
     function determineJudgerOrPerceiver(){
        var a = arrSum(answeredQuestions);
        if (a>=0) {
           let finalResult1 = ((1000 + a) / 2000) * 100;
           showResultsButtton.addEventListener('click', function (){
            judgerPerceiverShowResult.innerText = `${finalResult1.toFixed()}% judger - ${100 - finalResult1.toFixed()}% perceiver`;
            showFourthLetter.innerText += "J";
           })
    }
    else if (a < 0) {
        let finalResult2 = ( ((1000 - (a)) / 2000) * 100);
        showResultsButtton.addEventListener('click', function (){
          judgerPerceiverShowResult.innerText = `${finalResult2.toFixed()}% perceiver - ${100 - finalResult2.toFixed()}% judger`;
          showFourthLetter.innerText += "P";
         })
    }
    }
    determineJudgerOrPerceiver();
  })
});


// assertive/turbulent
// assertiveTurbulentShowResult

let nextButton3 = document.getElementById('next-btn-4');
let questions5 = document.getElementById('questionshere5');
nextButton3.addEventListener('click', () => {
  questions.style.display = 'none';
  questions2.style.display = 'none';
  questions3.style.display = 'none';
  questions4.style.display = 'none';
  questions5.style.display = 'block';
});

var assertiveTurbulentCheckboxes = document.getElementById('questionshere5').querySelectorAll("input[type=radio][class=AssertiveTurbulent]");
let answeredQuestionsAssOrTurb = [];

assertiveTurbulentCheckboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    answeredQuestionsAssOrTurb =
      Array.from(assertiveTurbulentCheckboxes) // Convert checkboxes to an array to use filter and map.
      .filter(z => z.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(z => z.value); // Use Array.map to extract only the checkbox values from the array of objects.

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
     function determineAssertiveTurbulent(){
        var x = arrSum(answeredQuestionsAssOrTurb);
        if (x>=0) {
           let finalResultX = ((1000 + x) / 2000) * 100;
           showResultsButtton.addEventListener('click', function (){
            assertiveTurbulentShowResult.innerText = `${finalResultX.toFixed()}% turbulent - ${100 - finalResultX.toFixed()}% assertive`;
            showFifthLetter.innerText = "T";
           })
    }
    else if (x < 0) {
        let finalResultY = ( ((1000 - (x)) / 2000) * 100);
        showResultsButtton.addEventListener('click', function (){
          assertiveTurbulentShowResult.innerText = `${finalResultY.toFixed()}% assertive - ${100 - finalResultY.toFixed()}% turbulent`;
          showFifthLetter.innerText = "A";
         })
      }
    }
    determineAssertiveTurbulent();
  })
});

var Te = document.querySelectorAll("input[type=radio][tag=TeQuestion]");
var showTeScore = document.getElementById("TeScore");
let TeArray = [];

Te.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      TeArray = Array.from(Te).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineTeScore(){     
        var x = arrSum(TeArray);
        showResultsButtton.addEventListener('click', function (){
          showTeScore.innerText = `Te Score: ${x}`
          })
        }
        determineTeScore();
    })
});

var Si = document.querySelectorAll("input[type=radio][tag=SiQuestion]");
var showSiScore = document.getElementById("SiScore");
let SiArray = [];

Si.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      SiArray = Array.from(Si).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineSiScore(){     
        var x = arrSum(SiArray);
        showResultsButtton.addEventListener('click', function (){
          showSiScore.innerText = `Si Score: ${x}`
          })
        }        
        determineSiScore();
    })
});

var Se = document.querySelectorAll("input[type=radio][tag=SeQuestion]");
var showSeScore = document.getElementById("SeScore");
let SeArray = [];

Se.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      SeArray = Array.from(Se).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineSeScore(){     
        var x = arrSum(SeArray);
        showResultsButtton.addEventListener('click', function (){
          showSeScore.innerText = `Se Score: ${x}`
          })
        }
        determineSeScore();
    })
});

var Ti = document.querySelectorAll("input[type=radio][tag=TiQuestion]");
var showTiScore = document.getElementById("TiScore");
let TiArray = [];

Ti.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      TiArray = Array.from(Ti).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineTiScore(){  
        var x = arrSum(TiArray);   
        showResultsButtton.addEventListener('click', function (){
          showTiScore.innerText = `Ti Score: ${x}`
          })
        }
        determineTiScore();
    })
});

var Fi = document.querySelectorAll("input[type=radio][tag=FiQuestion]");
var showFiScore = document.getElementById("FiScore");
let FiArray = [];

Fi.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      FiArray = Array.from(Fi).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineFiScore(){ 
        var x = arrSum(FiArray);    
        showResultsButtton.addEventListener('click', function (){
          showFiScore.innerText = `Fi Score: ${x}`
          })
        }
        determineFiScore();
    })
});

var Fe = document.querySelectorAll("input[type=radio][tag=FeQuestion]");
var showFeScore = document.getElementById("FeScore");
let FeArray = [];

Fe.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      FeArray = Array.from(Fe).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineFeScore(){  
        var x = arrSum(FeArray);   
        showResultsButtton.addEventListener('click', function (){
          showFeScore.innerText = `Fe Score: ${x}`
          document.getElementById("showResults").style = "visibility:visible";
          })
        }
        determineFeScore();
    })
});

var Ni = document.querySelectorAll("input[type=radio][tag=NiQuestion]");
var showNiScore = document.getElementById("NiScore");
let NiArray = [];

Ni.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      NiArray = Array.from(Ni).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineNiScore(){     
        var x = arrSum(NiArray);
        showResultsButtton.addEventListener('click', function (){
          showNiScore.innerText = `Ni Score: ${x}`;
          
          })
        }
        determineNiScore();
    })
});

var Ne = document.querySelectorAll("input[type=radio][tag=NeQuestion]");
var showNeScore = document.getElementById("NeScore");
let NeArray = [];

Ne.forEach(function(checkbox){
    checkbox.addEventListener('change', function(){
      NeArray = Array.from(Ne).filter(y=>y.checked).map(x=>x.value);

      function arrSum(arr){
        return arr.reduce(function(x,y){
          return parseInt(x) + parseInt(y)
        }, 0);
      }
      function determineNeScore(){     
        var x = arrSum(NeArray);
        showResultsButtton.addEventListener('click', function (){
          showNeScore.innerText = `Ne Score: ${x}`
          })
        }
        determineNeScore();
    })
});

var showFourLetters = document.getElementById("showFourLetters");
var linkToType = document.getElementById("linkToType");
var showLinkButton = document.querySelector("button[tag=showResultButton]");

function determineShowResults() {
  console.log(showFourLetters.innerText);
  if ((showFourLetters.innerText == "IN FJ-A") || (showFourLetters.innerText == "IN FJ-T")) {
    linkToType.innerHTML += `<a href="types.html#infj">Click to find out more info</a>`;
  }
   if ((showFourLetters.innerText == "IN FP-A") || (showFourLetters.innerText == "IN FP-T")) {
    linkToType.innerHTML += `<a href="types.html#infp">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "IS FP-A") || (showFourLetters.innerText == "IS FP-T")) {
    linkToType.innerHTML += `<a href="types.html#isfp">Click to find out more info</a>`
  }
  if ((showFourLetters.innerText == "IS FJ-A") || (showFourLetters.innerText == "IS FJ-T")) {
    linkToType.innerHTML += `<a href="types.html#isfj">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "IS TP-A") || (showFourLetters.innerText == "IS TP-T")) {
    linkToType.innerHTML += `<a href="types.html#istp">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "IS TJ-A") || (showFourLetters.innerText == "IS TJ-T")) {
    linkToType.innerHTML += `<a href="types.html#istj">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "IN TJ-A") || (showFourLetters.innerText == "IN TJ-T")) {
    linkToType.innerHTML += `<a href="types.html#intj">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "IN TP-A") || (showFourLetters.innerText == "IN TP-T")) {
    linkToType.innerHTML += `<a href="types.html#intp">Click to find out more info</a>`
  }
  // Extroverted start here
   if ((showFourLetters.innerText == "EN TP-A") || (showFourLetters.innerText == "EN TP-T")) {
    linkToType.innerHTML += `<a href="types.html#entp">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "EN TJ-A") || (showFourLetters.innerText == "EN TJ-T")) {
    linkToType.innerHTML += `<a href="types.html#entj">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "ES TP-A") || (showFourLetters.innerText == "ES TP-T")) {
    linkToType.innerHTML += `<a href="types.html#estp">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "ES TJ-A") || (showFourLetters.innerText == "ES TJ-T")) {
    linkToType.innerHTML += `<a href="types.html#estj">Click to find out more info</a>`
  }
   if ((showFourLetters.innerText == "ES FP-A") || (showFourLetters.innerText == "ES FP-T")) {
    linkToType.innerHTML += `<a href="types.html#esfp">Click to find out more info</a>`
  }
  if ((showFourLetters.innerText == "ES FJ-A") || (showFourLetters.innerText == "ES FJ-T")) {
    linkToType.innerHTML += `<a href="types.html#esfj">Click to find out more info</a>`
  }
  if ((showFourLetters.innerText == "EN FP-A") || (showFourLetters.innerText == "EN FP-T")) {
    linkToType.innerHTML += `<a href="types.html#enfp">Click to find out more info</a>`
  }
  if ((showFourLetters.innerText == "EN FJ-A") || (showFourLetters.innerText == "EN FJ-T")) {
    linkToType.innerHTML += `<a href="types.html#enfj">Click to find out more info</a>`
  }
}

showLinkButton.addEventListener('click', determineShowResults);