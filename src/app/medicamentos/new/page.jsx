"use client"

import { create } from "@/actions/medicamentos";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormMedicamentos() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const res = await create(formData)
        if (res.message){
            setMessage(res.message)
            return
        }
        redirect("/medicamentos")
    }

    return (
        <>
            <NavBar />

            <main className="bg-slate-900 p-11 mt-10 rounded-lg text-slate-200 max-w-md m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Medicamentos</h2>

                <form action={handleSubmit}>
                    <InputText label="Nome" id="nome" name="nome" />
                    <InputText label="Dosagem" id="dosagem" name="dosagem" />
                    <InputText label="Preço" id="preco" name="preco" />
                    <InputText label="Início" id="inicio" name="inicio" />
                    <InputText label="Fim" id="fim" name="fim" />
                    <InputText label="Horário" id="horario" name="horario" />

                <div className="flex justify-around">
                    <ButtonLink variante="secundary" href="/medicamentos">Cancelar</ButtonLink>
                    <Button>Salvar</Button>
                </div>
                <p>{message}</p>
                </form>

            </main>
        </>
    )
}