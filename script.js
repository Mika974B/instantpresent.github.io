function redirect(satisfaction) {
const encoded = encodeURIComponent(satisfaction);
const formURL = `https://forms.gle/NeGgqK2q7aviss${encoded}`; // à adapter si nécessaire
window.location.href = formURL;
}
