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
      company: 'Microland',
      role: 'Java Developer',
      duration: 'Experience: 2 Years 5 Months'
    },
    {
      company: 'NeoSoft Technologies',
      role: 'Software Engineer',
      duration: 'Experience: 3 Years 1 Months'
    }
  ];
}
