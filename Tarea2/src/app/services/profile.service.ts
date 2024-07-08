import { Injectable, signal } from '@angular/core';
import { BaseService } from './base-service';
import { IUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<IUser>{
  protected override  source: string = 'users/me';
  private userSignal = signal<IUser>({});

  get user$ () {
    return this.userSignal
  }

  getUserProfileInfo() {
    this.findAll().subscribe({
      next: (response: any) => {
        console.log('response', response);
        this.userSignal.set(response);
      }
    });
  }
}
