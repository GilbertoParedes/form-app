import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListUserPage } from './list-user.page';

describe('ListUserPage', () => {
  let component: ListUserPage;
  let fixture: ComponentFixture<ListUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
