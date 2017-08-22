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
