import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {

  constructor() {}

  async uploadImage(file: File): Promise<string> {
    // Simula la subida con un delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Retornamos una URL simulada
        resolve(URL.createObjectURL(file));
      }, 2000);
    });
  }
}
