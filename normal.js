const apiUrl = 'http://shibe.online/api/shibes?count=[1-100]'

const learnButton = document.getElementById('learnbtn')
learnButton.addEventListener('click', () => {

})

const fetchShibas = () =>
    fetch(apiUrl)
    .then(response => response.json())
    .then(shibaData => renderShiba(shibaData))

fetchShibas()

//append child shiba to "enjoy our work" and mouse over to reveal a new shiba in the div box..
const enjoyWork = document.getElementById('enjoywork')
const shibaImage = document.createElement('img')
enjoyWork.appendChild(shibaImage)

enjoyWork.addEventListener("mouseover", RespondMouseOver);
enjoyWork.addEventListener("mouseout", RespondMouseOut);

function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
        "MouseOver Event" + "<br>";
}

function RespondMouseOut() {
    document.getElementById("effect").innerHTML +=
        "MouseOut Event" + "<br>";
}

function RespondClick() {
    document.getElementById("effect").innerHTML +=
        "Click Event" + "<br>";
}

logoDisplay.src = 'photos/Banner Export.png'
const logoDisplay = document.getElementById('logo')
logoDisplay.addEventListener("click", () => {
    window.location.reload()
})

//email input, on submit, include a popup window that says "Welcome *name*" and any other information needed