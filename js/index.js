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
