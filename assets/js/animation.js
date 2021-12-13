gsap.registerPlugin(ScrollTrigger);

gsap.to("h1 span", 1, { 'background-position': 0, stagger: 1 });

gsap.fromTo(
    ".logo,.play-btn",
    1.5, { y: -100, opacity: "0" }, { y: 0, opacity: "1" }
);
gsap.fromTo(
    ".progress-bar",
    2, { scale: 0, opacity: "0", stagger: 0.1, transformOrigin: 'center center', }, { scale: 1, opacity: "1", stagger: 0.1 }
);

$(document).ready(function() {
    // CURSOR
    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    // yellow circle
    $("a").on("mouseenter", function() {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a").on("mouseleave", function() {
        cursor.removeClass("active");
        follower.removeClass("active");
    });
});