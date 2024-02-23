import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-horario-sidebar-medico',
  templateUrl: './componente-horario-sidebar-medico.component.html',
  styleUrls: ['./componente-horario-sidebar-medico.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
  ],
})
export class ComponenteHorarioSidebarMedicoComponent {
  selected: Date | undefined;
  formattedDate: string = '';
  citasDelDiaSeleccionado: any;

  constructor(private http: HttpClient) {}

  // Este método se activará cada vez que cambie la fecha seleccionada
  onDateSelected(event: any) {
    const date = new Date(event);
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month =
        (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
      const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
      this.formattedDate = `${year}-${month}-${day}`;
      this.citasPorFecha(this.formattedDate);
    } else {
      this.formattedDate = ''; // Resetea la fecha formateada si la fecha seleccionada no es válida
      console.error('Fecha inválida');
    }
  }

  citasPorFecha(fechaSeleccionada: string) {
    this.http
      .get<any[]>(
        'http://127.0.0.1:8000/api/citas/mostrarCitasPorFechaMedico/' +
          fechaSeleccionada
      )
      .subscribe((resultado) => {
        this.citasDelDiaSeleccionado = resultado;
      });
  }

  mostrarHoraFormateada(hora: string): string {
    const horaDate = new Date('2000-01-01T' + hora);
    return horaDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  sumarUnaHora(hora: string): string {
    const horaDate = new Date('2000-01-01T' + hora);
    horaDate.setHours(horaDate.getHours() + 1);

    return horaDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
