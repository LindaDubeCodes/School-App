import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../courses.service';
import { CourseDetails } from '../courseDetails';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="course-photo"
        [src]="courseDetails?.courseCoverPhoto"
        alt="cover-photo of {{ courseDetails?.name }}"
      />
      <section class="course-description">
        <h2 class="course-heading">{{ courseDetails?.name }}</h2>
        <p class="course-details">
          {{ courseDetails?.duration }}, Annual Tuition: E{{
            courseDetails?.price
          }}
        </p>
      </section>
      <section class="course-details-heading">
        <h2 class="course-sub-heading">About this Course</h2>
        <ul>
          <li>available: {{ courseDetails?.isAvailable }}</li>
          <li>Free trial: {{ courseDetails?.freeTrial }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  coursesService = inject(CoursesService);
  courseDetails: CourseDetails | undefined;
  courseDetailsId = -1;

  // In Angular, FormGroup and FormControl are types that enable you to build forms.
  // The FormControl type can provide a default value and shape the form data.
  // In this example firstName is a string and the default value is empty string.
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const courseDetailsId = Number(this.route.snapshot.params['id']);
    this.courseDetails = this.coursesService.getCourseById(courseDetailsId);
  }

  submitApplication() {
    this.coursesService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
