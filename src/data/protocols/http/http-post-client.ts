 
export interface HttpPostClient {   //interface segregation principle  -> 1 interface encarregada de apenas 1 metodo
  post(url: string): Promise<void>
}
