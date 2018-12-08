

document.querySelector('.buttonOne').addEventListener('click',function(e){

  function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop }
  }
  
  // example use
  var div = document.querySelector('#money');
  var divOffset = offset(div);
  console.log(divOffset.top);
  
  const buyPage = divOffset.top;
  
  let buyNow = function(){
    window.scrollTo(0,buyPage);
  }
  

  buyNow();
  e.preventDefault();
})