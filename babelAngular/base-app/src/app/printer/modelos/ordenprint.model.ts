import { Printer, DepartamentoIf } from './master.model';

export interface OrdenPrintIf {
    user: UserIf;
    impresora: Printer;
    isColor: boolean;
    isClara: boolean;
    dpto: DepartamentoIf;
}

export interface UserIf {
    nombre: string;
    apellidos: string;
    telefono: string;
}
