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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF2ZXBheW1lbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhcjQtcmF2ZXBheW1lbnQvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvcmF2ZXBheW1lbnQvcmF2ZXBheW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBOEI3RTtJQXNCSTtRQWxCVSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUN0QyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWlCdEIsQ0FBQztJQUNoQix1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLDBDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSztZQUMxQixPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQWpCLENBQWlCO1lBQ2hDLFFBQVEsRUFBRSxVQUFDLFFBQWdCLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBNUIsQ0FBNEI7WUFDNUQsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSztZQUNoQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJO1lBQzdCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFO1lBQ2pELGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxFQUFFO1lBQy9DLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUU7WUFDckMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixJQUFJLEVBQUU7WUFDakQsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtZQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1NBQ3hCLENBQUM7SUFDTixDQUFDO0lBOUNRO1FBQVIsS0FBSyxFQUFFO3NEQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7dURBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTsyREFBbUI7SUFDakI7UUFBVCxNQUFNLEVBQUU7MERBQXVDO0lBQ3RDO1FBQVQsTUFBTSxFQUFFO3VEQUE0QjtJQUM1QjtRQUFSLEtBQUssRUFBRTtxREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7d0RBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7MkRBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFO3NEQUFXO0lBQ1Y7UUFBUixLQUFLLEVBQUU7MERBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3lEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtvRUFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7bUVBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzhEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtvRUFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7NkRBQXFCO0lBakJwQixvQkFBb0I7UUFOaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixrTEFBMkM7O1NBRTVDLENBQUM7T0FFVyxvQkFBb0IsQ0FnRGhDO0lBQUQsMkJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQWhEWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgSVJhdmVPcHRpb25zIHtcbiAgICBQQkZQdWJLZXk6IHN0cmluZztcbiAgICB0eHJlZjogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGN1cnJlbmN5OiBzdHJpbmc7XG4gICAgY291bnRyeTogc3RyaW5nO1xuICAgIGN1c3RvbWVyX2VtYWlsOiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfZmlyc3RuYW1lOiBzdHJpbmc7XG4gICAgY3VzdG9tZXJfbGFzdG5hbWU6IHN0cmluZztcbiAgICBjdXN0b21fdGl0bGU6IHN0cmluZztcbiAgICBjdXN0b21fZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjdXN0b21fbG9nbzogc3RyaW5nO1xuICAgIG1ldGEgPzogYW55O1xuICAgIGNhbGxiYWNrOiAocmVzcG9uc2U6IG9iamVjdCkgPT4gdm9pZDtcbiAgICBvbmNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICAgIGdldHBhaWRTZXR1cDogKG9wdGlvbnM6IElSYXZlT3B0aW9ucykgPT4gdm9pZDtcbn1cbmRlY2xhcmUgbGV0IHdpbmRvdzogTXlXaW5kb3dcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmF2ZS1wYXktYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdmVwYXltZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmF2ZXBheW1lbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmF2ZXBheW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xuICAgIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgIEBPdXRwdXQoKSBjYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXI8b2JqZWN0PigpO1xuICAgIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBrZXk6IHN0cmluZztcbiAgICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFtb3VudDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIHJlZmVyZW5jZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1ldGE6IGFueTtcbiAgICBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21lcl9maXJzdG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjdXN0b21lcl9sYXN0bmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV90aXRsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV9kZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGN1c3RvbV9sb2dvOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJhdmVPcHRpb25zOiBJUmF2ZU9wdGlvbnM7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge31cbiAgICBuZ09uSW5pdCgpIHt9XG5cbiAgICBtYWRlUGF5bWVudCgpIHtcbiAgICAgICAgdGhpcy5wcmVwUmF2ZU9wdGlvbnMoKTtcbiAgICAgICAgd2luZG93LmdldHBhaWRTZXR1cCh0aGlzLnJhdmVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBwcmVwUmF2ZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmF2ZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBQQkZQdWJLZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgdHhyZWY6IHRoaXMucmVmZXJlbmNlLFxuICAgICAgICAgICAgYW1vdW50OiB0aGlzLmFtb3VudCxcbiAgICAgICAgICAgIGN1c3RvbWVyX2VtYWlsOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgb25jbG9zZTogKCkgPT4gdGhpcy5jbG9zZS5lbWl0KCksXG4gICAgICAgICAgICBjYWxsYmFjazogKHJlc3BvbnNlOiBvYmplY3QpID0+IHRoaXMuY2FsbGJhY2suZW1pdChyZXNwb25zZSksXG4gICAgICAgICAgICBjdXJyZW5jeTogdGhpcy5jdXJyZW5jeSB8fCAnTkdOJyxcbiAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuY291bnRyeSB8fCAnTkcnLFxuICAgICAgICAgICAgY3VzdG9tZXJfZmlyc3RuYW1lOiB0aGlzLmN1c3RvbWVyX2ZpcnN0bmFtZSB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbWVyX2xhc3RuYW1lOiB0aGlzLmN1c3RvbWVyX2xhc3RuYW1lIHx8ICcnLFxuICAgICAgICAgICAgY3VzdG9tX3RpdGxlOiB0aGlzLmN1c3RvbV90aXRsZSB8fCAnJyxcbiAgICAgICAgICAgIGN1c3RvbV9kZXNjcmlwdGlvbjogdGhpcy5jdXN0b21fZGVzY3JpcHRpb24gfHwgJycsXG4gICAgICAgICAgICBjdXN0b21fbG9nbzogdGhpcy5jdXN0b21fbG9nbyB8fCAnJyxcbiAgICAgICAgICAgIG1ldGE6IHRoaXMubWV0YSB8fCB7fVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==