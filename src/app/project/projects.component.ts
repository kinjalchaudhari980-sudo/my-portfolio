import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Dashboard App',
      details: `This is a Dashboard Application built in Angular.
        Features include:
        - in my internship project
        - Interactive charts with Chart.js
        - Leaflet.js map 
        - Data fetched from REST APIs
        - User login and role management
        - Responsive layout for mobile and desktop`,
      link: '#'
    },
    {
      name: 'Portfolio Website',
      details: `A personal portfolio built with Angular and CSS animations.
        - Home, About, Projects, Contact sections
        - Smooth scroll and typewriter effect
        - Fully responsive and mobile-friendly
        - Contact form integrated with email service`,
      link: '#'
    },
    {
      name: 'Weather App',
      details: `Weather Forecast application built with Angular.
        - Fetches data from OpenWeatherMap API
        - Shows current weather, hourly & weekly forecast
        - Responsive UI with icons for weather conditions
        - Search by city`,
      link: '#'
    },
    {
      name: 'Cab Booking Website',
      details: `A Cab Booking Website built with HTML, CSS, and JS.
        Features:
        - User can search available cabs and book a ride
        - Display of fare estimates
        - Booking history for users
        - Responsive UI for desktop and mobile`,
      link: '#'
    },
    {
  name: 'NHIT RAMS',
  details: `Road Asset Management System (RAMS) Dashboard developed during a 3-month internship at Mitcon.
    - Built using Angular with standalone components for efficient modular development
    - Implemented dynamic dashboards displaying road asset data with interactive charts and tables
    - Developed API integrations to fetch, filter, and display project-specific road inspection data
    - Enabled filtering by project, chainage, and date for precise data analysis
    - i work an Angular v-17, v-20 in standalone component
    - Successfully designed and implemented responsive cards and tables for a user-friendly interface
    - Delivered fully functional report dashboards for real-time insights into road asset conditions`,
  link: '#'
}

  ];

  selectedProject: any = null;

  showDetails(project: any) {
    this.selectedProject = this.selectedProject === project ? null : project;
  }
}
