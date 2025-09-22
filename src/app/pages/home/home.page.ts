import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { ToastService } from '../../core/services/native-toast.service';
import MyWallpaperPlugin from '../../plugins/MyWallpaperPlugin'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private toast: ToastService) {}

  async ngOnInit() {
    const { value } = await Preferences.get({ key: 'hasVisitedHome' });

    if (!value) {
      await this.toast.welcomeFirstTime();
      await Preferences.set({ key: 'hasVisitedHome', value: 'true' });
    } else {
      await this.toast.welcomeBack();
    }
  }

  async onImageUploaded() {
    await this.toast.imageUploaded();
  }

  async onWallpaperChanged() {
    await this.toast.wallpaperUpdated();
  }

  public async callplugin() {
    console.log('Calling wallpaper plugin...');
    const resp = await MyWallpaperPlugin.execute();
    console.log('Wallpaper plugin called.', resp);
  }
}
