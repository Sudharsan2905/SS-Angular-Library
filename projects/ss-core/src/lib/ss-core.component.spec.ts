import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsCoreComponent } from './ss-core.component';

describe('SsCoreComponent', () => {
  let component: SsCoreComponent;
  let fixture: ComponentFixture<SsCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
