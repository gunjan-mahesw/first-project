document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `
        Thank you, ${name}! Your meeting has been booked for ${date} at ${time}.
        A confirmation email has been sent to ${email}.
    `;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
});
