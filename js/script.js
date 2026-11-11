
// Automatically Display Current Year

document.querySelectorAll(".year").forEach(function(element) {
    element.textContent = new Date().getFullYear();
});


// Contact Form Validation and Message

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("formMessage").innerHTML =
            '<p style="color:green; font-weight:bold;">Thank you! Your message has been submitted successfully.</p>';

        contactForm.reset();

    });

}
