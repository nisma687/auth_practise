import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./providers/AuthProviders";


const Login = () => {
    const[error,setError]=useState(null);
    const {signIn,signInWithGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleGoogleLogin= ()=>{
        signInWithGoogle()
        .then(res=>{
            console.log(res.user);
            navigate('/');
        })
        .catch(err=>{
            console.log(err);
            setError(err.message);
        })

    }
    const handleLogin=e=>
    {
        e.preventDefault();
        console.log(e);
        setError('');
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        // singinuser
        signIn(email,password)
        .then(res=>{
            console.log(res.user);
            e.target.reset();
            navigate('/');
        })  
        .catch(err=>{
            console.log(err);
            setError(err.message);
        })
        
        // required thing to do
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        
      <form 
      onSubmit={handleLogin}
      className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>
        }
        <p className="ml-2 text-center
         text-blue-500
         mb-5">New to this site?<Link to="/register">
            <button className="btn btn-link">Please create a account first</button>
            </Link> </p>
            <p><button onClick={handleGoogleLogin} className="btn btn-ghost">Google</button></p>
    </div>
  </div>
</div>
    );
};

export default Login;