import { HttpResponse } from "."

export type HttpPostParams<T> = {
  url?: string
  body?: T
}

//interface segregation principle  -> 1 interface encarregada de apenas 1 metodo
export interface HttpPostClient<T, R> {    //Generics: Aqui defino que devo passar um tipo T para body da requisição, e um tipo R para body da resposta
  post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}
