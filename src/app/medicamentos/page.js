import NavBar from "@/components/NavBar";


export default function medicamentos() {
  return (
    <>
      <NavBar active={"medicamentos"} />
      <div class="flex flex-col h-screen justify-between">
      <main className="bg-sky-600 p-11 m-10 rounded-lg">
        <h2>Medicamentos</h2>
      </main>
      <footer class="h-10 bg-blue-500"></footer>
       </div>
    </>
  )
}
