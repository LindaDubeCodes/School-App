import { Injectable } from '@angular/core';
import { CourseDetails } from './courseDetails';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  readonly baseUrl = 'https://upload.wikimedia.org/wikipedia/commons/';

  coursesList: CourseDetails[] = [
    {
      id: 1,
      name: 'Angular',
      duration: '6 Months',
      price: 500,
      isAvailable: true,
      freeTrial: false,
      courseCoverPhoto: `${this.baseUrl}c/cf/Angular_full_color_logo.svg`,
    },

    {
      id: 2,
      name: 'React',
      duration: '6 Months',
      price: 1500,
      isAvailable: true,
      freeTrial: false,
      courseCoverPhoto: `${this.baseUrl}a/a7/React-icon.svg`,
    },

    {
      id: 3,
      name: 'Vue',
      duration: '6 Months',
      price: 500,
      isAvailable: true,
      freeTrial: false,
      courseCoverPhoto: `${this.baseUrl}9/95/Vue.js_Logo_2.svg`,
    },

    {
      id: 4,
      name: 'Next',
      duration: '6 Months',
      price: 500,
      isAvailable: true,
      freeTrial: false,
      courseCoverPhoto: `${this.baseUrl}8/8e/Nextjs-logo.svg`,
    },
  ];

  getAllCourses(): CourseDetails[] {
    return this.coursesList;
  }

  getCourseById(id: number): CourseDetails | undefined {
    return this.coursesList.find((courseDetails) => courseDetails.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log('Application recieved');
  }
}
