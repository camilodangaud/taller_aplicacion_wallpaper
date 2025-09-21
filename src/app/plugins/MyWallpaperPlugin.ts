import { registerPlugin } from '@capacitor/core';

export interface MyWallpaperPlugin {
  execute(): Promise<{message: string}>;
}

const MyWallpaperPlugin = registerPlugin<MyWallpaperPlugin>('MyWallpaperPlugin');
export default MyWallpaperPlugin;