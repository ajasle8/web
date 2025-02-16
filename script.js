function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const contentDiv = document.getElementById("content");

    // Define passwords and corresponding pages
    const passwordPages = {
        "292832": "page1.html",
        "i_have_1_google_braya": "page3.html"
    };

    if (passwordPages[password]) {
        // Fetch content from the corresponding HTML file
        fetch(passwordPages[password])
            .then(response => response.text())
            .then(data => {
                contentDiv.innerHTML = data; // Inject HTML content into the page
                contentDiv.style.display = "block"; // Show content
                errorMessage.textContent = ""; // Clear error
            })
            .catch(error => {
                contentDiv.innerHTML = "<p>Failed to load content.</p>";
                console.error(error);
            });
    } else {
        errorMessage.textContent = "Incorrect password!";
        contentDiv.style.display = "none"; // Hide content
    }
}
