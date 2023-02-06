import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'test-onv-window-bug';

  ngAfterViewInit(): void {
    console.log(window.one);
    console.log(window.two);
  }
}
