import NavBar from "@/components/NavBar";
import Medicamentos from "./Medicamentos";

async function getMedicamentos(){
  const url = "http://localhost:8080/api/medicamentos"
  const result = await fetch(url,  { next: { revalidate: 0 } })

  return result.json()
}

export default async function Medicamentos() {
  const data = await getMedicamentos()
  return (
    <>
      <NavBar active={"medicamentos"} />

      <main className="bg-slate-900 p-11 m-10 rounded-lg text-slate-200">
        <h2 className="text-2xl font-bold">Medicamentos</h2>
        
        <div id="data">
          {data.map( (medicamentos) => {
            return <Medicamentos medicamentos={medicamentos} />
          } )}
          
        </div>
      </main>
    </>
  )
}
