function init() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

init();

var load = gsap.timeline()

load.from('.loader span', {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

load.to('.loader span', {
    opacity: 0,
    x: -20,
    duration: 1,
    stagger: 0.1
})

load.to('.loader', {
    opacity: 0
})
load.to('.loader', {
    display: 'none'
})

gsap.from('.nav-logo', {
    y: 10,
    duration: 1,
    delay: 2.5,
    opacity: 0,
    ease: 'power4.inOut',
});

gsap.from('.nav-talk', {
    y: 10,
    duration: 1,
    delay: 2.5,
    opacity: 0,
    ease: 'power4.inOut',
});

gsap.from('.page1 #hero1 h1', {
    y: 160,
    // rotate: 30,
    duration: .5
},"anim")

gsap.from('.page1 #hero2 h1', {
    y: 150,
    // rotate: 30,
    delay: .5,
    duration: .5
},"anim")

gsap.from('.page1 #hero3 h1', {
    y: 170,
    // rotate: 30,
    delay: 1,
    duration: .5
},"anim")

gsap.from('.hero-bottom .ofh p', {
    y: 100,
    duration: 1,
    delay: 1.8,
    stagger: .5,
    ease: 'power4.inOut',
},"anim");

// Page 2 //
var tl2 = gsap.timeline({
    
    scrollTrigger: {
        trigger: '.page1 #hero1',
        scroller: '.main',
        markers: false,
        start: 'top -20%',
        end: 'top -30%',
        scrub: 3
    }
})

tl2.to('.main', {
    backgroundColor: '#fff',
    color: '#000'
})

function aboutLeft() {
    gsap.from('.about-left .ofh p', {
        y: 120,
        stagger: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.page2',
            scroller: '.main',
            start: 'top 60%',
            end: 'top 50%',
            markers: false,
            scrub: 2
        }
    })
}

aboutLeft()

function aboutRight() {
    gsap.from('.about-right .ofh p', {
        y: 120,
        stagger: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.page2',
            scroller: '.main',
            start: 'top 60%',
            end: 'top 50%',
            markers: false,
            scrub: 2
        }
    })
}

aboutRight()

function page2Animation() {
    gsap.from('.about-details .ofh p', {
        y: 120,
        stagger: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.page2',
            scroller: '.main',
            start: 'top 50%',
            end: 'top 20%',
            markers: false,
            scrub: 2
        }
    })
}

page2Animation()

// Page-3 //
function workTitleAnimation() {
    gsap.from('.work-title .ofh h2', {
        y: 120,
        stagger: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.page3',
            scroller: '.main',
            start: 'top 60%',
            end: 'top 50%',
            markers: false,
            scrub: 2
        }
    })
}

workTitleAnimation()

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view')
                entry.target.classList.remove('not-in-view')
            } else {
                entry.target.classList.remove('in-view')
                entry.target.classList.add('not-in-view')
            }
        })
    },
    {
        rootMargin: '0px',
        threshold: [0, 0.1, 1],
    },
)

const tags = document.querySelectorAll('.project-img, .project-details')

tags.forEach((tag) => {
    observer.observe(tag)
})

function marqueeAnimation() {
    gsap.from('.marquee-1 .marquee-text', {
        xPercent: -20,
        scrollTrigger: {
            trigger: '.marquee-wrapp',
            scroller: '.main',
            start: 'top bottom',
            markers: false,
            scrub: 1.9
        }
    })
}

marqueeAnimation()

function marquee2Animation() {
    gsap.from('.marquee-2 .marquee-text', {
        xPercent: 20,
        scrollTrigger: {
            trigger: '.marquee-wrapp',
            scroller: '.main',
            start: 'top bottom',
            markers: false,
            scrub: 1.9
        }
    })
}

marquee2Animation()

// Page4 //
var tl3 = gsap.timeline({
    
    scrollTrigger: {
        trigger: '.page1',
        scroller: '.main',
        markers: false,
        start: 'top -430%',
        end: 'top -440%',
        scrub: 3
    }
})

tl3.to('.main', {
    backgroundColor: '#191919',
    color: '#ffffff'
})

function serviceTitleAnimation() {
    gsap.from('.service-title .ofh p', {
        y: 120,
        stagger: 0.5,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.page4',
            scroller: '.main',
            start: 'top 80%',
            end: 'top 20%',
            markers: false,
            scrub: 2
        }
    })
}

serviceTitleAnimation();

document.querySelectorAll('.elem').forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener('mouseleave', function (dets) {
        gsap.to(elem.querySelector('img'), {
            opacity: 0,
            ease: 'power3',
            duration: 0.5,
        });
    });

    elem.addEventListener('mousemove', function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector('img'), {
            opacity: 1,
            ease: 'power3',
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        })
    })
})

// Page-5 //
var tl5 = gsap.timeline({
    
    scrollTrigger: {
        trigger: '.page1',
        scroller: '.main',
        markers: false,
        start: 'top -565%',
        end: 'top -590%',
        scrub: 3
    }
})

tl5.from('.page5 .contact .footer-bottom span', {
    y: -400,
    stagger: 0.3,
    ease: 'sine.out'
})