

export default function Login() {
  return (
    <div className=" flex-column justify-center items-center border border-blue-300">
        <h1 className="text-center">Login page</h1>
        <form className="border border-red-600 p-10 ">
            <div className="mb-6 mt-6">
            <label htmlFor="email" className="mb-2 text-sm  font-medium text-gray-900 "> Email</label>
        <input type="email" name="email" id="email" placeholder="input email " className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5 w-full focus:outline-none focus:border-blue-600" required/>
            </div>
       
      <div className="mb-6 ">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder="input password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm p-5  w-full focus:outline-none focus:border-blue-600" required/>
      </div>

      <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 text-center">Login</button>
      
      </form>
     
    </div>
  )
}
