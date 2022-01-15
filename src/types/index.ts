export interface IChartType {
  data : [{
    period: number,
    cycle: number,
    startDate: string,
    endDate: string,
  }]
}

export interface IChartListProps{
  chartList: Array<IChartType>;
}

export interface IPassangerState{
  
}