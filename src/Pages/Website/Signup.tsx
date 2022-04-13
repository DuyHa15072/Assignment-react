import {useForm, SubmitHandler} from 'react-hook-form';
import { signup } from '../../api/auth';
import { useNavigate } from 'react-router-dom'

type FormInputs = {
  name: string,
  phonenumber: number,
  address: string,
  email: string,
  password: string 
}
const Signup = () => {
  const {register, handleSubmit, formState} = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = data => {
    try {
      navigate('/signin');
      console.log(data);
      signup(data);
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="w-full flex flex-wrap">
    {/* Register Section */}
    <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
            <a href="#" className=" text-white font-bold text-xl p-4"></a>
        </div>
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-4xl text-[#6F4E37]">Sign Up.</p>
            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">name</label>
                <input type="text" {...register('name', {required: true})}   placeholder="NGUYEN VAN A" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="number" {...register('phonenumber', {required: true})}  placeholder="09...." autoComplete="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Address</label>
                <input type="text" {...register('address', {required: true})}  placeholder="Street, County, City" autoComplete="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label  className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" {...register('email', {required: true})} autoComplete="email" placeholder="abc@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <label  className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" {...register('password', {required: true})} placeholder="****"  autoComplete="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
              </div>

            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#6F4E37] hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
          </div>
        </div>
      </form>
            <div className="text-center pt-12 pb-12">
                <p>Already have an account? <a href="/signin" className="underline font-semibold text-[#6F4E37]">Log in here.</a></p>
            </div>
        </div>
    </div>
    {/* Image Section */}
    <div className="w-1/2 shadow-2xl">
        <img className="object-cover w-full h-screen hidden md:block" src="https://i.pinimg.com/564x/cb/62/0b/cb620bdee2c4a035824dfe4897b3c5aa.jpg" alt="Background" />
    </div>
</div>


)
}
export default Signup