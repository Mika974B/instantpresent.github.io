function submitReview(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      window.location.href = 'commentaire.html';
    } else {
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  }).catch(error => {
    alert("Une erreur est survenue. Veuillez réessayer.");
  });

  return false;
}
