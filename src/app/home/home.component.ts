import { Component, OnInit, AfterViewInit } from '@angular/core';
import  Swiper, { Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper!:Swiper; // IMPORTANTE EL ! para que lo inicialice sin NULL or UNDEFINED

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination]);
    this.mySwiper = new Swiper(".swiper-container", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    }
    });

  }


}
