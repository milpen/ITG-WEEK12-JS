

function userName (str1) {
let result1=str1.trim();
  console.log(result1);

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

const userRightName=input1.value;
let checkedName=userName(userRightName);

function imageLink (src) {
  let image=document.createElement('img');
  image.src=src;
  input2.append(image);
}

function checkSpam(str2) {
  let result2= /viagra | xxx/ig;
  return str2.replace(result2, ' *** ');
}
//console.log(checkSpam('buy VIAgra now'));
//console.log(checkSpam('free xxx'));
//console.log(checkSpam('innocent rabbit'));

buttonSubmit.addEventListener('click', ()=> {
event.preventDefault();
userName(input1.value);
imageLink(input2.value);
checkSpam(input3.value);

});


function commentField () {
const finalName=document.querySelector('chat');
finalName.textContent=checkedName;
console.log (finalName);

}
//console.log(commentField);