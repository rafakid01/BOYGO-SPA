import { Component, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'site';

  isShow!: boolean;
  topPosToStartShowing = 150;

  @HostListener('window:scroll')
  checkScroll() {
    const myNav: any = document.getElementById("scrolling")
    const wppButton: any = document.getElementById("icon-wpp")
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
      myNav.style.backgroundColor = 'var(--grey-dark-color)'
      myNav.style.transition = "1.5s all ease 0s"
      wppButton.style.opacity = "1"
    } else {
      this.isShow = false;
      myNav.style.backgroundColor = 'transparent'
      myNav.style.transition = "1.5s all ease 0s"
      wppButton.style.opacity = "0"
    }

    const myChoise1 = document.getElementById('choise-btn1')
    function choisingInc() {
      if (window.matchMedia("(orientation:portrait").matches) {
        window.scroll({
          top: 610,
          left: 0,
          behavior: "smooth"
        })
      } if (window.matchMedia("(orientation:landscape").matches) {
        window.scroll({
          top: 1410,
          left: 0,
          behavior: "smooth"
        })
      }
    }
    myChoise1?.addEventListener("click", choisingInc)

    const myChoise2 = document.getElementById('choise-btn2')
    function choisingDel() {
      if (window.matchMedia("(orientation:portrait").matches) {
        window.scroll({
          top: 610,
          left: 0,
          behavior: "smooth"
        })
      } if (window.matchMedia("(orientation:landscape").matches) {
        window.scroll({
          top: 1410,
          left: 0,
          behavior: "smooth"
        })
      }
    }
    myChoise2?.addEventListener("click", choisingDel)
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  ngOnInit(): void {

    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides: any = document.getElementsByClassName("slide-fade");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }

      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000);
    }

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = -500;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

  }
}