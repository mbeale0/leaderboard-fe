import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userstats',
  imports: [],
  templateUrl: './userstats.component.html',
  styleUrl: './userstats.component.css'
})
export class UserstatsComponent {
  private activatedRoute = inject(ActivatedRoute);
  userId = this.activatedRoute.snapshot.params['id'];
}
