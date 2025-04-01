fetch("crustacean-species.html")
.then(response => response.text())
.then(data => {
  document.getElementById("crustacean-container").innerHTML = data;
})
.catch(error => console.error("Error loading the HTML file:", error));