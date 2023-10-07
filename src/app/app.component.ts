import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

@Component({
  standalone: true,
  imports: [CoursesComponent, RouterModule],
  selector: 'app-root',
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="Brand-name">
          <img
            class="brand-logo"
            src="/assets/logo.svg"
            alt="Logo"
            aria-hidden="true"
          />
        </header>
      </a>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Courses';
}
