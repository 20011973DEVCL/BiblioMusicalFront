import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private paisService: PaisService,
    private snack: MatSnackBar
  ) {
    this.cargar();
  }

  ngAfterViewInit(): void {
    this.matData.paginator = this.paginator;
    this.matData.sort = this.sort;
  }

  cargar(): void {
    debugger;
    this.isLoading = true;
    this.paisService.listar().subscribe({
      next: (rows) => {
        this.cache = rows ?? [];
        this.matData.data = this.cache;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.snack.open('Error cargando países', 'Cerrar', { duration: 2500 });
      },
    });
  }

  buscar(texto: string): void {
    const q = (texto ?? '').trim().toUpperCase();
    if (!q) {
      this.matData.data = this.cache;
      return;
    }
    this.matData.data = this.cache.filter(x =>
      (x.nombre ?? '').toUpperCase().includes(q)
    );
  }

  limpiar(): void {
    this.matData.data = this.cache;
  }

  eliminar(id: number): void {
    if (!confirm(`¿Eliminar país ID ${id}?`)) return;

    this.isLoading = true;
    this.paisService.eliminar(id).subscribe({
      next: () => {
        this.snack.open('País eliminado', 'OK', { duration: 2000 });
        this.cargar();
      },
      error: () => {
        this.isLoading = false;
        this.snack.open('Error al eliminar', 'Cerrar', { duration: 2500 });
      },
    });
  }
}
