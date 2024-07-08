import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  public user!: IUser;

  public profileService = inject(ProfileService);

  constructor() {
    this.profileService.getUserProfileInfo();
  }
  
}
