import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const SignIn = () => {

    const {signInUsers} = useContext(AuthContext)
    const handleSignIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signInUsers(email, password)
        .then(result=>{
            console.log(result.user)

            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const logInInfo = {email, lastSignInTime}
            fetch('http://localhost:5000/users',{
                method:"PATCH",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(logInInfo)
            
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Sign In</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign In</button>
        </div>
        <p>New in this site? Please <Link to="/signUp" className='underline text-blue-600'>Sign Up</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;