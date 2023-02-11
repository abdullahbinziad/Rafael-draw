
const submitBtn = document.getElementById('submitBtn');
const participantNo= document.getElementById('participantNo'); 
const display= document.getElementById('display'); 
const tryBtn= document.getElementById('tryBtn');
const win1= document.getElementById('win-1');
const win2= document.getElementById('win-2');
const win3= document.getElementById('win-3');
const allName = document.getElementById('allName');
const participantList = document.getElementById('participant-list');

// stpe-1: Extract Text from the text area and stored it in a array
// step-2: Render the name , and shuffle the array 
//step-3 : Choice randsom name , remove thet name , and display him 

const theParticipant = [];
submitBtn.addEventListener('click', function(){
  let participantsName = allName.value.split(', ');
  
  for(const participantName of participantsName ){
    theParticipant.push(participantName);


    //empty the field 
    allName.value='';
//creat elements and append it to the parent 

const li= document.createElement('li');
li.classList='list-group-item single-li';
li.innerText= participantName ;

participantList.append(li)

    // show the Number of Participant in the Display above
    participantNo.innerText= theParticipant.length;
    
  }
  console.log(theParticipant);
})

// function for shuffle 



// // function for shuffle 

function shuffle(theParticipant){

  let shuffleArr=[...theParticipant];
  for(let i=shuffleArr.length-1; i>0;i--){
let rand=Math.floor(Math.random()*(i+1));
let temp = shuffleArr[rand]
shuffleArr[rand]= shuffleArr[i]
shuffleArr[i]= temp;
  }
  return shuffleArr;
}

tryBtn.addEventListener('click', function(){

  let shuffledNames= shuffle(theParticipant)
  for(let i=1; i<shuffledNames.length; i++){
    (function(i,count){
      setTimeout(()=>{
        let rand = Math.floor(Math.random()* (shuffledNames.length));
        display.innerHTML = shuffledNames[rand];



        if(count==shuffledNames.length-1){
          if(!win1.innerText){
            win1.innerText=shuffledNames[rand]
            let ind = theParticipant.indexOf(shuffledNames[rand])
            theParticipant.splice(ind,1)
          }
         else if(!win2.innerText){
            win2.innerText=shuffledNames[rand]
            let ind = theParticipant.indexOf(shuffledNames[rand])
            theParticipant.splice(ind,1)
          }
         else if(!win3.innerText){
            win3.innerText=shuffledNames[rand]
            let ind = theParticipant.indexOf(shuffledNames[rand])
            theParticipant.splice(ind,1)
          }else{
            alert("The Draw end")
          }
        }

       
      },i)
    }(i*100,i))

    }
  }
)



