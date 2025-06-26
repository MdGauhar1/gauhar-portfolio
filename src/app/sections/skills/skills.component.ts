import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-power-off' },
    { name: 'Hibernate', icon: 'fas fa-cube' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'API Integration', icon: 'fab fa-js' },
    { name: 'Spring MVC', icon: 'fas fa-code' },
    { name: 'JWT Token', icon: 'fab fa-js' },
    { name: 'Spring Security', icon: 'fas fa-shield-alt' },
    { name: 'JDBC', icon: 'fas fa-database' },
    { name: 'Stream API', icon: 'fab fa-java' },
    { name: 'Rest API', icon: 'fab fa-js' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'JSP', icon: 'fab fa-java' },
    { name: 'JSON', icon: 'fas fa-code' },
    { name: 'Git & GitHub', icon: 'fab fa-github' },
    { name: 'Debugging', icon: 'fas fa-bug' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'AWS S3', icon: 'fab fa-aws' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },       
    { name: 'Angular', icon: 'fab fa-angular' }, 
  ];
}
