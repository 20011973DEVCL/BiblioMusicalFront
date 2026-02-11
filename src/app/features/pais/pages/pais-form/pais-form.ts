import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PaisService, PaisRow, PaisCreateUpdate } from '../../services/pais.service';

@Component({
  selector: 'app-pais-form',
  standalone: false,
  templateUrl: './pais-form.html',
  styleUrls: ['./pais-form.scss'],
})
export class PaisForm implements OnInit {

  isEdit = false;
  isLoading = false;
  idPais?: number;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(150)]],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      this.isEdit = true;
      this.idPais = Number(idStr);
      this.cargar(this.idPais);
    }
  }

  private cargar(id: number): void {
    this.isLoading = true;

    this.paisService.obtener(id).subscribe({
      next: (r: PaisRow) => {
        this.form.patchValue({ nombre: r.nombre });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error', 'No se pudo cargar el país', 'error')
          .then(() => this.router.navigate(['/pais']));
      }
    });
  }

  guardar(): void {

    if (this.form.invalid) {
      Swal.fire('Validación', 'Debe ingresar un nombre válido', 'warning');
      this.form.markAllAsTouched();
      return;
    }

    const payload: PaisCreateUpdate = {
      nombre: (this.form.value.nombre ?? '').trim()
    };

    this.isLoading = true;

    const req$ = this.isEdit && this.idPais
      ? this.paisService.actualizar(this.idPais, payload)
      : this.paisService.crear(payload);

    req$.subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: this.isEdit ? 'País actualizado' : 'País creado',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/pais']);
        });
      },
      error: () => {
        this.isLoading = false;
        Swal.fire('Error', 'No se pudo guardar el país', 'error');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/pais']);
  }
}
