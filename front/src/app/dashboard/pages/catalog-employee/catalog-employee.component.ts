import {OnInit, AfterViewInit, Component, ViewChild, ViewEncapsulation, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {DateAdapter} from '@angular/material/core';
import Swal from 'sweetalert2';

// Services
import { EmployeeService } from 'src/app/core/services/employee.services';
import { GlobalService } from 'src/app/core/services/global.service';

export interface EmployeeData {
  nId: number;
  cFirstName: string;
  cOthersName: string;
  cSurname: string;
  cSecondSurname: string;
  nCountry: number;
  nTypeID: number;
  cNumberID: string;
  cEmail: string;
  dAdmissionDate: any;
  nArea: number;
  bStatus: number;
  dRegisterDate: any;
  dLastDate: any;
}

@Component({
  selector: 'app-catalog-employee',
  templateUrl: './catalog-employee.component.html',
  styleUrls: ['./catalog-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatalogEmployeeComponent implements AfterViewInit, OnInit {
  
  displayedColumns: string[] = [
    'cFirstName',
    'cOthersName',
    'cSurname',
    'cSecondSurname',
    'nTypeID',
    'cNumberID',
    'nCountry',
    'cEmail',
    'nArea',
    'bStatus',
    'acciones'
  ];
  dataSource: MatTableDataSource<EmployeeData> = new MatTableDataSource();

  titleCol: string[] = [
    'Primer Nombre',
    'Otros Nombres',
    'Primer Apellido',
    'Segundo Apellido',
    'Tipo de ID',
    'Número de ID',
    'País del Empleo',
    'Correo Electrónico',
    'Área',
    'Estado',
    'Acciones'
  ];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    public modal: MatDialog,
    private serviceEmployee: EmployeeService,
    private _liveAnnouncer: LiveAnnouncer
  ) {
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async ngOnInit(): Promise<any> {
    await this.getAllEmployee();
  }

  /**
   * Método para obtener todos los empleados registrados
   */
  async getAllEmployee() {
    await this.serviceEmployee.getEmployeeAll().subscribe((data: any) => {
      if (data.length > 0) {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  /**
   * Método para eliminar la información de un empleado
   * @param id 
   */
  deleteEmployee(id: any) {
    Swal.fire({
      title: 'Eliminar Empleado',
      html: '¿Desea eliminar el empleado?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#426BA8',
      cancelButtonColor: '#dad8d8',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(async (confirm) => {
      if (confirm.isConfirmed) {
        await this.serviceEmployee.deleteEmployeeById(id).subscribe((resp: any) => {
          if (resp) {
            Swal.fire(
              'Exito!',
              'Se ha eliminado el empleado.',
              'success'
            );
            this.getAllEmployee();
          }
        });
      }
    }, (error: any) => {
      if (error.status === 500) {
        Swal.fire('Error en el servidor', '', 'error');
      } else {
        Swal.fire(
          'Error al eliminar la información',
          '',
          'warning');
      }
    });
  }

  /**
   * Metodo que aplica el filtro a la tabla de acuerdo el texto ingresado
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * Método q indica el ordenamiento de la tabla
   * @param sortState 
   */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  modalNewEmployee(): void {
    const dialogRef = this.modal.open(ModalEmployee, {
      width: '80vw',
      height: '90vh',
      data: {
        nId: 0,
        cFirstName: '',
        cOthersName: '',
        cSurname: '',
        cSecondSurname: '',
        nCountry: null,
        nTypeID: null,
        cNumberID: null,
        cEmail: null,
        dAdmissionDate: null,
        nArea: null,
        bStatus: 1
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllEmployee();
      }
    });
  }

}


/***
 * Modal para capturar o mostrar la información del empleado
 */

@Component({
  selector: 'modal-employee',
  templateUrl: '../modal-employee/modal-employee.component.html',
  styleUrls: ['../modal-employee/modal-employee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalEmployee {

  cFirstName = new FormControl('', [Validators.required, Validators.max(20)]);
  cOthersName = new FormControl('');
  cSurname = new FormControl('', [Validators.required, Validators.max(20)]);
  cSecondSurname = new FormControl('', [Validators.required, Validators.max(20)]);
  nTypeID = new FormControl('');
  cNumberID = new FormControl('', [Validators.max(20)]);
  nCountry = new FormControl('');
  nArea = new FormControl('');
  dAdmissionDate = new FormControl('');

  today = new Date();
  maxDate = new Date();
  minDate = new Date(this.today.setDate(this.today.getDate() - 30));

  countryArray: any[] = [];
  areaArray: any[] = [];
  typeIDArray: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ModalEmployee>,
    @Inject(MAT_DIALOG_DATA) public data: EmployeeData,
    private serviceGlobal: GlobalService,
    private serviceEmployee: EmployeeService
  ) {
    this.loadData();
  }

  /**
   * Método para obtener la información de los SELECT's
   */
  loadData() {
    this.serviceGlobal.getAllCountry().subscribe((data: any) => {
      if (data.length > 0) {
        this.countryArray = data;
      }
    });
    this.serviceGlobal.getAllArea().subscribe((data: any) => {
      if (data.length > 0) {
        this.areaArray = data;
      }
    });
    this.serviceGlobal.getAllTypeID().subscribe((data: any) => {
      if (data.length > 0) {
        this.typeIDArray = data;
      }
    });

  }

  /**
   * Método que guarda la información del empleado
   */
  saveData() {
    this.data.dAdmissionDate = (this.data.dAdmissionDate == '' || this.dAdmissionDate == null) ? null : new Date(this.data.dAdmissionDate).toString();
    Swal.fire({
      title: 'Registrar Empleado',
      html: '¿Desea ingresar el empleado?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#426BA8',
      cancelButtonColor: '#dad8d8',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(async (confirm) => {
      if (confirm.isConfirmed) {
        await this.serviceEmployee.createEmployee(this.data).subscribe((resp: any) => {
          if (resp) {
            Swal.fire(
              'Exito!',
              'El empleado fue creado con éxito.',
              'success'
            );
            this.dialogRef.close(true);
          }
        });
      }
    }, (error: any) => {
      if (error.status === 500) {
        Swal.fire('Error en el servidor', '', 'error');
      } else {
        Swal.fire(
          'Error al guardar la información',
          '',
          'warning');
      }
    });
  }

  /**
   * Método que guarda la información del empleado
   */
   updateData() {
    this.data.dAdmissionDate = (this.data.dAdmissionDate == '' || this.dAdmissionDate == null) ? null : new Date(this.data.dAdmissionDate).toString();
    Swal.fire({
      title: 'Actualizar Empleado',
      html: '¿Desea actualizar la información del empleado?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#426BA8',
      cancelButtonColor: '#dad8d8',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then(async (confirm) => {
      if (confirm.isConfirmed) {
        await this.serviceEmployee.updateEmployee(this.data).subscribe((resp: any) => {
          if (resp) {
            Swal.fire(
              'Exito!',
              'Se ha actualizado la información del empleado.',
              'success'
            );
            this.dialogRef.close(true);
          }
        });
      }
    }, (error: any) => {
      if (error.status === 500) {
        Swal.fire('Error en el servidor', '', 'error');
      } else {
        Swal.fire(
          'Error al guardar la información',
          '',
          'warning');
      }
    });
  }

  /**
   * Método que retorna el tipo de error por captura de data en los input's
   * @returns Message Error
   */
  getErrorMessage() {
    return this.cFirstName.hasError('required') ? 'Campo obligatorio' : '';
  }

  /**
   * Método para validar el tipo de carácter en los input's
   * @param event 
   * @param valid 
   * @returns 
   */
  validatedCharacter(event: any, valid: any): boolean {
    // Función q valida el tipo de caracter leído en el INPUT sea tipo numérico ó caracter ó alfanumérico

    let alphabetic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let alphaNumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';

    let specialsKey = [8, 13, 37, 39, 46];
    // 8 = BackSpace, 46 = Supr, 37 = flecha izquierda, 39 = flecha derecha, 13 = Enter

    // Seleccionar los caracteres a partir del parámetro de la función
    switch (valid) {
      case 'char':
        valid = alphabetic;
        break;
      case 'charSpace':
        valid = alphabetic + ' ';
        break;
      case 'alphanum':
        valid = alphaNumeric;
        break;
    }

    // Obtener la tecla pulsada
    let eventCatch = event || window.event;
    let codeChar = eventCatch.charCode || eventCatch.keyCode;
    let character = String.fromCharCode(codeChar);

    // Comprobar si la tecla pulsada es alguna de las teclas especiales
    // (teclas de borrado y flechas horizontales)
    let special = false;
    for (let i in specialsKey) {
      if (codeChar === specialsKey[i]) {
        special = true;
        break;
      }
    }

    // Comprobar si la tecla pulsada se encuentra en los caracteres permitidos
    // o si es una tecla especial
    return valid.indexOf(character) !== -1 || special;
  }

  /**
   * Método que previene la acción de las teclas.
   * @param e
   */
  notKeyDown(e: any): void {
    let k = e.key;
    if(k != 'Backspace' && (e.which == '118' || e.repeat)) {
      e.preventDefault()
    }
  }
}
