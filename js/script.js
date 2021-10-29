
const slideImg = ['img/nz/nz2.jpg','img/nz/nz3.jpg','img/aus/aus1.jpg','img/taiwan/taiwan.jpg',
'img/thailand/thailand.jpg','img/colombia/colombia.jpg','img/ecuador/ecuador.jpg','img/us/us.jpg','img/japan/japan.jpg']

const slideText = ['New Zealand','New Zealand','Australia','Taiwan','Thailand','Colombia','Ecuador','United States','Japan'
]
let indexOfSlides = 0;

function slideShow(){
    if(indexOfSlides === slideImg.length -1){
        indexOfSlides= 0;
    }else{
        indexOfSlides++;
    }
    if(indexOfSlides === slideText -1){
        indexOfSlides=0;
    }
    document.getElementById('myslide').src = slideImg[indexOfSlides]
    document.getElementById('text').textContent=slideText[indexOfSlides]
}

/* function objectFit(){
    if(indexOfSlides == 4){
        document.getElementById('myslide').style.objectFit ='contain';
    }else{
        document.getElementById('myslide').style.objectFit ='cover';
    }
 }*/

setInterval(function () {
    slideShow();
}, 2000);

window.onload = function (){
    const popup = document.getElementById('js-open');
    if(!popup) return;
    popup.classList.add('active');
    
    const bg = document.getElementById('overlay');
    const closeBtn = document.getElementById('js-close')

    closePopUp(bg);
    closePopUp(closeBtn)

    function closePopUp(el){
        if(!el) return;
        el.addEventListener('click', function(){
            popup.classList.remove('active')
        })
    } 
}





//pre,nex slides
/* const right = document.getElementById('rihgt')
const left = document.getElementById('left')


 function slideNext(x){
    scrollSlide(indexOfSlides = indexOfSlides + x);
}

//button
function currentSlide(x){
    scrollSlide(indexOfSlides = x);
}
 

 function scrollSlide(x){
/*     let headerSlides = document.getElementsByClassName('slide');
     const bottomDot = document.getElementsByClassName('circles');
 */  /*   if(x > slideImg.length ){
        indexOfSlides = 1
    }
    if (x < 1) {
        indexOfSlides = slideImg.length
    }

     for(let i = 0; i< slideImg.length; i++){
        indexOfSlides[i]
        indexOfSlides++;

        }
        document.getElementById('myslide').src = slideImg[indexOfSlides]

 */ 
/*     if (indexOfSlides > headerSlides.length){
        indexOfSlides = 1;
    }
    headerSlides[indexOfSlides -1].style.display = "block";
    setTimeout(showSlides, 2000)
        //index =2 -> slide 3
    headerSlides[indexOfSlides-1].style.display = "block";
 */

/*     for(let i = 0; i < bottomDot.length; i++){
        bottomDot[i].className = bottomDot[i].className.replace('active', '');
    } 
 */
    
/*     bottomDot[indexOfSlides -1].className += 'active'; }
 */






/* const openModal = document.querySelectorAll('[data-modal-target]')
const closeModal = document.querySelectorAll('[data-close-button]')
const modal = document.getElementsByClassName('modal1')

 */
/* closeModal.forEach(button =>{
    button.addEventListener('click', ()=>{
        const modal = button.closest('.modal1')
        closeModalButton(modal)
    })

})

function openModalButton(modal1){
    if(modal1 == null) return
    modal1.classList.add('active')
    overlay.classList.add('active')
}
function closeModalButton(modal){
    if(modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')

} */