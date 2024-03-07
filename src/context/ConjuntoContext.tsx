import { Item } from "@/components/conjuntos/columns"
import { createContext, useContext, useEffect, useState } from "react"

export type ConjuntosContext = {
  residuos: Array<Item>
  addResiduo: (residuo: any) => void
}

export const ConjuntosContext = createContext<ConjuntosContext | null>(null)

export const ConjuntosProvider = ({ children }: any) => {
  const [residuos, setResiduos] = useState<Array<Item> | []>([])

  //adiciona os residuos selecionados
  const addResiduo = (residuo: any) => {
    setResiduos((prev: any) => {
      return [...prev, residuo]
    })
  }

  useEffect(() => console.log(residuos), [residuos])

  return (
    <ConjuntosContext.Provider
      value={{
        residuos,
        addResiduo,
      }}
    >
      {children}
    </ConjuntosContext.Provider>
  )
}

export function useConjContext() {
  const contexto = useContext(ConjuntosContext)

  console.log(contexto)

  if (!contexto) {
    throw new Error("O contexto precisa estar em seu respectivo provider")
  }

  return contexto
}