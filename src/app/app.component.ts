


import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./sections/about/about.component";
import { SkillsComponent } from "./sections/skills/skills.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { EducationComponent } from "./sections/education/education.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'gauhar-portfolio';

  ngAfterViewInit() {
    const skills = [
      'java',
      'Spring Boot',
      'Hibernate',
      'MySQL',
      'Rest API',
      'API Intigration',
      'Angular',
      'Docker',
      'AWS'
    ];

    const typingElement = document.querySelector('.typing-text') as HTMLElement;
    let skillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentSkill = skills[skillIndex];
      if (isDeleting) {
        typingElement.textContent = currentSkill.substring(0, charIndex--);
      } else {
        typingElement.textContent = currentSkill.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => isDeleting = true, 1000); // wait before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }

      const speed = isDeleting ? 60 : 120;
      setTimeout(type, speed);
    };

    type();
  }
}
