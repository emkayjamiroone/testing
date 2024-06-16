document.getElementById('contact-form').addEventListener('submit', submitContactForm);

function submitContactForm(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    let contactData = {
        name: name,
        email: email,
        message: message
    };

    // Send a message 'submitContact' with contactData
    window.postMessage({ type: 'submitContact', data: contactData }, '*');
}