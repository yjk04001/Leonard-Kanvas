var myImage = document.querySelector('img');

myImage.onclick = function(){
    var myScr = myImage.getAttribute('src');
    if(myScr === 'images/Kawhi-Leonard-Spurs-2015-BasketWallpapers.com-.jpg')
    {
      myImage.setAttribute('src', 'images/KLNicePoster3.jpg');
    }
    else
    {
      myImage.setAttribute('src', 'images/Kawhi-Leonard-Spurs-2015-BasketWallpapers.com-.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Kawhi Leonard is good, ' + myName;
}
if (!localStorage.getItem('name'))
{
setUserName();
} else
{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Kawhi Leonard is good, ' + storedName;
}

myButton.onclick = function()
{
    setUserName();
}
