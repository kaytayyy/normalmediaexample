function get_random_dog_image() {

const apiUrl = 'https://dog.ceo/api/breeds/image/random'

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

const tryBtn = document.getElementById('try')
tryBtn.addEventListener('click', () => {
get_random_dog_image(display_image)
})




// const apiUrl = 

// const learnButton = document.getElementById('learnbtn')
// learnButton.addEventListener('click', () => {
// window.alert("Normal Media is a company built by August Woodman and Danny Megard in 2023.")
// })

// const fetchShibas = () =>
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(shibaData => renderShiba(shibaData))

// fetchShibas()

// //append child shiba to "enjoy our work" and mouse over to reveal a new shiba in the div box..
// const boxDiv = document.getElementById('box')
// const shibaImage = document.createElement('img')
// boxDiv.appendChild(shibaImage)

// shibaImage.src = apiUrl
console.log(apiUrl)

// enjoyWork.addEventListener("mouseover", RespondMouseOver);
// enjoyWork.addEventListener("mouseout", RespondMouseOut);

// function RespondMouseOver() {
//     document.getElementById("effect").innerHTML +=
//         "MouseOver Event" + "<br>";
// }

// function RespondMouseOut() {
//     document.getElementById("effect").innerHTML +=
//         "MouseOut Event" + "<br>";
// }

// function RespondClick() {
//     document.getElementById("effect").innerHTML +=
//         "Click Event" + "<br>";
// }

logoDisplay.src = 'photos/Banner Export.png'
const logoDisplay = document.getElementById('logo')
logoDisplay.addEventListener("click", () => {
    window.location.reload()
})

//email input, on submit, include a popup window that says "Welcome *name*" and any other information needed

const username = form.input("name")
document.write("Welcome " + username + ".")