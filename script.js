const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phone);
    console.log("Subject:", subject);
    console.log("Message:", message);

    console.log("Form Submitted Successfully!");
});