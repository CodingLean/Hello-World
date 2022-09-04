console.log("Hello World");

function guessBirthday() {
    let answer;

    while (answer != '9 february 2018') {
        answer = prompt('When is Kiellas Birthday?');
        if (answer !='9 February 2018') {
          alert('That was incorrect please try again')
        } else {
           alert('You are coreect');
           break;
        }
    }
}

function showBabies(){
    let usersNum = prompt('Rate My page? 1-5');
    // 3
    
    for (let i = 0; i < usersNum && i < 5; i++){
      document.write('<img src="KikiKursor.png" alt="daughter" class="child"/>');
    }
  }
    








function newGreetings() {
  let usersName = prompt("Hello, whats your name?");
  let Message;

  if (usersName === "Isaiah") {
    Message = "Hey Dad!";
  } else {
    Message = "Hey, Welcome to Kiki and Santanas Page!";
  }
  document.write(Message);
  return usersName;
}
function big() {
  let kidsName = prompt("Do you know Santanas nickname?");
  let question;

  if (kidsName === "Sosa Baby") {
    question = "SOSA BABY!";
  } else {
    question = "Nah";
 }
document.write(question);

}
function skittles() {
  kidsName = prompt("Do you know Ki'ella's nickname?");
  let inquiry;

  if (kidsName === "Princess Kiki") {
    inquiry = "Princess Kiki!";
  } else {
    inquiry = "Nah";
  }
  document.write(inquiry);
}
 
