import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';



interface Skill {
  name: string;
  value: number;
  }

interface PortfolioItem {
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfo';



stats={  
  totalProjects: 3,
  totalClients: 2,
  totalExperience: 1,
}


leftSkills: Skill[] = [
  { name: 'Html,Css', value: 100 },
  { name: 'React Js', value: 60 },
  { name: 'Figma', value: 70 },
];

rightSkills: Skill[] = [
  { name: 'Angular', value: 90 },
  { name: 'Java Script', value: 70 },
  { name: 'Ms Excel', value: 90 }
];


education = [
    {
      degree: 'Bachelor of Technology in Civil Engineering',
      institution: 'RGUKT, RK Valley',
      duration: '2019 – 2023',
      side: 'left'
    },
    {
      degree: 'Pre-University Course',
      institution: 'RGUKT, RK Valley',
      duration: '2017 – 2019',
      side: 'right'
    },
    {
      degree: 'High School',
      institution: 'Kendriya Vidyalaya Nellore',
      duration: '2016 – 2017',
      side: 'left'
    }
  ];



  portfolio: PortfolioItem[] = [
    { image: 'assets/p1.png', title: 'HRM', subtitle: 'Web Development', link: '#' },
    { image: 'assets/images/travel-app.png', title: 'Asri Fashions', subtitle: 'UX Research / Web Design', link: '#' },
    { image: 'assets/images/personal-page.png', title: 'Personal Page', subtitle: 'Web Design', link: '#' },
  ];


  constructor(private snackBar: MatSnackBar) {}

sendEmail(form: any) {
  if (form.invalid) {
    this.snackBar.open('Please fill all required fields.', 'Close', {
      duration: 3000,
      panelClass: ['bg-red-600', 'text-white'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
    return;
  }

  emailjs.send(
    environment.emailServiceID,
    environment.emailTemplateID,
    form.value,
    environment.emailPublicKey
  )
  .then(() => {
    this.snackBar.open('Message sent successfully!', 'Close', {
      duration: 3000,
      panelClass: ['bg-green-600', 'text-white'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
    form.reset();
  }, () => {
    this.snackBar.open('Failed to send. Please try again.', 'Close', {
      duration: 3000,
      panelClass: ['bg-red-600', 'text-white'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  });
}


}
