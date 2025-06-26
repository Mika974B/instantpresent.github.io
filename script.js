document.getElementById("avisForm").addEventListener("submit", function(event){
event.preventDefault();

// Affichage des confettis dorés
const confettiSettings = {
target: 'canvas',
max: 150,
size: 1.2,
animate: true,
props: ['circle'],
colors: [
[255,215,0], // or doré
[255,223,0], // jaune chic
[255,240,140] // doré clair
]
};
const confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

setTimeout(() => {
alert("Merci pour votre avis !");
}, 1000);
});

// Chargement de la bibliothèque Confetti
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js';
document.head.appendChild(script);

// Ajout dynamique du canvas confetti
const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);
