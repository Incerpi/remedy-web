import DropMenu from '@/components/DropMenu'

export default function Medicamentos({ medicamentos }) {
    const { nome } = medicamentos
    return (
        <div id="data-row" className="flex justify-between p-2 my-1 rounded cursor-pointer hover:bg-slate-800">
            <div className="flex gap-1">
                <span>{nome}</span>
            </div>
            <div>
                <span>Omeprazol</span>
                <DropMenu />
            </div>
        </div>
    )
}