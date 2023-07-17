
let elementClicked = false;

document.getElementById("3_").addEventListener('click', function handleClick() {
    
    if(!elementClicked){
        document.getElementById("Main_nav").style.display="inline";
        elementClicked = true;
    }
    else if(elementClicked) {
        document.getElementById("Main_nav").style.display="none";
        elementClicked=false;
      }
  

});