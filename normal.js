const apiUrl = 'https://dog.ceo/api/breeds/image/random'


document.addEventListener('DOMContentLoaded', function(){

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

const learnButton = document.getElementById('learnbtn')
learnButton.addEventListener('click', () => {
    window.alert("Normal Media is a company built by August Woodman and Danny Megard in 2023.")
})





const welcomeArray = [
    `Welcome to Normal Media ${name}. `,
    `Hi there ${name}, this is Normal Media.`,
    `Howdy ${name} are you interested in hiring a media company?`,
    `Katie Smith made this website, tell her it's beautiful, ${name}`
]

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

function submitWelcome(event) {
    greet.textContent = welcomeArray;
    const form = document.getElementById('form');
    const greet = document.getElementById('greet');
    form.addEventListener('submit', submitWelcome, generateRandomWordArray); {
        event.preventDefault(); //used for submit button
    }
}

form.appendChild(greet);





})


// logoDisplay.src = 'photos/Banner Export.png'
// const logoDisplay = document.getElementById('logo')
// logoDisplay.addEventListener("click", () => {
//     window.location.reload()
// })

//email input, on submit, include a popup window that says "Welcome *name*" and any other information needed

// const username = form.input("name")
// document.write("Welcome " + username + ".")