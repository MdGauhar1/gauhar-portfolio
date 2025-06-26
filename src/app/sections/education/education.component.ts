import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = [
    {
      institution: 'Visvesvaraya Technological University',
      details: 'CS&E, Belagavi, Karnataka',
      note: 'Cumulative GPA: 8.1'
    },
    {
      institution: 'Jamia Millia Islamia',
      details: 'Intermediate (PCM), New Delhi, Delhi',
      note: 'Percentage: 60.4'
    },
    {
      institution: 'Jamia Millia Islamia',
      details: 'Matriculation, New Delhi, Delhi',
      note: 'Cumulative GPA: 9.0'
    }
  ];
}
