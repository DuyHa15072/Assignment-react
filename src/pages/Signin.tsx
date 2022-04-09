import React from 'react'




const Signin = () => {
    return (
        <div className="w-full flex flex-wrap">
        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                <a href="#" className=" text-white font-bold text-xl p-4"></a>
            </div>
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                <p className="text-center text-4xl text-[#6F4E37]">Sign in.</p>
                <form className="flex flex-col pt-3 md:pt-8">
                    <div className="flex flex-col pt-4">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <div className="flex flex-col pt-4">
                        <label htmlFor="password" className="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    </div>
                    <input type="submit" defaultValue="Log In" className="bg-[#6F4E37] text-white font-bold text-lg hover:bg-amber-900 p-2 mt-8" />
                </form>
                <div className="text-center pt-12 pb-12">
                    <p>Don't have an account? <a href="/signup" className="underline font-semibold text-[#6F4E37]">Register here.</a></p>
                </div>
            </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2 shadow-2xl">
            <img className="object-cover w-full h-screen hidden md:block" src="https://i.pinimg.com/564x/cb/62/0b/cb620bdee2c4a035824dfe4897b3c5aa.jpg" />
        </div>
    </div>

    )
}

export default Signin