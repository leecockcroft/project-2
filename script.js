
const app=(()=>{
 const carousel = document.querySelector('.carousel');
  const carouselWrapper = document.querySelector('.carousel-wrapper');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
 const eventHandler=()=>{
   let count=0;
carousel.addEventListener('click',(e)=>{




event.preventDefault()
console.log(e.target.dataset.arrow);if(e.target.dataset.arrow=='right'){
    arrowRight.style.pointerEvents='auto'
      arrowLeft.style.pointerEvents='auto'
      count-=25;
carouselWrapper.style.transform=`translatex(${count}%)`
if(count== -75){
  arrowRight.style.pointerEvents='none'
}

console.log(count)
}
if(e.target.dataset.arrow=='left'){
  arrowRight.style.pointerEvents='auto'
    arrowLeft.style.pointerEvents='auto'
  count+=25;
carouselWrapper.style.transform=`translatex(${count}%)`
if(count== 0){
  arrowLeft.style.pointerEvents='none'
}

console.log(count)
}

})


 }


return {

  init:()=>{
    eventHandler()
  }
}

})();

app.init()
