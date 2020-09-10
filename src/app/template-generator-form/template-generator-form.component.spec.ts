import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGeneratorFormComponent } from './template-generator-form.component';

describe('TemplateGeneratorFormComponent', () => {
  let component: TemplateGeneratorFormComponent;
  let fixture: ComponentFixture<TemplateGeneratorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateGeneratorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
