
import LoguotPopup from "../LogoutPopup";

const HomeSection = () => (
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


export default HomeSection;