/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   MEMBERSHIP MODAL
========================= */

const planButtons = document.querySelectorAll(".price-btn");

const modal = document.getElementById("planModal");
const closeModal = document.getElementById("closeModal");
const modalOk = document.getElementById("modalOk");
const selectedPlan = document.getElementById("selectedPlan");


planButtons.forEach(button => {

    button.addEventListener("click", () => {

        const planName = button.getAttribute("data-plan");

        selectedPlan.textContent = planName;

        modal.classList.add("active");

    });

});


function hideModal() {
    modal.classList.remove("active");
}


closeModal.addEventListener("click", hideModal);

modalOk.addEventListener("click", hideModal);


/* Close modal when clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        hideModal();
    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {

        formMessage.textContent = "Please enter your name.";

        return;
    }

    formMessage.textContent =
        `Thanks ${name}! Your enquiry has been received in this demo.`;

    contactForm.reset();

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".program-card, .trainer-card, .price-card, .feature, .about-grid"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});
