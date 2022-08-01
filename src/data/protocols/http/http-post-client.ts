export type HttpPostParams = {
  url?: string
  body?: object
}
export interface HttpPostClient {   //interface segregation principle  -> 1 interface encarregada de apenas 1 metodo
  post(params: HttpPostParams): Promise<void>
}
