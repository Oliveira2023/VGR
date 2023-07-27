let slideIndex = 1
showSlides(slideIndex)

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i
    let slides = document.getElementsByClassName('mySlides')
    let demo = document.getElementsByClassName('demo')
    let captionText = document.getElementById('caption')
    let dot = document.getElementsByClassName('dot')
    if (n>slides.length) {slideIndex =1}
    if (n<1) {slideIndex = slides.length}
    for (i=0; i< slides.length; i++){
        slides[i].style.display = 'none'
    }
    for (i=0; i< demo.length; i++) {
        demo[i].className = demo[i].className.replace('active', '')
    }
    for(let j=0; j<dot.length; j++){
        dot[j].className = dot[j].className.replace('active', '')        
    }
    
    slides[slideIndex-1].style.display = 'block'
    demo[slideIndex -1].className += ' active'
    dot[slideIndex -1].className += ' active'
    //captionText.innerHTML = demo[slideIndex-1].alt
}