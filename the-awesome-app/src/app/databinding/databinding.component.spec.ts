import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DataBindingComponent} from './databinding.component';
import { FormsModule } from '@angular/forms';

fdescribe("Databinding", () => {

    let fixture: ComponentFixture<DataBindingComponent>;
    let instance: DataBindingComponent;
    let nativeElement: any;

    beforeEach(() => {

        TestBed.configureTestingModule({

            declarations: [DataBindingComponent],
            imports: [FormsModule]

        }).compileComponents()

         //fixture => component + template
         fixture = TestBed.createComponent(DataBindingComponent);
         // component instance
         instance = fixture.componentInstance;
         // template
         nativeElement = fixture.nativeElement;
    })

    it("Test 1", () => {

       
        expect(fixture).toBeTruthy();
        expect(instance).toBeTruthy();
        expect(nativeElement).toBeTruthy();
    });
    it("Test 2", () => {

        expect(instance.count).toBe(10);
        instance.inc({});
        expect(instance.count).toBe(11);

    })
    it("Test 3", () => {

        fixture.detectChanges();
        let countText = nativeElement.querySelector("#ctr").textContent;
        expect(countText).toContain("Count : 10");

        const incBtn = nativeElement.querySelector("#incBtn");
        incBtn.dispatchEvent(new Event('click'));

        fixture.detectChanges();
        countText = nativeElement.querySelector("#ctr").textContent;
        expect(countText).toContain("Count : 11");

    })
})