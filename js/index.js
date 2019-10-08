// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active-accordion");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


// ACCORDION
$(document).ready(function(){
  $(".accordion-container").slideUp();
  $(".accordion-header").click(function(){
    $(this).next(".accordion-container").slideToggle(200);
    $(this).find(".icon").toggleClass("rotate");
    $(this)
  })
});

// $(document).ready(function($){
//   var panels = $('.accordion-content').hide();
//   panels.first().show();
  
//   $('.accordion-header').click(function() {
//     var $this = $(this);
//     panels.slideUp();
//     $this.parent().next().slideDown();
    
//     return false;
//   });
// });


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