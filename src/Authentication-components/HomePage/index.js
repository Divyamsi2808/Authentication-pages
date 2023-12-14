import { useEffect } from 'react';
import Cookie from 'js-cookie';
import LoguotPopup from "../LogoutPopup";

const HomeSection = () => {

    useEffect(() => {
        const token = Cookie.get('jwt_token')
        if (token === undefined) {
            window.location.href = '/login';
        }
    },[])

    return (
        <div className='h-screen w-full'>
            <div className="flex flex-col">
                <div className=" bg-cyan-300 w-full px-4 h-[120px] flex items-center justify-between">
                    <h1 className="text-[30px] font-bold">
                        Emo energy
                    </h1>
                    {
                        <LoguotPopup/>
                    }
                </div>
                <div className="h-full">
                <h1 className="text-[30px] font-bold font-serif self-center">
                    Welcome to Emo energy
                </h1>
                </div>
            </div>
        </div>
    )
}


export default HomeSection;