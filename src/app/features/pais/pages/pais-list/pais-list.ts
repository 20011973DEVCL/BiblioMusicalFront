import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { PaisService } from '../../services/pais.service';

export type PaisRow = {
  idPais: number;
  nombre: string;
};

@Component({
  selector: 'app-pais-list',
  standalone: false,
  templateUrl: './pais-list.html',
  styleUrls: ['./pais-list.scss'],
})
export class PaisList implements AfterViewInit {
  displayedColumns: string[] = ['idPais', 'nombre', 'ACCIONES'];

  matData = new MatTableDataSource<PaisRow>([]);
  isLoading = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private cache: PaisRow[] = [];

  constructor(private paisService: PaisService) {
    this.cargar();
  }

  ngAfterViewInit(): void {
    this.matData.paginator = this.paginator;
    this.matData.sort = this.sort;
  }

  cargar(): void {
    this.isLoading = true;

    this.paisService.listar().subscribe({
      next: (rows) => {
        this.cache = rows ?? [];
        this.matData.data = this.cache;
        this.isLoading = false;
      },
      error: async () => {
        this.isLoading = false;
        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error cargando países',
          confirmButtonText: 'Cerrar',
        });
      },
    });
  }

  buscar(texto: string): void {
    const q = (texto ?? '').trim().toUpperCase();
    if (!q) {
      this.matData.data = this.cache;
      return;
    }

    this.matData.data = this.cache.filter((x) =>
      (x.nombre ?? '').toUpperCase().includes(q)
    );

    // opcional: volver a la primera página para que se vean resultados
    if (this.paginator) this.paginator.firstPage();
  }

  limpiar(): void {
    this.matData.data = this.cache;
    if (this.paginator) this.paginator.firstPage();
  }

  async eliminar(id: number): Promise<void> {
    const result = await Swal.fire({
      title: '¿Eliminar país?',
      text: `Se eliminará el registro ID ${id}. Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
    });

    if (!result.isConfirmed) return;

    this.isLoading = true;

    this.paisService.eliminar(id).subscribe({
      next: async () => {
        this.isLoading = false;

        await Swal.fire({
          icon: 'success',
          title: 'Eliminado',
          text: 'País eliminado correctamente',
          timer: 1300,
          showConfirmButton: false,
        });

        this.cargar();
      },
      error: async () => {
        this.isLoading = false;

        await Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al eliminar',
          confirmButtonText: 'Cerrar',
        });
      },
    });
  }
}
