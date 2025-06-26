import { Component } from '@angular/core';
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
  imports: [RouterOutlet, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, EducationComponent, ContactComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gauhar-portfolio';
}



