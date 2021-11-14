// function say(what) {
//   console.log("Browser is saying:" + what  )
// }

function say(what){
  // programatically selecting an HTMl element
  let elem=document.getElementById('lyrics');
  console.log(elem);
  // programatically create a new paragraph element
  let newElem=document.createElement('p');

  newElem.innerHTML=what;

  // add the new paragraph to the lyrics div
  elem.appendChild(newElem);
}

function makeCircle(){
  let elem=document.getElementById('rect');

  elem.style.borderRadius= '50px'
}

function makeRect(){
  let elem=document.getElementById('rect');

  elem.style.borderRadius= '0px'
}

let circleButton = document.getElementById('circleButton');
circleButton.addEventListener('click',makeCircle);

let rectButton = document.getElementById('rectButton');
rectButton.addEventListener('click',makeRect);
