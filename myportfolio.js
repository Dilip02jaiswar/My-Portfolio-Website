// Navbar 
	let menu = document.querySelector('.toggleMenu');
	let ul = document.querySelector('ul');
	let i = document.querySelector('.navIcon');
	menu.addEventListener('click', () => {
 ul.classList.toggle('active');
 i.classList.toggle('fa-bars');
  i.classList.toggle('fa-xmark');
	});

     // Home 
 const slides = document.getElementById('slides');
  // const dotsContainer = document.getElementById('dots');
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000);

  function updateSlider() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    // updateDots();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }

  // function prevSlide() {
  //   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  //   updateSlider();
  // }

  // function goToSlide(index) {
  //   currentSlide = index;
  //   updateSlider();
  //   resetInterval();
  // }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // function updateDots() {
  //   dotsContainer.innerHTML = '';
  //   for (let i = 0; i < totalSlides; i++) {
  //     const dot = document.createElement('span');
  //     dot.classList.add('dot');
  //     if (i === currentSlide) dot.classList.add('active');
  //     dot.onclick = () => goToSlide(i);
  //     dotsContainer.appendChild(dot);
  //   }
  // }

  updateSlider();

  
// About 
function about(){
	location.href="#About";
}
let date = new Date();
let currentYear = Number.parseInt(date.getFullYear());
let birthYear = 2002;
let currentAge =  currentYear - birthYear ;
console.log(currentAge);
let age = document.querySelector('#age');
age.innerHTML = currentAge ;

// Contact 
let button = document.querySelector('input[type="submit"]');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');
console.log(button);
button.addEventListener('click', (e) => {
	e.preventDefault();
   
   if(name.value == "" && name.value == "" && name.value == "" && name.value == ""){
   	alert('Please Fill the Form ');
    return;
   }else if(name.value == ""){
   		alert('Please Enter Your Name');
        return;
   }else if(email.value == ""){
   		alert('Please Your Email');
        return;
   }else if(subject.value == ""){
   		alert('Please Enter Your Subject');
        return;
   }else if(message.value == ""){
   		alert('Please Enter Your Message');
        return;
   }
   // alert('Message Send Successfully ');
   
   document.querySelector('.message-container').style.display = "flex";

   function success(){
   	document.querySelector('.success-text').style.visibility = "visible";
   }
   setTimeout(success, 1000);
});

function hideContainer(){
	// alert('hello');
	   document.querySelector('.message-container').style.display = "none";
}
