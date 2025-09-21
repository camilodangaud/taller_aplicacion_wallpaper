import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({ providedIn: 'root' })
export class PreferencesService {
  async set(key: string, value: string) {
    await Preferences.set({ key, value });
  }

  async get(key: string) {
    const { value } = await Preferences.get({ key });
    return value;
  }

  async remove(key: string) {
    await Preferences.remove({ key });
  }
}
