import {ComponentFixture, TestBed} from '@angular/core/testing';
import { MyUrcapIdAppComponent} from "./my-urcap-id-app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('MyUrcapIdAppComponent', () => {
  let fixture: ComponentFixture<MyUrcapIdAppComponent>;
  let component: MyUrcapIdAppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyUrcapIdAppComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(MyUrcapIdAppComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
