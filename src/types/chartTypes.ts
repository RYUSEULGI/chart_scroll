export interface IChartStateType {
  data : [{
    period: number,
    cycle: number,
    startDate: string,
    endDate: string,
  }]
}

export interface IChartList{
  data : IChartData[]
}

export interface IChartData{
  period: number,
  cycle: number,
  startDate: string,
  endDate: string,
}