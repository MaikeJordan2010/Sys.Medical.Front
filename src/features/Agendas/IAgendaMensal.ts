export interface IAgendaMensal{
  codMedico?:string | null,
  dataInicial:Date,
  dataFinal:Date,
  domingo: boolean,
  segunda:boolean,
  terca:boolean,
  quarta:boolean,
  quinta:boolean,
  sexta:boolean,
  sabado: boolean,
  horaInicioTurno:string,
  horaFimTurno:string,
  desconsiderarFeriados:boolean,
  tempoMedioAtendimento:number,
  valor:number
}