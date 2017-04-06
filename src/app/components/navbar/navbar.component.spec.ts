import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';

describe('Navbar', () => {
   let comp: NavbarComponent;
   let fixture: ComponentFixture<NavbarComponent>;
   let debugElement: DebugElement;
   let element: HTMLElement;

   beforeEach(() => {
      TestBed.configureTestingModule({
         declarations: [ NavbarComponent ]
      });

      fixture = TestBed.createComponent(NavbarComponent);
      comp = fixture.componentInstance;
   });

   it('should have 1 link called overview', () => {
      let navbar = fixture.debugElement.query(By.css('.navbar'));
      let menu = navbar.nativeElement.children[1];
      let link = menu.children[0].innerText;
      let count = menu.children.length;
      expect(count).toBe(1);
      expect(link).toBe('OVERVIEW');
   });

});
