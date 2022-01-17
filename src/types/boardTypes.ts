export interface IBoard{
  data : IBoardProps[]
  totalPages: number
  totalpassengers: number
  page? : number
}

export interface IBoardProps {
  _id : string
  name: string
  trips: number
  airline: IAirlineList[]
  __v : number
}

export interface IAirlineList{
  id: number
  name: string
  country: string
  logo: string
  slogan: string
  head_quaters: string
  website: string
  established: string
}

export type PageType = {
  page: number
  size: number
}