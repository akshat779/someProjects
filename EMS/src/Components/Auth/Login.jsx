import React, { useState } from 'react';

function Login({handleLogin}) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
        
    }
    return ( 
        <div className="flex items-center justify-center h-screen w-full">
            <div className="border-2 rounded-xl border-emerald-600 p-20">
                <form 
                onSubmit={(e) => submitHandler(e)}
                className='flex flex-col items-center justify-center'>
                    <input value={email} required className='text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-4 px-5 placeholder:text-gray-400' type="email" placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)}/>
                    <input value={password} required className='text-white outline-none bg-transparent border-2 border-emerald-600 mt-3 rounded-full text-xl py-4 px-5 placeholder:text-gray-400' type="password" placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button className='mt-5 text-white outline-none   bg-emerald-600 rounded-full text-xl py-4 px-5 placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
     );
}

export default Login;