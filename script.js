function redirect(choice) {
const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeetroCjCPvGT9hUzMRLqeH3kIa/viewform"; // 🔁 Remplacer par ton vrai lien
const entryID = "entry.123456789"; // 🔁 Remplacer par l’ID réel du champ satisfaction
const finalURL = `${formURL}?${entryID}=${encodeURIComponent(choice)}`;
window.location.href = finalURL;
}
