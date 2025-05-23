import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNavMenuComponent } from './mini-nav-menu.component';

describe('MiniNavMenuComponent', () => {
  let component: MiniNavMenuComponent;
  let fixture: ComponentFixture<MiniNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniNavMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
