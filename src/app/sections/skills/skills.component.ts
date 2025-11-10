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
    { name: 'Java', icon: 'https://img.icons8.com/?size=100&id=5OD485koNIrb&format=png&color=000000' },
    { name: 'Spring Boot', icon: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000' },
    { name: 'Hibernate', icon: 'https://img.icons8.com/?size=100&id=63685&format=png&color=000000' },
    { name: 'MySQL', icon: 'https://img.icons8.com/?size=100&id=QeIg9siFKGgp&format=png&color=000000' },
    { name: 'API Integration', icon: 'https://img.icons8.com/?size=100&id=21888&format=png&color=000000' },
    { name: 'Spring MVC', icon: 'https://img.icons8.com/?size=100&id=2oBx9FpXcbLa&format=png&color=000000' },
    { name: 'JWT Token', icon: 'https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000' },
    { name: 'Spring Security', icon: 'https://img.icons8.com/?size=100&id=103967&format=png&color=000000' },
    { name: 'JDBC', icon: 'https://img.icons8.com/color/48/000000/database.png' },
    { name: 'Stream API', icon: 'https://img.icons8.com/?size=100&id=54565&format=png&color=000000' },
    { name: 'Rest API', icon: 'https://img.icons8.com/?size=100&id=RlIXjuTUrwoX&format=png&color=000000' },
    { name: 'Maven', icon: 'https://img.icons8.com/?size=100&id=xgChbMh3wYDY&format=png&color=000000'},
    { name: 'JSP', icon: 'https://img.icons8.com/?size=100&id=rDCzEQXccARI&format=png&color=000000' },
    { name: 'JSON', icon: 'https://img.icons8.com/?size=100&id=fkWHVVQrk0Sg&format=png&color=000000' },
    { name: 'Git & GitHub', icon: 'https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000' },
    { name: 'Debugging', icon: 'https://img.icons8.com/?size=100&id=OMnk5LFl3gLe&format=png&color=000000' },
    { name: 'Docker', icon: 'https://img.icons8.com/?size=100&id=Wln8Z3PcXanx&format=png&color=000000' },
    { name: 'AWS S3', icon: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
    { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000' },       
    { name: 'Angular', icon: 'https://img.icons8.com/?size=100&id=j9DnICNnlhGk&format=png&color=000000' }, 
  ];
}








// export class SkillsComponent {
//   skills = [
//     { name: 'Java', icon: 'fab fa-java' },
//     { name: 'Spring Boot', icon: 'fas fa-power-off' },
//     { name: 'Hibernate', icon: 'fas fa-cube' },
//     { name: 'MySQL', icon: 'fas fa-database' },
//     { name: 'API Integration', icon: 'fab fa-js' },
//     { name: 'Spring MVC', icon: 'fas fa-code' },
//     { name: 'JWT Token', icon: 'fab fa-js' },
//     { name: 'Spring Security', icon: 'fas fa-shield-alt' },
//     { name: 'JDBC', icon: 'fas fa-database' },
//     { name: 'Stream API', icon: 'fab fa-java' },
//     { name: 'Rest API', icon: 'fab fa-js' },
//     { name: 'HTML', icon: 'fab fa-html5' },
//     { name: 'JSP', icon: 'fab fa-java' },
//     { name: 'JSON', icon: 'fas fa-code' },
//     { name: 'Git & GitHub', icon: 'fab fa-github' },
//     { name: 'Debugging', icon: 'fas fa-bug' },
//     { name: 'Docker', icon: 'fab fa-docker' },
//     { name: 'AWS S3', icon: 'fab fa-aws' },
//     { name: 'CSS', icon: 'fab fa-css3-alt' },       
//     { name: 'Angular', icon: 'fab fa-angular' }, 
//   ];
// }
