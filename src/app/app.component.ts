import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reference: string;
  ngOnInit() {
    this.reference = this.generateReference();
  }

  confirmPayment(response: object): void {
    console.log(response);
  }

  cancelledPayment(): void {
  }

  generateReference(): string {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 10; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }

      return text;
  }

  getNewReference() {
    this.reference = this.generateReference();
  }
}
