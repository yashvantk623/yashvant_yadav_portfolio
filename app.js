document.querySelector("#Signup-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;
    var userContact = document.getElementById('contact').value;
    var userPassword = document.getElementById('password').value;

    var userId = generateUserId();

    var userData = {
        name: userName,
        email: userEmail,
        contact: userContact,
        password: userPassword
    }

    localStorage.setItem('user_' + userId, JSON.stringify(userData));

    // Call a function to add the user card to the list
    addUserCardToDisplay(userData);

    alert("You have now successfully signed up");
    this.reset();
});

// Function to generate a new user ID
function generateUserId() {
    var existingIds = Object.keys(localStorage).filter(function (key) {
        return key.startsWith('user_');
    });

    if (existingIds.length === 0) {
        return 1;
    } else {
        var lastId = existingIds.map(function (key) {
            return parseInt(key.split('_')[1]);
        }).reduce(function (a, b) {
            return Math.max(a, b);
        })
        return lastId + 1;
    }
}
