import NavBar from "@/components/NavBar";
import Medicamentos from "./Medicamentos";

async function getMedicamentos(){
  const url = "http://localhost:8080/api/medicamentos"
  const result = await fetch(url)

  return result.json()
}

export default async function Medicamentos() {
  const data = await getMedicamentos()
  console.log("data", data)
  return (
    <>
      <NavBar active={"medicamentos"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Medicamentos</h2>

          <a href="/medicamentos/new" className="bg-pink-600 py-2 px-4 rounded hover:bg-pink-800">
            Cadastrar Medicamento
          </a>

        </div>
        
        <div id="data">
          {data.map( (medicamentos) => {
            return <Medicamentos medicamentos={medicamentos} />
          } )}
          
        </div>
      </main>
    </>
  )
}
