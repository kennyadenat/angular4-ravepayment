import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var RavepaymentComponent = /** @class */ (function () {
    function RavepaymentComponent() {
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    RavepaymentComponent.prototype.ngOnInit = function () { };
    RavepaymentComponent.prototype.madePayment = function () {
        this.prepRaveOptions();
        window.getpaidSetup(this.raveOptions);
    };
    RavepaymentComponent.prototype.prepRaveOptions = function () {
        var _this = this;
        this.raveOptions = {
            PBFPubKey: this.key,
            txref: this.reference,
            amount: this.amount,
            customer_email: this.email,
            onclose: function () { return _this.close.emit(); },
            callback: function (response) { return _this.callback.emit(response); },
            currency: this.currency || 'NGN',
            country: this.country || 'NG',
            customer_firstname: this.customer_firstname || '',
            customer_lastname: this.customer_lastname || '',
            custom_title: this.custom_title || '',
            custom_description: this.custom_description || '',
            custom_logo: this.custom_logo || '',
            meta: this.meta || {}
        };
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
    return RavepaymentComponent;
}());
export { RavepaymentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZXBheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1yYXZlcGF5bWVudC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yYXZlcGF5bWVudC9yYXZlcGF5bWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUE4QjdFO0lBc0JJO1FBbEJVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBaUJ0QixDQUFDO0lBQ2hCLHVDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsMENBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsOENBQWUsR0FBZjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQzFCLE9BQU8sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBakIsQ0FBaUI7WUFDaEMsUUFBUSxFQUFFLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUE1QixDQUE0QjtZQUM1RCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLO1lBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUk7WUFDN0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLEVBQUU7WUFDakQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUFJLEVBQUU7WUFDL0MsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRTtZQUNyQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCLElBQUksRUFBRTtZQUNqRCxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ25DLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7U0FDeEIsQ0FBQztJQUNOLENBQUM7SUE5Q1E7UUFBUixLQUFLLEVBQUU7c0RBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTt1REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFOzJEQUFtQjtJQUNqQjtRQUFULE1BQU0sRUFBRTswREFBdUM7SUFDdEM7UUFBVCxNQUFNLEVBQUU7dURBQTRCO0lBQzVCO1FBQVIsS0FBSyxFQUFFO3FEQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7dURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTt3REFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTsyREFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7c0RBQVc7SUFDVjtRQUFSLEtBQUssRUFBRTswREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7eURBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO29FQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTttRUFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7OERBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFO29FQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs2REFBcUI7SUFqQnBCLG9CQUFvQjtRQU5oQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGtMQUEyQzs7U0FFNUMsQ0FBQztPQUVXLG9CQUFvQixDQWdEaEM7SUFBRCwyQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBJUmF2ZU9wdGlvbnMge1xuICAgIFBCRlB1YktleTogc3RyaW5nO1xuICAgIHR4cmVmOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfZW1haWw6IHN0cmluZztcbiAgICBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgICBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICAgIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICAgIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG4gICAgbWV0YSA/OiBhbnk7XG4gICAgY2FsbGJhY2s6IChyZXNwb25zZTogb2JqZWN0KSA9PiB2b2lkO1xuICAgIG9uY2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gICAgZ2V0cGFpZFNldHVwOiAob3B0aW9uczogSVJhdmVPcHRpb25zKSA9PiB2b2lkO1xufVxuZGVjbGFyZSBsZXQgd2luZG93OiBNeVdpbmRvd1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyYXZlLXBheS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmF2ZXBheW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yYXZlcGF5bWVudC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBSYXZlcGF5bWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHN0eWxlOiBvYmplY3Q7XG4gICAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgQE91dHB1dCgpIGNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcjxvYmplY3Q+KCk7XG4gICAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGVtYWlsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYW1vdW50OiBudW1iZXI7XG4gICAgQElucHV0KCkgcmVmZXJlbmNlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWV0YTogYW55O1xuICAgIEBJbnB1dCgpIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbWVyX2ZpcnN0bmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbWVyX2xhc3RuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX3RpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX2Rlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgY3VzdG9tX2xvZ286IHN0cmluZztcblxuICAgIHByaXZhdGUgcmF2ZU9wdGlvbnM6IElSYXZlT3B0aW9ucztcblxuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG1hZGVQYXltZW50KCkge1xuICAgICAgICB0aGlzLnByZXBSYXZlT3B0aW9ucygpO1xuICAgICAgICB3aW5kb3cuZ2V0cGFpZFNldHVwKHRoaXMucmF2ZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIHByZXBSYXZlT3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yYXZlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIFBCRlB1YktleTogdGhpcy5rZXksXG4gICAgICAgICAgICB0eHJlZjogdGhpcy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBhbW91bnQ6IHRoaXMuYW1vdW50LFxuICAgICAgICAgICAgY3VzdG9tZXJfZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICBvbmNsb3NlOiAoKSA9PiB0aGlzLmNsb3NlLmVtaXQoKSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdGhpcy5jYWxsYmFjay5lbWl0KHJlc3BvbnNlKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5IHx8ICdOR04nLFxuICAgICAgICAgICAgY291bnRyeTogdGhpcy5jb3VudHJ5IHx8ICdORycsXG4gICAgICAgICAgICBjdXN0b21lcl9maXJzdG5hbWU6IHRoaXMuY3VzdG9tZXJfZmlyc3RuYW1lIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tZXJfbGFzdG5hbWU6IHRoaXMuY3VzdG9tZXJfbGFzdG5hbWUgfHwgJycsXG4gICAgICAgICAgICBjdXN0b21fdGl0bGU6IHRoaXMuY3VzdG9tX3RpdGxlIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tX2Rlc2NyaXB0aW9uOiB0aGlzLmN1c3RvbV9kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbV9sb2dvOiB0aGlzLmN1c3RvbV9sb2dvIHx8ICcnLFxuICAgICAgICAgICAgbWV0YTogdGhpcy5tZXRhIHx8IHt9XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19