import { IoPersonCircleSharp } from "react-icons/io5";
import Cookie from 'js-cookie';
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import {
    PopupOverlay,
    DropdownButton,
    PopupContent,
} from "./styled"


const LoguotPopup = () => {
    const [isOpen, updateStatus] = useState(false)

    const toggleDropdown = () => {
        updateStatus((prev) => (!prev))
    }

    const onClickLogout = () => {
        Cookie.remove('jwt_token')
        window.location.href = '/login'
    }

    return (
        <>
        <DropdownButton type = "button" className="flex items-center" onClick={toggleDropdown}>
        <p className="text-[16px] font-bold mr-1">Account</p> <IoPersonCircleSharp className="text-[30px]"/>
            </DropdownButton>
            <PopupOverlay open={isOpen} >
            <PopupContent id = "add product" className="w-[400px] flex flex-col items-center">
                <div className="flex flex-col justify-center w-full">
                    <button type = "button" onClick={toggleDropdown} className="self-end border-none cursor-pointer  outline-none bg-transparent">
                        <RxCross2/>
                    </button>
                    <p>
                        username: xxxxx
                    </p>
                    <p>
                        email: xxxxxx@gmail.com
                    </p>
                    <button type="button" onClick={onClickLogout} className="w-[200px] mt-4 px-5 py-2 border-none cursor-pointer rounded-xl outline-none bg-sky-400">
                        Logout
                    </button>
                </div>
            </PopupContent>
            </PopupOverlay>
        </>
    )
}

export default LoguotPopup