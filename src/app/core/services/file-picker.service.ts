import { Injectable } from '@angular/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Injectable({
  providedIn: 'root'
})
export class FilePickerService {

  // Pedir permisos (Android)
  async requestPermissions(): Promise<void> {
    try {
      const result = await FilePicker.requestPermissions();
      console.log('Permisos:', result);
    } catch (error) {
      console.error('Error solicitando permisos', error);
    }
  }

  // Seleccionar imágenes
  async pickImages(limit: number = 1): Promise<any[]> {
    try {
      const result = await FilePicker.pickImages({ limit });
      return result.files || [];
    } catch (error) {
      console.error('Error seleccionando imágenes', error);
      return [];
    }
  }

  // Seleccionar archivos genéricos (ej: pdf, docx)
  async pickFiles(types: string[] = ['application/pdf']): Promise<any[]> {
    try {
      const result = await FilePicker.pickFiles({ types, limit: 1 });
      return result.files || [];
    } catch (error) {
      console.error('Error seleccionando archivos', error);
      return [];
    }
  }
}
