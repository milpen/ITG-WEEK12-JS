

function userName (str1) {
let result1=str1.trim();
  //console.log(result1);

 if(result1 ==='') {
    return"Имя не введено";
}
result1 = result1[0].toUpperCase()+result1.slice(1).toLowerCase();
  //console.log(result1);
return result1;
}
//userName('YuTYYmRR');
const input1=document.getElementById("name");
const buttonSubmit=document.getElementById("btn");
const input2=document.getElementById('link');
const input3=document.getElementById('comment');

function imageLink (src) {
  let parentImageLink =document.querySelector("#chat");
  let image=document.createElement('img');
  image.src=src;
  image.alt="UserAvatar";
  parentImageLink.appendChild(image);
}

function checkSpam(str2) {
  let result2= /viagra | xxx/ig;
  return str2.replace(result2, ' *** ');
}
//console.log(checkSpam('buy VIAgra now'));
//console.log(checkSpam('free xxx'));
//console.log(checkSpam('innocent rabbit'));
//let checkedComment = checkSpam(input3.value);

buttonSubmit.addEventListener("click", commentField, outputUserName);

function outputUserName (userName) {
  let parentUserName=document.querySelector("#chat");
  let outputName=document.createElement('p');
  outputName.textContent=userName(input1.value);
  //console.log(outputName);
  parentUserName.appendChild(outputName);
}

function commentField(evt) {
  evt.preventDefault();
  const chatName = document.getElementById("chat");
  let checkedName=userName(input1.value);
  chatName.textContent = checkedName;
  const chatComment = document.getElementById("chat");
  let checkedComment = checkSpam(input3.value);
  chatComment.textContent = checkedComment;
  outputUserName(userName);
  imageLink();
}

/*buttonSubmit.addEventListener('click', (evt)=> {
event.preventDefault();
userName(input1.value);
imageLink(input2.value);
checkSpam(input3.value);

});*/