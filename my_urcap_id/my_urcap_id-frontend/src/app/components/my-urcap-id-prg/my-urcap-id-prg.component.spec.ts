import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MyUrcapIdPrgComponent} from "./my-urcap-id-prg.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('MyUrcapIdPrgComponent', () => {
  let fixture: ComponentFixture<MyUrcapIdPrgComponent>;
  let component: MyUrcapIdPrgComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyUrcapIdPrgComponent],
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

    fixture = TestBed.createComponent(MyUrcapIdPrgComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
