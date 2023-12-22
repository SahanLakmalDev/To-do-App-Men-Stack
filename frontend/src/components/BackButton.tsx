
import { BsArrowLeft } from "react-icons/bs";
import {NavLink} from "react-router-dom";
export function BackButton({destination = "/"}) {
    return (
        <div className={"flex"}>
            <NavLink to={destination}
                     className={"bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"}
            >
                <BsArrowLeft className={"text-2xl"}/>
            </NavLink>

        </div>
    );
}