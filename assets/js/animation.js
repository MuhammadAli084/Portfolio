gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-title-wrap p span", 2, { "background-position": 0, stagger: 1 });

gsap.to(".scroll-btn", 1, {
  y: "0%",
});

gsap.fromTo(
  ".logo,.play-btn",
  1.5,
  { y: -100, opacity: "0" },
  { y: 0, opacity: "1" }
);
gsap.fromTo(
  ".progress-bar",
  2,
  { scale: 0, opacity: "0", stagger: 0.1, transformOrigin: "center center" },
  { scale: 1, opacity: "1", stagger: 0.1 }
);
$(document).ready(function () {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-wrap",
      start: "-25% 50%",
    //   markers: true,
      scrub: 2,
      toggleActions: "restart pause resume reverse",
      end: "+=430%",
    },
});
tl.to(
    ".uncover_slice",
    1,
    {
      height: 0,
      ease: "power4.InOut",
      stagger: { amount: 2.5 },
    },
    "start"
  ).to(
    ".project-image",
    1.2,
    {
      ease: "power4.InOut",
    },
    "start"
  );
// tl.to(".project-title", 1, { x:"-100%", opacity: 1  , stagger: { amount: 2.5 }});
  // CURSOR
  var cursor = $(".cursor"),
    follower = $(".cursor-follower");

  var posX = 0,
    posY = 0;

  var mouseX = 0,
    mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 5;
      posY += (mouseY - posY) / 5;

      TweenMax.set(follower, {
        css: {
          left: posX - 12,
          top: posY - 12,
        },
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    },
  });

  $(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  // yellow circle
  $("a").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
  });
  $("a").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
  });
});

// slice animation start

const slices = [...document.querySelectorAll(".uncover_slice")];
const playBtn = document.querySelector("#play");
const reverseBtn = document.querySelector("#reverse");
const tl = new gsap.timeline();

tl.addLabel("start");

// slice animation end.
