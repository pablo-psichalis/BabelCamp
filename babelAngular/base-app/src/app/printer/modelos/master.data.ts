import { Printer, DepartamentoIf } from './master.model';

export const Printers: Array<Printer> = [
    new Printer('1', 'HP'),
    new Printer('2', 'Brother'),
    new Printer('3', 'Lexmark')
];

export const Dptos: Array<DepartamentoIf> = [
    {id: '1', name: 'RRHH'},
    {id: '2', name: 'Ventas'},
    {id: '3', name: 'Marketing'},
    {id: '4', name: 'Sistemas'}
];
