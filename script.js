document.querySelectorAll(".rightNav h1").forEach((element) => {
    element.addEventListener("mouseenter", function () {
        gsap.to(this, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
        });
        this.classList.add("underline");
    });
    element.addEventListener("mouseleave", function () {
        gsap.to(this, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
        this.classList.remove("underline");
    });
});

document.querySelectorAll(".up h1").forEach((element) => {
    let text = element.textContent.trim();
    let flag = "";
    text.split("").forEach((char) => {
        if (char === " ") {
            flag += `<span>&nbsp;</span>`;
        } else {
            flag += `<span>${char}</span>`;
        }
    });
    element.innerHTML = flag;
});

let tl = gsap.timeline();
tl.to(".leftNav svg", {
    rotate: 360,
    opacity: 1,
    delay: 0.2,
    duration: 0.7,
    ease: "power3.inOut",
});
tl.from(".nav h1", {
    y: -100,
    opacity: 0,
    duration: 0.7,
    stagger: 0.1,
    ease: "power3.inOut",
});
tl.from(".up h1 span", {
    x: -100,
    opacity: 0,
    duration: 0.1,
    stagger: 0.03,
    ease: "power3.inOut",
});
tl.from([".down", ".right"], {
    x: function (i) {
        return i === 0 ? -100 : 100;
    },
    y: 25,
    delay: 0.2,
    opacity: 0,
    duration: 0.5,
});
tl.from(".page1Foot", {
    y: "12vh",
    duration: 0.3,
    ease: "power3.inOut",
});
tl.to(".move", {
    transform: "translateX(-78.4%)",
    duration: 12,
    repeat: -1,
    ease: "none",
});

const rubber = document.querySelector(".rubber");
let path = "M 0 150 Q 695 150, 1515 150";

rubber.addEventListener("mousemove", function (e) {
    const rect = rubber.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newPath = `M 0 150 Q ${x} ${y}, 1515 150`;
    gsap.to(".rubber svg path", {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power2.out",
    });
});

rubber.addEventListener("mouseleave", function () {
    gsap.to(".rubber svg path", {
        attr: { d: path },
        duration: 1,
        ease: "elastic.out(1.2, 0.1)",
    });
});

gsap.from(".topLeft", {
    // },
    y: 50,
    x:-50,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".topLeft",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
});
gsap.from(".topRight", {
    y: 50,
    x: 50,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".topRight",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
    }
});

gsap.from(".bottomLeft", {
    y: 50,
    x: -50,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".bottomLeft",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
}) 
gsap.from(".bottomRight", {
    y: 50,
    x: 50,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".bottomRight",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 2,
    }
}) 


gsap.to(".page2Body", {
    background: function () {
        const angle = gsap.utils.random(-360, 360);
        return `linear-gradient(${angle}deg, #ff6b6b, #ff3366)`;
    },
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "none",
});
