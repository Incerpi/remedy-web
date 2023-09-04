'use server'

import { revalidatePath } from "next/cache"

export async function create(formData) {
    const url = "http://localhost:8080/api/medicamentos"
    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json"
      }
    }
    const result = await fetch(url, options)

    if(result.status !== 201){
      return {message: "Erro ao cadastrar medicamentos. Verifique os campos."}
    }
    revalidatePath("/medicamentos")
    return {ok: "Medicamento cadastrado com sucesso"}

}
