import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

type AlbumFormType = {
  nombre: FormControl<string>;
  anio: FormControl<number | null>;
};

@Component({
  selector: 'app-album-form',
  standalone: false,
  templateUrl: './album-form.html',
})
export class AlbumForm {
  id?: number;
  form: FormGroup<AlbumFormType>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: AlbumService,
    private snack: MatSnackBar
  ) {
    this.form = this.fb.group<AlbumFormType>({
      nombre: this.fb.nonNullable.control('', [Validators.required, Validators.maxLength(200)]),
      anio: this.fb.control<number | null>(null),
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? Number(idParam) : undefined;
    if (this.id) this.cargar(this.id);
  }

  cargar(id: number): void {
    this.svc.obtener(id).subscribe({
      next: (a) => this.form.patchValue({ nombre: a.nombre, anio: a.anio ?? null }),
      error: () => this.snack.open('Error cargando álbum', 'Cerrar', { duration: 2500 }),
    });
  }

  guardar(): void {
    if (this.form.invalid) return;

    const payload: Partial<Album> = {
      nombre: this.form.controls.nombre.value,
      anio: this.form.controls.anio.value ?? undefined,
    };

    if (!this.id) {
      this.svc.crear(payload).subscribe({
        next: () => {
          this.snack.open('Álbum creado', 'OK', { duration: 2000 });
          this.router.navigate(['/album/listar']);
        },
        error: () => this.snack.open('Error al crear', 'Cerrar', { duration: 2500 }),
      });
    } else {
      this.svc.actualizar(this.id, payload).subscribe({
        next: () => {
          this.snack.open('Álbum actualizado', 'OK', { duration: 2000 });
          this.router.navigate(['/album/listar']);
        },
        error: () => this.snack.open('Error al actualizar', 'Cerrar', { duration: 2500 }),
      });
    }
  }

  volver(): void {
    this.router.navigate(['/album/listar']);
  }
}
