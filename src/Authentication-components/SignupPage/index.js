import { useState } from "react";
import Cookie from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';
import { BiShow, BiHide } from "react-icons/bi";

import "./index.css"

const SignupSection = () => {
    const [username, updateUsername] = useState("");
    const [email, updateEmail] = useState("");
    const [phone, updatePhone] = useState("");
    const [password, updatePassword] = useState("");
    const [isHide, changePasswordStatus] = useState(true);
    const [errorMsg, onChangeErrorMsg] = useState("");

    const onSignUp = (event) => {
            event.preventDefault()

            const userList = JSON.parse(localStorage.getItem("userList"));

            const newObj = {
                username,
                password,
                email,
                phone,
            }
            
            if (userList === null) {
                localStorage.setItem("userList", JSON.stringify([newObj]));
                Cookie.set('jwt_token', uuidv4(), {
                    expires: 30,
                    path: '/',
                  })
                window.location.href = '/';
            }else{
                const isUserExits = userList.some((eachObj) => (eachObj.username === username))
                if (isUserExits) {
                    onChangeErrorMsg("username alredy Exits")
                }else{
                    localStorage.setItem("userList", JSON.stringify([newObj,...userList]));
                    Cookie.set('jwt_token', uuidv4(), {
                        expires: 30,
                        path: '/',
                      })
                    updateUsername("");
                    updateEmail("");
                    updatePhone("");
                    updatePassword("");
                    onChangeErrorMsg("");
                    window.location.href = '/';
                }
            }

            
        }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="https://res.cloudinary.com/dxaugnoxj/image/upload/v1702523131/samples/aquaryus15-j0TOma0mHdc-unsplash_hgvqa2.jpg" alt="" />
            </div>
    
            <div className='bg-zinc-800/10 shadow-md shadow-cyan-500/60 flex flex-col justify-center'>
                <form onSubmit={onSignUp} className='max-w-[400px] w-full mx-auto bg-white p-4 rounded-xl'>
                    <h2 className='text-4xl font-bold text-center py-6'>Emo energy</h2>
                    <div className='flex flex-col py-2'>
                        <label htmlFor = "userName">Username</label>
                        <input id = "userName" value={username} className='border p-2' type="text" onChange={(e) => {updateUsername(e.target.value)}} required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor = "email" >Email</label>
                        <input id = "email" value={email} className='border p-2' type="email" onChange={(e) => {updateEmail(e.target.value)}} required />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor = "phone" >Phone</label>
                        <input id = "phone" value={phone} className='border p-2' type="tel" onChange={(e) => {updatePhone(e.target.value)}} required />
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
                    <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>SignUp</button>
                    {
                        errorMsg !== "" && <p className=" text-red-600">*{errorMsg}</p>
                    }
                    <div className='flex flex-col w-full'>
                        <a href = "/login" className = "self-end  text-sky-600 hover:font-bold">Login to your account</a>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default SignupSection;