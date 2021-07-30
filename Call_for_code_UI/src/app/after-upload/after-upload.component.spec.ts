import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterUploadComponent } from './after-upload.component';

describe('AfterUploadComponent', () => {
  let component: AfterUploadComponent;
  let fixture: ComponentFixture<AfterUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
