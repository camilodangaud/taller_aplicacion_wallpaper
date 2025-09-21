import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  async setItem(key: string, value: any): Promise<void> {
    await Preferences.set({
      key,
      value: JSON.stringify(value),
    });
  }

  async getItem<T>(key: string): Promise<T | null> {
    const { value } = await Preferences.get({ key });
    return value ? (JSON.parse(value) as T) : null;
  }

  async removeItem(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  async clear(): Promise<void> {
    await Preferences.clear();
  }
}
