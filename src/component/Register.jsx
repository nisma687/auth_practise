import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";


const Register = () => {
    const[error,setError]=useState(null);
    const {createUser}=useContext(AuthContext );
    

    const handleRegister=e=>
    {
        e.preventDefault();
        console.log(e);
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        // console.log(email,password,name);

        // createuser
        createUser(email,password)
        .then(result=>
          {
            console.log(result.user);
          })
        .catch(error=>{
            setError(error.message);
        })



        // required thing to do
        if(!email || !password)
        {
            setError("Please fill all the details");
            return;
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
         
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              
            <form 
            onSubmit={handleRegister}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name"
                name="name"
                 className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email"
                name="email"
                 className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password"
                name="password"
                 className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>
              }
              <p className="ml-2 text-center
               text-blue-500
               mb-5">Already Have an account?<Link to="/login">
                  <button className="btn btn-link">Please go to login page</button>
                  </Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Register;