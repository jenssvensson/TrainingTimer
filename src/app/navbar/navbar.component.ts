import { MatIconRegistry } from '@angular/material';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
        .addSvgIcon('github-circle-white-transparent',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/github-circle-white-transparent.svg'));
  }

  ngOnInit() {
  }

}
