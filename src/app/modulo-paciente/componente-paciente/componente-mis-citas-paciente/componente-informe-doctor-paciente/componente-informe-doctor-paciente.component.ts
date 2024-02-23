import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitasService } from '../../../../services/servicio-citas/citas.service';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-componente-informe-doctor-paciente',
  templateUrl: './componente-informe-doctor-paciente.component.html',
  styleUrls: ['./componente-informe-doctor-paciente.component.css'],
})
export class ComponenteInformeDoctorPacienteComponent {
  @Input() tipoTextarea: string = '';
  @Input() numeroRowsTextarea: string = '';
  @Input() numeroColsTextarea: string = '';
  idCita: string = '';
  contenidoTextarea: string = '';

  constructor(
    private citasService: CitasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.idCita = params['id'] || '';
      if (this.idCita) {
        // this.obtenerDiagnostico();
        this.mostrarContenidoTextarea();
      }
    });
  }

  mostrarContenidoTextarea() {
    if (this.tipoTextarea === 'Diagnóstico') {
      this.obtenerDiagnostico();
    }
    if (this.tipoTextarea === 'Informe') {
      this.obtenerInforme();
    }
  }

  obtenerDiagnostico() {
    this.citasService
      .mostrarDiagnosticoDelPaciente(this.idCita) // Hay que usar el id del paciente real. Para la prueba se ha usado el ID 41.

      .subscribe((data: any) => {
        this.contenidoTextarea = data.contenido;
      });
  }

  obtenerInforme() {
    this.citasService
      .mostrarInformeDelPaciente(this.idCita) // Hay que usar el id del paciente real. Para la prueba se ha usado el ID 41.

      .subscribe((data: any) => {
        this.contenidoTextarea = data.contenido;
      });
  }

  generarPDF() {
    let pdf = new jsPDF();

    // Obtener la fecha actual
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.toLocaleString('default', { month: 'long' }); // Nombre del mes
    let anio = fechaActual.getFullYear();

    // Concatenar la fecha en el formato deseado. Ejemplo: Valencia, a 1 de enero de 2024.
    let fecha = `${dia} de ${mes} de ${anio}`;

    let logoUrl = '/assets/images/IVO_CabeceraPDF.png';
    pdf.addImage(logoUrl, 'PNG', 55, -9, 110, 50);

    // Contenido del PDF con fuente y tamaño de letra personalizados
    pdf.setFont('arial', 'normal'); // Cambia la fuente y estilo (normal, italic, bold)
    pdf.setFontSize(13); // Cambia el tamaño de la letra

    const contenidoConSaltos = this.contenidoTextarea.replace(/\n/g, '\n'); // Reemplazar saltos de línea con dobles saltos

    const maxLineasPorPagina = 30; // Ajusta según sea necesario
    const alturaPagina = pdf.internal.pageSize.height;
    const anchoMaximo = 180;
    const margenInferior = 30; // Ajusta según sea necesario

    let lineas = pdf.splitTextToSize(contenidoConSaltos, anchoMaximo);

    let y = 60;
    let lineasEnPagina = 0;

    for (let i = 0; i < lineas.length; i++) {
      if (
        lineasEnPagina >= maxLineasPorPagina ||
        y + 10 > alturaPagina - margenInferior
      ) {
        pdf.addPage();
        y = 35; // Establecer el valor inicial de y para la nueva página
        lineasEnPagina = 0;
      }
      pdf.text(lineas[i], 12, y, { maxWidth: anchoMaximo, align: 'justify' });
      y += 10; // Ajusta el valor según sea necesario
      lineasEnPagina++;
    }

    pdf.text(
      `Valencia, a ${fecha}`,
      70,
      pdf.internal.pageSize.height - margenInferior
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl1 = '/assets/images/IVO_PiePagina1.png';
    pdf.addImage(
      pieImagenUrl1,
      'PNG',
      6,
      pdf.internal.pageSize.height - 18,
      65,
      12
    );

    // Insertar imagen en el pie de página
    let pieImagenUrl2 = '/assets/images/IVO_PiePagina2.png';
    pdf.addImage(
      pieImagenUrl2,
      'PNG',
      155,
      pdf.internal.pageSize.height - 18,
      50,
      12
    );

    // Guardar o mostrar el PDF
    if (this.tipoTextarea === 'Diagnóstico') {
      pdf.save('diagnostico.pdf');
    } else {
      pdf.save('informe.pdf');
    }
  }
}

/* CÓDIGO ORIGINAL:
  
  generarPDF() {
    let pdf = new jsPDF();

    // Obtener la fecha actual
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.toLocaleString('default', { month: 'long' }); // Nombre del mes
    let anio = fechaActual.getFullYear();

    // Concatenar la fecha en el formato deseado. EJ Valencia, a 1 de enero de 2024.
    let fecha = `${dia} de ${mes} de ${anio}`;

    let logoUrl = '/assets/images/IVO_CabeceraPDF.png';
    pdf.addImage(logoUrl, 'PNG', 55, -9, 110, 50);


    // Contenido del PDF con fuente y tamaño de letra personalizados
    pdf.setFont('arial', 'normal'); // Cambia la fuente y estilo (normal, italic, bold)
    pdf.setFontSize(13); // Cambia el tamaño de la letra

   
    // Contenido principal con saltos de línea
    const contenidoConSaltos = this.contenidoTextarea.replace(/\n/g, '\n'); // Reemplazar saltos de línea con dobles saltos
    pdf.text(contenidoConSaltos, 12, 55, { maxWidth: 180, align: 'justify' });

    pdf.text(`Valencia, a ${fecha}`, 70, 250);

    // Insertar imagen en el pie de página
    let pieImagenUrl1 = '/assets/images/IVO_PiePagina1.png';
    pdf.addImage(pieImagenUrl1, 'PNG', 6, 273, 65, 12);

    // Insertar imagen en el pie de página
    let pieImagenUrl2 = '/assets/images/IVO_PiePagina2.png';
    pdf.addImage(pieImagenUrl2, 'PNG', 155, 275, 50, 12);

    // Guardar o mostrar el PDF
    if (this.tipoTextarea === 'Diagnóstico') {
      pdf.save('diagnostico.pdf');
    } else {
      pdf.save('informe.pdf');
    }
  }*/
