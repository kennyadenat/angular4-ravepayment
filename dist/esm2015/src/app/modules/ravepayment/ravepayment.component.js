import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
let RavepaymentComponent = class RavepaymentComponent {
    constructor() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    ngOnInit() { }
    madePayment() {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    }
    prepRaveOptions() {
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: () => this.close.emit(),
            callback: (response) => this.callback.emit(response),
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            meta: this.meta || {}
        };
    }
};
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "text", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "style", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "className", void 0);
tslib_1.__decorate([
    Output()
], RavepaymentComponent.prototype, "callback", void 0);
tslib_1.__decorate([
    Output()
], RavepaymentComponent.prototype, "close", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "key", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "email", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "amount", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "reference", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "meta", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "currency", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "country", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_firstname", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_lastname", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_title", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_description", void 0);
tslib_1.__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_logo", void 0);
RavepaymentComponent = tslib_1.__decorate([
    Component({
        selector: 'rave-pay-button',
        template: "<button\n    class=\"paystack-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>",
        styles: ["h1{color:red}"]
    })
], RavepaymentComponent);
export { RavepaymentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZXBheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjQtcmF2ZXBheW1lbnQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvcmF2ZXBheW1lbnQvcmF2ZXBheW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBOEI3RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQXNCN0I7UUFsQlUsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDdEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFpQnRCLENBQUM7SUFDaEIsUUFBUSxLQUFJLENBQUM7SUFFYixXQUFXO1FBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDaEMsUUFBUSxFQUFFLENBQUMsUUFBZ0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzVELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUM3QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUNqRCxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRTtZQUMvQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFO1lBQ3JDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFO1lBQ2pELFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7WUFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtTQUN4QixDQUFDO0lBQ04sQ0FBQztDQUNKLENBQUE7QUEvQ1k7SUFBUixLQUFLLEVBQUU7a0RBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTttREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3VEQUFtQjtBQUNqQjtJQUFULE1BQU0sRUFBRTtzREFBdUM7QUFDdEM7SUFBVCxNQUFNLEVBQUU7bURBQTRCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO2lEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7bURBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTtvREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTt1REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7a0RBQVc7QUFDVjtJQUFSLEtBQUssRUFBRTtzREFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7cURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO2dFQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTsrREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7MERBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO2dFQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTt5REFBcUI7QUFqQnBCLG9CQUFvQjtJQU5oQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGtMQUEyQzs7S0FFNUMsQ0FBQztHQUVXLG9CQUFvQixDQWdEaEM7U0FoRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIElSYXZlT3B0aW9ucyB7XG4gICAgUEJGUHViS2V5OiBzdHJpbmc7XG4gICAgdHhyZWY6IHN0cmluZztcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBjdXJyZW5jeTogc3RyaW5nO1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICBjdXN0b21lcl9lbWFpbDogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gICAgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gICAgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY3VzdG9tX2xvZ286IHN0cmluZztcbiAgICBtZXRhID86IGFueTtcbiAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBvYmplY3QpID0+IHZvaWQ7XG4gICAgb25jbG9zZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgICBnZXRwYWlkU2V0dXA6IChvcHRpb25zOiBJUmF2ZU9wdGlvbnMpID0+IHZvaWQ7XG59XG5kZWNsYXJlIGxldCB3aW5kb3c6IE15V2luZG93XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhdmUtcGF5LWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXZlcGF5bWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JhdmVwYXltZW50LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFJhdmVwYXltZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0ZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcbiAgICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgICBAT3V0cHV0KCkgY2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG9iamVjdD4oKTtcbiAgICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgZW1haWw6IHN0cmluZztcbiAgICBASW5wdXQoKSBhbW91bnQ6IG51bWJlcjtcbiAgICBASW5wdXQoKSByZWZlcmVuY2U6IHN0cmluZztcbiAgICBASW5wdXQoKSBtZXRhOiBhbnk7XG4gICAgQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgICBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21fbG9nbzogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByYXZlT3B0aW9uczogSVJhdmVPcHRpb25zO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgbmdPbkluaXQoKSB7fVxuXG4gICAgbWFkZVBheW1lbnQoKSB7XG4gICAgICAgIHRoaXMucHJlcFJhdmVPcHRpb25zKCk7XG4gICAgICAgIHdpbmRvdy5nZXRwYWlkU2V0dXAodGhpcy5yYXZlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcHJlcFJhdmVPcHRpb25zKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJhdmVPcHRpb25zID0ge1xuICAgICAgICAgICAgUEJGUHViS2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIHR4cmVmOiB0aGlzLnJlZmVyZW5jZSxcbiAgICAgICAgICAgIGFtb3VudDogdGhpcy5hbW91bnQsXG4gICAgICAgICAgICBjdXN0b21lcl9lbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgIG9uY2xvc2U6ICgpID0+IHRoaXMuY2xvc2UuZW1pdCgpLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChyZXNwb25zZTogb2JqZWN0KSA9PiB0aGlzLmNhbGxiYWNrLmVtaXQocmVzcG9uc2UpLFxuICAgICAgICAgICAgY3VycmVuY3k6IHRoaXMuY3VycmVuY3kgfHwgJ05HTicsXG4gICAgICAgICAgICBjb3VudHJ5OiB0aGlzLmNvdW50cnkgfHwgJ05HJyxcbiAgICAgICAgICAgIGN1c3RvbWVyX2ZpcnN0bmFtZTogdGhpcy5jdXN0b21lcl9maXJzdG5hbWUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21lcl9sYXN0bmFtZTogdGhpcy5jdXN0b21lcl9sYXN0bmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbV90aXRsZTogdGhpcy5jdXN0b21fdGl0bGUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21fZGVzY3JpcHRpb246IHRoaXMuY3VzdG9tX2Rlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tX2xvZ286IHRoaXMuY3VzdG9tX2xvZ28gfHwgJycsXG4gICAgICAgICAgICBtZXRhOiB0aGlzLm1ldGEgfHwge31cbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=