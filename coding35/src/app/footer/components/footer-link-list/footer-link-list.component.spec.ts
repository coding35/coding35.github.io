import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLinkListComponent } from './footer-link-list.component';

describe('FooterLinkListComponent', () => {
  let component: FooterLinkListComponent;
  let fixture: ComponentFixture<FooterLinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLinkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
