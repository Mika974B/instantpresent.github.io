function redirectToComment(satisfaction) {
localStorage.setItem('avis', satisfaction);
window.location.href = 'commentaire.html';
}

function submitReview(event) {
event.preventDefault();

const avis = localStorage.getItem('avis');
const commentaire = document.getElementById('commentaire').value;
const form = document.getElementById('review-form');
const formData = new FormData(form);

formData.append('avis', avis);
formData.append('commentaire', commentaire);

fetch("https://formspree.io/f/xrbkbonz", {
method: "POST",
body: formData,
headers: {
'Accept': 'application/json'
}
}).then(response => {
if (response.ok) {
window.location.href = "merci.html";
} else {
alert("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
}
}).catch(error => {
alert("Erreur réseau. Veuillez vérifier votre connexion.");
});
}
