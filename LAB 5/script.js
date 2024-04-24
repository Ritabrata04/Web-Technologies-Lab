document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your RSVP!');
    document.getElementById('rsvpForm').reset();
});
