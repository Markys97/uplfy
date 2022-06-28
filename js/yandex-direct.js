let article= document.querySelector('.article-yandex');
let positionTop;
var lastScrollTop = 0;

window.addEventListener('scroll',e=>{
    
    
    let positionTop= parseFloat(getComputedStyle(article).top) 
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if(this)
    
    if (st > lastScrollTop){
        article.style.top =(positionTop +10+ 'px')
        
    }else{
      article.style.top =(positionTop -10+ 'px')
     
    }
    lastScrollTop = st <= 0 ? 0 : st; 
    
})




window.scroll(0,700)