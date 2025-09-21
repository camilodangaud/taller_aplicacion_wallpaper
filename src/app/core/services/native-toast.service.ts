import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  async welcomeFirstTime() {
    await Toast.show({
      text: 'Bienvenido a la app 🎉',
      duration: 'long',
      position: 'bottom',
    });
  }

  async welcomeBack() {
    await Toast.show({
      text: 'Hola de nuevo 👋',
      duration: 'short',
      position: 'bottom',
    });
  }

  async imageUploaded() {
    await Toast.show({
      text: 'Imagen subida con éxito ✅',
      duration: 'short',
      position: 'center',
    });
  }

  async wallpaperUpdated() {
    await Toast.show({
      text: 'Wallpaper actualizado 🖼️',
      duration: 'short',
      position: 'center',
    });
  }
}
