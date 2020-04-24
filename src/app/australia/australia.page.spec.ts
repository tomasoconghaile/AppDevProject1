import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AustraliaPage } from './australia.page';

describe('AustraliaPage', () => {
  let component: AustraliaPage;
  let fixture: ComponentFixture<AustraliaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AustraliaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
