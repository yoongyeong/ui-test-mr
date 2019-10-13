// ACCORDION

$(document).ready(function() {
  $(".accordion-container").slideUp();
  $(".accordion-header").click(function() {
    $(this)
      .next(".accordion-container")
      .slideToggle(200)
      .end()
      .find(".icon")
      .toggleClass("rotate")
      .end()
      .toggleClass("pad-bot-8", 100, "linear")
      .toggleClass("rad-bot-5")
      .end();
  });

  var overlayCount = 1;

  $("#overlay").hide();
  $("#sidebar__extension").hide();
  // $(".sidebar-logo").hide();

  $("#nav-btn").click(function() {
    $("#sidebar__extension")
      .toggle("drop", { direction: "left" }, 200)
      .end();

    // $(".sidebar-logo").toggle();

    if (overlayCount % 2 !== 0) {
      document.getElementById("overlay").style.display = "block";
      $(this).animate({ "margin-left": "20rem" }, 200);
    } else {
      document.getElementById("overlay").style.display = "none";
      $(this).animate({ "margin-left": "0rem" }, 200);
    }
    overlayCount++;
  });

  $("#overlay").click(function() {
    $("#sidebar__extension").hide("drop", { direction: "left" }, 200);
    $("#nav-btn")
      .animate({ "margin-left": "0rem" }, 200, "easeInOutCubic")
      .removeClass("is-active")
      .end();

    document.getElementById("overlay").style.display = "none";
    overlayCount = 1;
  });
});

// TABS

function openWarning(evt, warningName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active-tab", "");
  }
  document.getElementById(warningName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// HAMBURGER MENU SIDEBAR

var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
    hamburger.addEventListener(
      "click",
      function() {
        $(this).toggleClass("is-active", "easeInOutCubic");
      },
      false
    );
  });
}
