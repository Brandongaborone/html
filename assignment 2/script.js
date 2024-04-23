const name= 'Brandon';
const surname=' Gaborone';
console.log('my name is'+ name+'and i am'+surname);
console.log('my name is $ {name} and i am ${surname}')



const personalInfo = {
        name: "Brandon",
        bio: "Hey there, I'm Brandon, your go-to guy for all things tech, sports, and coding. Whether I'm diving into the latest gadgets, scoring goals on the field, or crafting lines of code, I'm always in my element.",
        imageUrl: "./assets/download (6).jpg",
        imageUrl2: "./assets/images.jpg",
        address: " 22 MAFUNGU STREET<br> GALESHEWE<br>KIMBERLEY",
        email: "Brandongaborone@gmail.com",
        phone: "065 147 0011",
        facebook:"https://www.facebook.com/",
        twitter: "https://www.instagram.com/"
      };
      
      const projects = [
        {
          title: "Project 1",
          description: "R548 254 46",
          
        },
        {
          title: "Project 2",
          description: "R882 325 45",} ]
          
       
      



const Name = document.querySelector('name');
const Bio = document.querySelector('bio');
const Image = document.getElementById('Image');
const projectsList = document.getElementById('projects-list');

const contentImage = document.getElementById('Image');
const contactEmail = document.querySelector('aside a');

heroName.textContent = personalInfo.name;
heroBio.textContent = personalInfo.bio;
heroImage.src = personalInfo.imageUrl;
contactEmail.textContent = personalInfo.email;
contactPhone.textContent = personalInfo.phone;

contentImage.src = personalInfo.imageUrl2;

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(warning); })


  alert[('Your message has been')] 


function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
function validateForm() {
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');
  const errorMessage = document.getElementById('errorMessage');

  errorMessage.innerHTML = ''; // Clear any previous error messages

  // Email validation
  if (!validateEmail(emailInput.value)) {
    errorMessage.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  // Message validation (optional)
  // You can add checks for minimum message length or specific content here

  return true; // Allow form submission if all validations pass
}

function validateEmail(email) {
  const re = /^(([^<>()[\\]\\\\.,;:\s@"]+(\.[^<>()[\\]\\\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

