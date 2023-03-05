const tl = gsap.timeline({defaults:{ease:"power1.out"}});

tl.fromTo('.container', {opacity: 0}, {opacity:1, duration: 2});
tl.to('.container', {y: "-500%", duration:1},"-=2.5");
tl.to('.statement', {y: "0%", duration:1},"-=1");