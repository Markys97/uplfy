const firstSections= document.querySelector('.section');
const backgroundBlock= document.querySelector('.background');
const firstSections_params= firstSections.dataset.params.split(';');
let pathButton_fixes= document.querySelectorAll('.button-fixe___img path')
let textButton_fixe= document.querySelector('.button-fixe__text')


// set  background, path of fixe button and text of of fixe button  color of data-color form the first section
window.addEventListener('load',e=>{
    backgroundBlock.style.boxShadow=`${firstSections_params[1]} ${firstSections_params[2]} ${firstSections_params[3]}  `
    backgroundBlock.style.background= firstSections_params[0];
    pathButton_fixes.forEach(path=>{
        path.style.fill=firstSections.dataset.color
    })
    textButton_fixe.style.color=firstSections_params[0];
   
   
})





