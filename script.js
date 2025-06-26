document.getElementById('feedbackForm').addEventListener('submit', function(event) {
event.preventDefault();

// Récupération des valeurs
const name = document.querySelector('input[name="name"]').value;
const email = document.querySelector('input[name="email"]').value;
const materiel = document.querySelector('select[name="materiel"]').value;
const commentaire = document.querySelector('textarea[name="commentaire"]').value;

// Construction du message à enregistrer
const message = `⭐️ Nouvel avis client :
Nom/Pseudo : ${name}
Email : ${email}
Matériel : ${materiel}
Commentaire : ${commentaire}`;

// Affiche dans la console (à remplacer plus tard par un envoi réel)
console.log(message);

// Redirection vers la page de remerciement
window.location.href = "remerciement.html";
});
