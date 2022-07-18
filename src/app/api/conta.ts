export interface Conta {
    id?: number;
    descricao?: string;
    contaAgrupadora?: number;
    previc?: boolean;
    contaEliminacao?: boolean;
    retificadora?: boolean;
    agrupadora?: boolean;
    auxiliar?: boolean;
    conformidade?: boolean;
    saldoZero?: boolean;
    natureza?: string;
    saldoVirado?: boolean;
    nivel?: number;
    tipoAuxiliar?: number;
}
