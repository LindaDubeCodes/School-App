import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: CoursesComponent,
    title: 'Courses',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Course details',
  },
];
export default routeConfig;
