import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
    <NavBar active={"medicamentos"} />
      <main className="0 p-11 m-10 rounded-lg">
      </main>

      <div id="data">
          <div id="data-row" className="flex justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
              <span>itau</span>
            </div>
            <span>R$ 100.00</span>
          </div>
        </div>

    </>
  )
}
