import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Coded with  <span style="color:red; font-size: 20px" > ♥ </span> + caffeine </span>
    <div class="socials">
      <a href="https://github.com/Shwshank" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/shashank-bhattacharya-58aa6879/" target="_blank" class="ion ion-social-linkedin"></a>
      <a href="https://facebook.com/shashank.bhattacharya.9" target="_blank" class="ion ion-social-facebook"></a>
    </div>
  `,
})
export class FooterComponent {
}
