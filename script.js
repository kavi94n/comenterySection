const formEl = document.forms.feedback;
const errorMessageEl = document.getElementById('error-message');

formEl.addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const message = document.getElementById('message').value;

  if (!firstName ||!lastName ||!message) {
   //show the error message section
    errorMessageEl.style.display = 'block';
  } else {
    

    //get the form data section
    const formData = new FormData(formEl);

    //get the input values
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const message = formData.get('message');

    //create new comment list section
    const newComment = document.createElement('div');
    newComment.classList.add( 'space-x-4', 'text-sm', 'text-gray-500');

    //first name and last name section
    const nameEl = document.createElement('div');
    nameEl.classList.add('flex-1', 'py-10');
    nameEl.innerHTML = `<strong>${firstName} ${lastName}</strong>`;

    //create message element
    const messageEl = document.createElement('div');
    messageEl.classList.add('prose', 'prose-sm', 'mt-4', 'max-w-none', 'text-gray-500');
    messageEl.textContent = message;

   
    newComment.appendChild(nameEl);
    newComment.appendChild(messageEl);

     //append the elements to main div
    const commentListEl = document.getElementById('commentlist');
    commentListEl.appendChild(newComment);

   //clear the input fields
    formEl.reset();

  //hide the error message
    errorMessageEl.style.display = 'none';
  }
});