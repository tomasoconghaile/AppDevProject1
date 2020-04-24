import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmericaPage } from './america.page';

describe('AmericaPage', () => {
  let component: AmericaPage;
  let fixture: ComponentFixture<AmericaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
