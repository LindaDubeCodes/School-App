import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetailsComponent } from '../courses-Details/courses-details.component';
import { CourseDetails } from '../courseDetails';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'courses',
  standalone: true,
  imports: [CommonModule, CourseDetailsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by subject" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <course-details
        *ngFor="let courseDetails of coursesList"
        [courseDetails]="courseDetails"
      >
      </course-details>
    </section>
  `,
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  coursesList: CourseDetails[] = [];
  courseService: CoursesService = inject(CoursesService);

  constructor() {
    this.coursesList = this.courseService.getAllCourses();
  }
}
