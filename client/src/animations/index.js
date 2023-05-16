import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.
const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
    tl.to("body", {
        duration: 0.1,
        css: { overflowY: "hidden" },
        ease: "power3.inOut",
    })
        .to(".text-container", {
            duration: 0,
            opacity: 1,
            ease: "Power3.easeOut",
        })
        .from(".text-container span", {
            duration: 1.5,
            delay: 1,
            y: 70,
            skewY: 10,
            stagger: 0.5,
            ease: "Power3.easeOut",
        })
        .to(".text-container span", {
            duration: 1,
            y: 70,
            skewY: -20,
            stagger: 0.2,
            ease: "Power3.easeOut",
        })
        .to("body", {
            duration: 0.1,
            css: { overflowY: "scroll" },
            ease: "power3.inOut",
        })
        .to(
            ".preloader",
            {
                duration: 1.5,
                height: "0vh",
                ease: "Power3.easeOut",
                onComplete: mobileLanding(),
            },
            "-=2"
        )
        .to(".preloader", {
            duration: 0,
            css: { display: "none" },
        });
};

// recurrent animations
export const fadeUp = (el, delay = 0) => {
    tl.from(el, {
        y: 150,
        duration: 1,
        delay,
        opacity: 0,
        ease: "power3.Out",
    });
};

export const mobileLanding = () => {
    window.innerWidth < 763 &&
        tl.from(".landing__main2", {
            duration: 1,
            delay: 0,
            opacity: 0,
            y: 80,
            ease: "expo.easeOut",
        });
};
export const boxHover = (e) => {
    const tl = gsap.timeline();
    window.innerWidth >= 986 &&
        tl
            .to(e.target.querySelector(".link"), {
                duration: 0,
                opacity: 1,
            })
            .from(e.target.querySelectorAll(".box-anim"), {
                duration: 0.3,
                opacity: 0,
                y: 30,
                stagger: 0.1,
                ease: "Power3.easeOut",
            });
};

export const boxExit = (e) => {
    window.innerWidth >= 986 &&
        gsap.to(e.target.querySelector(".link"), {
            duration: 0,
            opacity: 0,
        });
};

export const fadeIn = (el) => {
    gsap.to(el, {
        duration: 2,
        opacity: 1,
        y: -60,
        ease: "power4.out",
    });
};

export const fadeOut = (el) => {
    gsap.to(el, {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "power4.out",
    });
};
