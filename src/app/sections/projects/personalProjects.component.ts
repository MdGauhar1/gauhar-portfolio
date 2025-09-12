import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
  personalProjects = [
    {
      title: 'Wecare',
      duration: 'Personal Project',
      type: 'Full Stack',
      details: [
        'Angular UI for booking, doctors, and patients.',
        'Spring Boot REST APIs for booking & auth.',
        'ER diagrams & relational DB design.',
        'Google Translate integration.',
        'Deployed frontend on GitHub Pages & backend.'
      ],
      link: 'https://mdgauhar1.github.io/wecare-hospital-Frontend/',
      bgImage: '/assets/wecare.png'
    },
    {
      title: 'BookApp',
      duration: 'Personal Project',
      type: 'Full Stack',
      details: [
        'Angular Frontend: Developed using Angular with modular architecture and routing.',
        'Third-Party API: Integrated live book data using a third-party public API for dynamic content.',
        'UI & Deployment: Styled with modern CSS and deployed using GitHub Pages.',
      ],
      link: 'https://MdGauhar1.github.io/BookApp-Angular/',
      bgImage:'/assets/bookapp.png'
    },
    {
      title: 'AiVoiceApp',
      duration: 'Personal Project',
      type: 'Full Stack',
      details: [
        'Angular frontend with voice interaction UI.',
        'Spring Boot backend deployed on Railway.',
        'Integrated OpenRouter API for AI voice responses.',
        'Real-time mic input and audio output features.',
        'End-to-end full stack AI voice app.'
      ],
      link: 'https://MdGauhar1.github.io/AiBootFrontend/',
      bgImage:'/assets/aibot.png'
    }
  ];
}
