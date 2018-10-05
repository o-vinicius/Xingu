$(function() {
    
    var alturaheader = $('.header-main').outerHeight();
    $('.header-spacer').css("height", alturaheader);
    
    $(window).enllax();
    
    $('.carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
    $('.gallery').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        mouseDrag:false,
        items:1
    });
    
    $('.navbar, .mobile-toggle, .menu-main > ul > li.sub-menu').addClass('menu-closed');
    $('.menu-main > ul > li.sub-menu > ul').slideUp();
    
    $('.btn-mobile-toggle').click(function() {
        $('.mobile-toggle').toggleClass('menu-closed');
        $('.navbar').toggleClass('menu-closed');
    });
    
    $('.menu-main > ul > li.sub-menu > i').on('touchstart', function(event){
        if ($(this).parent().hasClass('menu-closed')) {
            $('.menu-main > ul > li.sub-menu > i').parent().addClass('menu-closed');
            $('.menu-main > ul > li.sub-menu > i').parent().find('ul').slideUp();
            $(this).parent().removeClass('menu-closed');
            $(this).parent().find('ul').slideDown();
        } else if ($(this).parent().not('menu-closed')) {
            $(this).parent().addClass('menu-closed');
            $(this).parent().find('ul').slideUp();
        }
    });
    
    
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 0; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
    
    
});