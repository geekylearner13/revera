var festName = document.querySelector(".fest-name");
var festNameText = festName.textContent;
var splittedText = festNameText.split("");
console.log(festNameText);
var clutter = "";
splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
});
festName.innerHTML = clutter;
var tl = gsap.timeline();
tl.from("span", {
    y: 60,
    duration: 0.6,
    delay: 0.6,
    opacity: 0,
    scale: 1.8,
    stagger: 0.3,
    scrub:2
});
tl.from(".col-lg-6 p",{
    opacity:0
})

// var tl = gsap.timeline();
// tl.from(".fest-name",{
//     y:50,
//     opacity:0,
//     stagger:0.3,
//     duration:0.7
// })
// tl.from(".col-lg-6 p",{
//     opacity:0,
//     duration:0.5,
// })
gsap.from(".img", {
    y: 75,
    scale: 1.3,
    opacity: 0,
});
function marque() {
    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            gsap.to("#marque", {
                transform: "translateX(-205%)",
                repeat: -1,
                duration: 5,
                ease: "none",
            });
            gsap.to("#marque img", {
                rotate: 180,
            });
        } else {
            gsap.to("#marque", {
                transform: "translateX(00%)",
                repeat: -1,
                duration: 5,
                ease: "none",
            });
            gsap.to("#marque img", {
                rotate: 0,
            });
        }
    });
}
marque();
