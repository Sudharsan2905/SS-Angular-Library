import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsThemeComponent } from './ss-theme.component';

describe('SsThemeComponent', () => {
  let component: SsThemeComponent;
  let fixture: ComponentFixture<SsThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsThemeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SsThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
