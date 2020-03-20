export interface Charac {
    fechaActualizacionTransformada: string,
    importeFlc: number,
    totalDeudaVencida: number,
    totalExceso: number,
    totalLimite: number,
    totalSaldo: number
}

export class SituacionCrediticia {
constructor(obj?: any) {
  obj.totalLimite = obj.totalLimite;
  obj.totalExceso = obj.totalExceso;
  obj.totalDeudaVencida = obj.totalDeudaVencida;
  obj.totalSaldo = obj.totalSaldo;
  obj.importeFlc = obj.importeFlc;
  Object.assign(this, obj);
}
} 