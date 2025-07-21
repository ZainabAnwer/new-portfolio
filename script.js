let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navbar.classlist.remove('active');
}
const typed = new Typed('.multiple-text', {
    strings: ['Software Engineer','Full Stack Developer'],
    typeSpeed: 80,
    backspeed:90,
    backDelay:2200,
    loop:true,
  });
  // Contact Form JS Code
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Form ko reload hone se roke

        // Input fields se data lena
        const fullName = form.querySelector("input[placeholder='Full Name']").value;
        const email = form.querySelector("input[placeholder='Email Address']").value;
        const phone = form.querySelector("input[placeholder='Phone Number']").value;
        const subject = form.querySelector("input[placeholder='Email subject']").value;
        const message = form.querySelector("textarea").value;

        // Console par output
        console.log("Full Name:", fullName);
        console.log("Email Address:", email);
        console.log("Phone Number:", phone);
        console.log("Subject:", subject);
        console.log("Message:", message);

        // Alert or form reset (optional)
        alert("Your message has been submitted!");
        form.reset();
    });
});
