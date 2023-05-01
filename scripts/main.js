let myHeading = document.querySelector('h1');
myHeading.textContent = 'Привіт!!! =)';

document.body.style.backgroundColor = "green";

const myP= document.querySelector('p');
myP.textContent = 'Тут був якийсь текст';

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/logo.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

let myImage1 = document.querySelector('p');

document.querySelector('button').onclick = function() {
    this.style.background = "green";
    this.style.width = "600px";
    this.style.height = "30px";
    this.style.color = "white";
  }


  document.querySelector('p').onclick = function() {
    this.style.background = "yellow";
    this.style.fontSize = "20px"
    this.style.textAlign = "center";
    this.style.color = 'black';
    this.textContent = "JavaScript";
  }

  document.querySelector('h1').onclick = function() {
    this.style.background = "purple";
  }

  document.querySelector('h1').onclick = function() {
    this.style.color = "white";
  }

    document.querySelector('h1').onclick = function() {
    this.style.color = "white";
  }

      document.querySelector('h1').onclick = function() {
    this.style.color = "white";
  }

  document.querySelector('h1').onclick = function() {
    this.style.color = "white";
  }

  document.querySelector('.asd').onclick = function() {
      this.style.color = "white";
    this.style.backgroundColor = "blue";
  }

  document.querySelector('.ull').onclick = function() {
    this.style.background = "pink";
  }

  document.querySelector('.ash').onclick = function() {
    this.style.background = "pink";
  }

  // document.querySelector('html').onclick = function() {
  //   this.style.background = "grey";
  // }
  document.querySelector('body').onclick = function() {
    this.style.background = "black";
  }
