import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalProjectsComponent } from "./personalProjects.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PersonalProjectsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    // {
    //   title: 'BookingNest',
    //   duration: '3 Years 1 Months',
    //   role: 'Java Developer',
    //   responsibilities: [
    //     'Requirement Analysis / ER Diagram: Conducted thorough reviews and analyses of requirement documents to gain a precise understanding of project needs. Collaborated with team members to identify and prioritize key features. Developed detailed ER diagrams for accurate database design and effective planning.',
    //     'Software Development: Developed entity classes based on ER diagrams to model database schemas accurately. Designed and maintained repository layers to ensure efficient data access and management. Adhered to industry best practices in database design and implementation.',
    //     'Spring Boot Integration: Utilized the Spring Boot framework to build the application, setting up auto-configuration, externalized configuration, and environment-specific settings. This made the project easily deployable, configurable, and ensured rapid development and scalability.',
    //   ]
    // },
    {
      title: 'Nanhikali',
      duration: '0 Years 7 Months',
      role: 'Software Engineer',
      responsibilities: [
        'Spring Boot Integration: Developed the application using Spring Boot, ensuring modular structure, easy configuration, and rapid development. Set up multiple profiles for different environments (dev, prod).',
        'Hibernate ORM: Used Hibernate for effective ORM mapping, enabling seamless interaction between the application and database. Tuned performance using lazy/eager fetching and caching strategies.',
        'Notification System: Implemented SMS and Email notification modules to send real-time updates to students and sponsors. Integrated Twilio for SMS and JavaMailSender for email functionality.'
      ]
    }
  ];
}
