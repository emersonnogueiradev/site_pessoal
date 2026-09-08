import { NavLink } from "react-router-dom";


interface ItensMenuProps {
    text: string;
    icon: any;
    url: string;
}

export default function ItensMenu(props: ItensMenuProps) {
    return (
            
                <NavLink 
                    to={props.url} 
                    className={({ isActive }) => 
                        `flex items-center rounded  gap-2 ${
                            isActive ? "text-white-200 bg-amber-560" : "text-zinc-100"
                        }`
                    }
                >
                    <props.icon/>
                    <span className="text-white">{props.text}</span>
                </NavLink>
    )

}