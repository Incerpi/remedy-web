import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="flex justify-between bg-sky-600 p-4">
            <ul className="flex gap-12 text-slate-200 text-sm items-end">
                <li>
                    <a href="#">
                        <h1 className="text-slate-200 text-xl font-bold">
                            Remedy
                        </h1>
                    </a>
                </li>
                <li><Link className={active == "medicamentos" && 'text-slate-200'} href="/medicamentos">Medicamentos</Link></li>
                <li><Link className={active == "farmacia" && 'text-slate-200'} href="/farmacia">Farmacia</Link></li>
                <li><Link className={active == "categorias" && 'text-slate-200'} href="/categorias">Categorias</Link></li>
            </ul>
            <div className="h-11 w-11 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}