// JavaScript Functions

function toggleSynopsis() {
    var synopsisText = document.getElementById('synopsisText');
    if (synopsisText.style.display === 'none') {
        synopsisText.style.display = 'block';
    } else {
        synopsisText.style.display = 'none';
    }
}

// Function to show the Home section
function showHome() {
    document.getElementById('homeSection').style.display = 'block';
    document.getElementById('featuresSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';

    // Activate the Home button
    document.querySelector('.UpperBorder button.active').classList.remove('active');
    document.querySelector('.UpperBorder button:nth-child(1)').classList.add('active');
}

// Function to show the Features section
function showFeatures() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('featuresSection').style.display = 'block';
    document.getElementById('contactSection').style.display = 'none';

    // Activate the Features button
    document.querySelector('.UpperBorder button.active').classList.remove('active');
    document.querySelector('.UpperBorder button:nth-child(2)').classList.add('active');
}

// Function to show the Contact section
function showContact() {
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('featuresSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'block';

    // Activate the Contact button
    document.querySelector('.UpperBorder button.active').classList.remove('active');
    document.querySelector('.UpperBorder button:nth-child(3)').classList.add('active');
}

// Function to handle the opening animation
function handleOpeningAnimation() {
    setTimeout(() => {
        // Hide the opening screen
        document.getElementById('openingScreen').style.opacity = '0';
        document.getElementById('openingScreen').style.pointerEvents = 'none'; // Allow user interaction
    }, 3000); // Duration: 3 seconds
}

// Block right-click menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Run the opening animation function
handleOpeningAnimation();

// Toggle about text on button click
document.querySelector('.UpperBorder button:nth-child(1)').addEventListener('click', function () {
    document.getElementById('aboutText').classList.toggle('show-text');
});



//Added
        function submitForm() {
            // Perform client-side validation if needed
            // Example: Check if required fields are filled
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // If validation passes, you can send the message to the server
            // In a real-world scenario, this would involve an AJAX request to a backend server
            // For simplicity, this example just logs the message to the console
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Optionally, you can reset the form after submission
            document.getElementById('inquiryForm').reset();
        }

        function callEmergency() {
            // You can provide a link to emergency services or display a message
            alert('In case of emergency, please call 911 or your local emergency hotline.');
        }