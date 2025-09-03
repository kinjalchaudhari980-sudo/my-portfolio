import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles: string[] = ["Frontend Developer", "Angular Developer", "Full-stack Developer", "Backend Developer"];
  currentRole: string = this.roles[0];   // सुरुवातीला पहिला role
  private index: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentRole = this.roles[this.index];
      this.index = (this.index + 1) % this.roles.length;
    }, 2000);
  }
}
                   