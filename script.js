document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
e.preventDefault();

// Animation des confettis
lancerConfettis();

// Attente avant d'afficher le message de remerciement
setTimeout(() => {
form.innerHTML = `
<h2 style="text-align: center; color: gold;">🎉 Merci pour votre retour !</h2>
<p style="text-align: center;">Notre service satisfaction vous répondra si besoin.</p>
`;
}, 1000);
});

function lancerConfettis() {
for (let i = 0; i < 100; i++) {
const confetti = document.createElement("div");
confetti.classList.add("confetti");
document.body.appendChild(confetti);

confetti.style.left = Math.random() * 100 + "vw";
confetti.style.animationDelay = Math.random() * 2 + "s";

setTimeout(() => {
confetti.remove();
}, 5000);
}
}
});

// Style confettis
const style = document.createElement('style');
style.innerHTML = `
.confetti {
position: fixed;
top: -10px;
width: 10px;
height: 10px;
background: gold;
opacity: 0.9;
animation: fall 3s linear infinite;
border-radius: 50%;
z-index: 9999;
}

@keyframes fall {
to {
transform: translateY(100vh) rotate(360deg);
}
}
`;
document.head.appendChild(style);
