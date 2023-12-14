import {Redirect} from "react-router-dom"
import Cookie from 'js-cookie';
import LoguotPopup from "../LogoutPopup";

const HomeSection = () => {
    const token = Cookie.get('jwt_token')

    const renderHomePage = () => (
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
                <div className="self-center flex-grow-1 flex flex-col justify-center w-full h-[60vh]">
                <h1 className="text-[30px] font-bold font-serif self-center text-zinc-700 ">
                    Welcome to Emo energy
                </h1>
                <button className=" bg-sky-300 rounded-2xl px-6 py-3 outline-none border self-center">
                    Visit Now
                </button>
                </div>
            </div>
        </div>
    )

    const renderPage = () => {
        if (token === undefined) {
                return <Redirect to = "/login" />
        }else{
            return renderHomePage()
        }
    }

    return (
        <>
        {
            renderPage()
        }
        </>
    )
}


export default HomeSection;