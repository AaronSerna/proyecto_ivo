import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TextAreaService } from 'src/app/services/servicio-informes/text-area.service';

@Component({
  selector: 'app-componente-subir-pruebas',
  templateUrl: './componente-subir-pruebas.component.html',
  styleUrls: ['./componente-subir-pruebas.component.css'],
})
export class ComponenteSubirPruebasComponent {
  @Input() tituloImagenes: string = '';
  @Input() siguienteRuta: string = '';

  mostrarPopUps: boolean = false;
  selectedFiles: File[] = []; //array de archivos subidos
  selectedFileIndex: number | null = null; // Nueva variable para el índice del archivo seleccionado

  textAreaIds: string[] = []; // Array para almacenar los IDs de los textareas

  constructor(private sanitizer: DomSanitizer, private textAreaService: TextAreaService) {}

  togglePopUps(index: number): void {
    this.selectedFileIndex = index;
    this.mostrarPopUps = !this.mostrarPopUps;

    // Generar el ID del textarea
    if (this.selectedFileIndex !== null && !this.textAreaIds[this.selectedFileIndex]) {
      this.textAreaIds[this.selectedFileIndex] = this.generarIdTextarea();
    }
  }

  cerrarPopUps(): void {
    this.selectedFileIndex = null;
    this.mostrarPopUps = false;
  }

  onFileSelected(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      //Añadir cada archivo al array selectedFiles
      for (let i = 0; i < fileInput.files.length; i++) {
        this.selectedFiles.push(fileInput.files[i]);
      }
    }
  }

  getSafeUrl(file: File): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file)); 
  }

  generarIdTextarea(): string { //ponerles de id=textArea + la posición en el array
    return 'textArea' + (this.textAreaIds.length);
  }

  saveContent(id: string, content: string): void {
    this.textAreaService.saveContent(id, content);
  }

  getAllContent(): { id: string, content: string }[] {
    return this.textAreaService.getAllContent();
  }
}
