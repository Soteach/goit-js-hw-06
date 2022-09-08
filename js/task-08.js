const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  

  if (email === '' || password === '') {
    alert('Заповніть всі поля!');
    return;
  }

  const formData = {
    email,
    password,
  }
  
  console.log(formData);

  event.currentTarget.reset();
};