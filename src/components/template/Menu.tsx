import { NavLink } from "react-router-dom";

export default function Menu(){
    return (
        <div className="flex justify-center h-full w-1/6 bg-zinc-700 p-4">
            <div className="w-1/2 h-1/20 flex justify-center items-center">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `flex items-center p-2 rounded ${
                            isActive ? "text-amber-200 bg-amber-950" : "text-zinc-400"
                        }`
                    }
                >
                    Página Inicial
                </NavLink>
            </div>
        </div>
    );
}