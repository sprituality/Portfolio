console.log("JS connected successfully!");

const heading= document.querySelector("h1");
console.log(heading);

const btn = document.getElementById("projectBtn");
console.log(btn);

btn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("clicked");
    const projectSection = document.getElementById("projects");
    projectSection.innerHTML = `
        <h2>Projects</h2>
        <p>✔ Portfolio Website</p>
        <p>✔ More coming soon...</p>
    `; 
   
});

const link = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: ", this.textContent);
    });
});