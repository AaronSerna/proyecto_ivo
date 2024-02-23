import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextAreaService {
  textAreas: { [key: string]: string } = {}; // Objeto para almacenar el contenido de cada área de texto

  constructor() { }

  saveContent(id: string, content: string) {
    console.log(`Guardando contenido para el textarea con ID: ${id}`);
    console.log(`Contenido: ${content}`);
    this.textAreas[id] = content;
    console.log(`Contenido guardado correctamente`);
  }

  getContent(id: string) {
    console.log(`Recuperando contenido para el textarea con ID: ${id}`);
    const content = this.textAreas[id];
    console.log(`Contenido recuperado: ${content}`);
    return content;
  }

  getAllContent(): { id: string, content: string }[] {
    console.log(`Recuperando todos los contenidos`);
    const allContent = Object.entries(this.textAreas).map(([id, content]) => ({ id, content }));
    console.log(`Contenidos recuperados:`, allContent);
    return allContent;
  }
}
