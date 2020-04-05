import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
__decorate([
    Input()
], RavepaymentComponent.prototype, "text", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "style", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "className", void 0);
__decorate([
    Output()
], RavepaymentComponent.prototype, "callback", void 0);
__decorate([
    Output()
], RavepaymentComponent.prototype, "close", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "key", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "email", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "amount", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "reference", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "meta", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "currency", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "country", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_firstname", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "customer_lastname", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_title", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_description", void 0);
__decorate([
    Input()
], RavepaymentComponent.prototype, "custom_logo", void 0);
RavepaymentComponent = __decorate([
    Component({
        selector: 'rave-pay-button',
        template: "<button\n    class=\"paystack-pay-button\"\n    [ngStyle]=\"style\"\n    [ngClass]=\"className\"\n    (click)=\"madePayment()\">\n        {{text || 'Pay'}}\n</button>",
        styles: ["h1{color:red}"]
    })
], RavepaymentComponent);

let RavepaymentModule = class RavepaymentModule {
};
RavepaymentModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            RavepaymentComponent
        ],
        exports: [
            RavepaymentComponent
        ]
    })
], RavepaymentModule);

/**
 * Generated bundle index. Do not edit.
 */

export { RavepaymentModule, RavepaymentComponent as ɵa };
//# sourceMappingURL=angular4-ravepayment.js.map