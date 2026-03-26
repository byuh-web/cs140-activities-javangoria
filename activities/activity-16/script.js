document.getElementById("submit").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name && email && message) {
        alert("Thank you for your message, " + name + "!");
        // Here you can also add code to send the data to a server or clear the form
    } else {
        alert("Please fill in all fields before submitting.");
    }
});

const classYear= document.quearySelectorAll('input[name="class"]');
classYear.forEach((radio) => {
    radio.addEventListener("change", function() {
        console.log("Selected class year: " + this.value);
    });
});