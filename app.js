function playAudio(word) {
    let audio = new Audio(`audio/${word}.mp3`);
    audio.play().catch(error => {
        alert("File audio non trovato: " + word + ".mp3");
    });
}

function showSolutions() {
    document.getElementById("solutions").style.display = "block";
}
