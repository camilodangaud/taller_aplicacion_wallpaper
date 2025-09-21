import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { PreferencesService } from './preferences.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserKey = 'currentUser';

  constructor(
    private userService: UserService,
    private preferences: PreferencesService
  ) {}

  async login(email: string, password: string): Promise<boolean> {
    const users = this.userService.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      await this.preferences.setItem(this.currentUserKey, user);
      return true;
    }
    return false;
  }

  async register(user: { name: string; lastName: string; email: string; password: string }): Promise<boolean> {
    const users = this.userService.getUsers();
    const exists = users.some(u => u.email === user.email);

    if (exists) return false;

    const newUser = {
      id: crypto.randomUUID(),
      ...user,
    };

    users.push(newUser);
    this.userService.saveUsers(users);
    
    await this.preferences.setItem(this.currentUserKey, newUser);

    return true;
  }

  async logout(): Promise<void> {
    await this.preferences.removeItem(this.currentUserKey);
  }

  async getCurrentUser(): Promise<any | null> {
    return await this.preferences.getItem<any>(this.currentUserKey);
  }
}
