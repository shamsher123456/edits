const scriptURL = 'https://script.google.com/macros/s/AKfycbzjeINYm-69jHH_wzZP7hef1yirm7rsPoUFG1Q8737zchGLUmc7imaWRujHA5BK3-Zp/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})