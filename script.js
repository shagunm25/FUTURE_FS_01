// Typing Animation

const typing = document.getElementById("typing");

const roles = [
    "Software Engineering Enthusiast",
    "DSA Learner",
    "OOP Explorer",
    "Advanced Python Learner",
    "Web Application Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 120
    );
}

typeEffect();


// Mobile Menu

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close Menu On Click

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// Navbar Background On Scroll

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop
        ) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// Active Navigation Link

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


// Scroll Reveal Animation

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    observer.observe(element);

});


// Back To Top Button

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.style.display =
            "block";

    } else {

        backToTop.style.display =
            "none";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// Background Particles

const particles =
    document.getElementById("particles");

for (let i = 0; i < 20; i++) {

    const particle =
        document.createElement("span");

    particle.style.position =
        "absolute";

    particle.style.width =
        Math.random() * 5 + 3 + "px";

    particle.style.height =
        particle.style.width;

    particle.style.background =
        "rgba(249,115,22,.35)";

    particle.style.borderRadius =
        "50%";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animation =
        `floatParticle ${
            Math.random() * 8 + 5
        }s linear infinite`;

    particles.appendChild(particle);

}


// Particle Animation

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes floatParticle {

    0%{
        transform:translateY(0);
        opacity:0;
    }

    20%{
        opacity:1;
    }

    100%{
        transform:translateY(-120px);
        opacity:0;
    }

}

`;

document.head.appendChild(style);


// Console Log

console.log(
    "Portfolio Loaded Successfully"
);