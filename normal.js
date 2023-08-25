const apiUrl = 'https://dog.ceo/api/breeds/image/random'


document.addEventListener('DOMContentLoaded', function(){

// making the image appear when mouse-ing over the div element
function get_random_dog_image() {

    fetch(apiUrl)
    .then(function(response){
    return response.json();
    })
    .then(function(data){
        display_image(data.message);
    })
    .catch(function(error){
        console.log("error: " + error)
    })
}

function display_image(dog_apiUrl){
    document.getElementById('dog').src = dog_apiUrl
}
const tryBtn = document.getElementById('enjoyDiv')
tryBtn.addEventListener('mouseover', () => {
get_random_dog_image()
})


// making the event listener and alert for the 'Learn More' button
const learnButton = document.getElementById('learnbtn')
learnButton.addEventListener('click', () => {
    window.alert("Normal Media is a company built by August Woodman and Danny Megard in 2023.")
})




// the array for the different kinds of welcome messages
const welcomeArray = [
    `Welcome to Normal Media.`,
    `Hi there, this is Normal Media.`,
    `Howdy, are you interested in hiring a media company?`,
    `Katie Smith made this website, tell her it's beautiful.`
]

// randomizing the array and how they are returned
function generateRandomWordArray(length, welcomeArray) {
    const randomArray = [];
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * welcomeArray.length);
    randomArray.push(welcomeArray[randomIndex]);
    }
    
    return randomArray;
}

    const length = 4;   // Length of the array

const randomWordArray = generateRandomWordArray(length, welcomeArray);
console.log(randomWordArray);



// getting the form itself to actually work

const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("send");
const outputElement = document.getElementById("greet");

// Attach an event listener to the button
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // Get the value from the input box
    const name = nameInput.value;

    // Randomly select a welcome message from the array
    const randomIndex = Math.floor(Math.random() * randomWordArray.length);
    const randomWelcomeMessage = randomWordArray[randomIndex];
    
    const formattedMessage = randomWelcomeMessage.replace("${name}", name)

    // Display the message in the output element
    outputElement.textContent = formattedMessage;
    });
    
})
// you may notice all of the things saying "name" and that is because I wanted the users name to be input into the array,
// however, that was a much more complicated task than I had expected. I will make it work, but just not at this exact moment.






// *ALL OF THIS IS DISCARDED CODE*

// document.getElementById('emailForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const newH = document.createElement('h3')
//     const sentence = document.createTextNode(randomWordArray);
//     const input = document.getElementById('nameInput');
    
//     newH.appendChild(sentence);
    
//     const currentDiv = document.getElementById('greet');
//     document.body.appendChild(newH, currentDiv); //issues here, needs something else to make it work
    


// function submitWelcome(event) {
//     greet.textContent = welcomeArray;
//     const form = document.getElementById('emailForm');
//     const greet = document.getElementById('greet');
//     form.addEventListener('submit', submitWelcome, generateRandomWordArray); {
//         event.preventDefault(); //used for submit button
//         greet.appendChild(form);
//     }
// }




// submitWelcome






// logoDisplay.src = 'photos/Banner Export.png'
// const logoDisplay = document.getElementById('logo')
// logoDisplay.addEventListener("click", () => {
//     window.location.reload()
// })

//email input, on submit, include a popup window that says "Welcome *name*" and any other information needed

// const username = form.input("name")
// document.write("Welcome " + username + ".")