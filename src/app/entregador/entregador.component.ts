import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entregador',
  templateUrl: './entregador.component.html',
  styleUrls: ['./entregador.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EntregadorComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -250;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    var acc:any = document.getElementsByClassName("question-item");
    var i:any;
    console.log(acc)

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click",  function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        acc.classList.toggle("action");

        /* Toggle between hiding and showing the active panel */
        var panel = acc.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  }

}
