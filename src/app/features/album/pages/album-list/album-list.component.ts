import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-list',
  standalone: false,
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent implements AfterViewInit {
  displayedColumns = ['id', 'nombre', 'anio', 'acciones'];
  dataSource = new MatTableDataSource<Album>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private svc: AlbumService, private snack: MatSnackBar) {
    this.cargar();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cargar(): void {
    this.svc.listar().subscribe({
      next: (data) => (this.dataSource.data = data),
      error: () => this.snack.open('Error cargando álbumes', 'Cerrar', { duration: 2500 }),
    });
  }

  eliminar(id: number): void {
    if (!confirm('¿Eliminar este álbum?')) return;

    this.svc.eliminar(id).subscribe({
      next: () => {
        this.snack.open('Álbum eliminado', 'OK', { duration: 2000 });
        this.cargar();
      },
      error: () => this.snack.open('No se pudo eliminar', 'Cerrar', { duration: 2500 }),
    });
  }
}
