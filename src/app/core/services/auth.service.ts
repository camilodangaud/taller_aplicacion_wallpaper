import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string): boolean {
    const users = this.userService.getUsers();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: { name: string; lastName: string; email: string; password: string }): boolean {
    const users = this.userService.getUsers();
    const exists = users.some(u => u.email === user.email);

    if (exists) {
      return false; // usuario ya existe
    }

    const newUser = {
      id: crypto.randomUUID(),
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    };

    users.push(newUser);
    this.userService.saveUsers(users);
    return true;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): any | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
