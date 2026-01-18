import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = [
    {
      company: 'Simplotel Technologies',
      role: 'Java Devloper',
      duration: 'Experience: 0 Years 8 Months'
    },
    {
      company: 'NeoSoft Technologies',
      role: 'Software Engineer',
      duration: 'Experience: 0 Years 7 Months'
    },
     {
       company: 'Microland',
       role: 'Java Developer',
       duration: 'Experience: 2 Years Months'
     }
  ];
}
