AOS.init();

$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = (100 * pixels) / pageHeight;

  $("div.progress").css("height", progress + "%");
});

// Click function for play-btn the Modal

$(".close").on("click", function () {
  $("body").removeClass("hidden");
  $("section").removeClass("popup");
});

$(".play-btn").on("click", function () {
  $("body").toggleClass("hidden");
  $(".mask").addClass("active");
  $("section").addClass("popup");
});

// Function for close the Modal

function closeModal() {
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close, .mask").on("click", function () {
  closeModal();
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});


// function for navbar

var selector = '.navbar li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});