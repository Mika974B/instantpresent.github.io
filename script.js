unction redirect(satisfaction) {
const encoded = encodeURIComponent(satisfaction);
const formUrl = `https://formspree.io/f/mgegqkzq?avis=${encoded}`;
window.location.href = formUrl;
}
