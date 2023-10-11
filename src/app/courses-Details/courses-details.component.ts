import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDetails } from '../courseDetails';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="details">
      <img
        class="course-photo"
        [src]="courseDetails.courseCoverPhoto"
        alt="cover-photo of {{ courseDetails.name }}"
      />
      <h2 class="course-heading">{{ courseDetails.name }}</h2>
      <p class="course-details">
        {{ courseDetails.duration }}<br />Annual Tuition: E{{
          courseDetails.price
        }}
      </p>
      <a [routerLink]="['/details', courseDetails.id]">Learn more</a>
    </section>
  `,
  styleUrls: ['./courses-details.component.css'],
})
export class CourseDetailsComponent {
  @Input() courseDetails!: CourseDetails;
}
