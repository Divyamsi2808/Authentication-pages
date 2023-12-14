import { useState } from "react";
import Cookie from 'js-cookie';
import { BiShow, BiHide } from "react-icons/bi";
import { v4 as uuidv4 } from 'uuid';

import "./index.css"

const LoginSection = () => {
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const [isHide, changePasswordStatus] = useState(true);
    const [errorMsg, onChangeErrorMsg] = useState("");

    const onLogin = (event) => {
            event.preventDefault()

            const userList = JSON.parse(localStorage.getItem("userList"));

            if (userList === null) {
                onChangeErrorMsg("username is not exits")
                return;
            }

            const userObj = userList.find((eachObj) => (eachObj.username === username))

            if (userObj === undefined) {
                onChangeErrorMsg("username is not exits");
            }else if (userObj.password !== password) {
                onChangeErrorMsg("Incorect Password")
            }else{
                Cookie.set('jwt_token', uuidv4(), {
                    expires: 30,
                    path: '/',
                  })
                updatePassword("");
                updateUsername("");
                changePasswordStatus(true);
                onChangeErrorMsg("");
                window.location.href = '/';
            }

    }


    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1702523131/samples/aquaryus15-j0TOma0mHdc-unsplash_hgvqa2.jpg" alt="" />
            </div>
    
            <div className='bg-zinc-800/10 shadow-md shadow-cyan-500/60 flex flex-col justify-center'>
                <form onSubmit={onLogin} className='max-w-[400px] w-full mx-auto bg-white p-4 rounded-xl'>
                    <h2 className='text-4xl font-bold text-center py-6'>Emo energy</h2>
                    <div className='flex flex-col py-2'>
                        <label htmlFor = "userName">Username</label>
                        <input id = "userName" value={username} className='border p-2' type="text" onChange={(e) => {updateUsername(e.target.value)}} required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor = "password" >Password</label>
                        <div className='border p-2 flex items-center'>
                        <input id = "password" value={password} className='border-none flex-grow-1 w-full outline-none'  type={isHide ? "password": "text"} onChange={(e) => {updatePassword(e.target.value)}} required />
                        <button type = "button" className=" bg-transparent outline-none" onClick={() => {changePasswordStatus((prev) => !prev)}} >
                            {
                                isHide ? <BiHide/>: <BiShow/>
                            }
                        </button>
                        </div>
                    </div>
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Login</button>
                    {
                        errorMsg !== "" && <p className=" text-red-600">*{errorMsg}</p>
                    }
                    <div className='flex flex-col w-full'>
                        <a href = "/signup" className = "self-end  text-sky-600 hover:font-bold">Create an account</a>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default LoginSection;