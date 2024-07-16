import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);


  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    // Create User
    createUser(email, password) 
    .then(result => {
      console.log(result.user);
    })
    .catch(err => {
      console.error(err);
    })
    console.log(email, password);
  }


  const handleShowPassword = () => {
    const checkbox = document.getElementById('checkbox')
    const password = document.getElementById('pass');
    if (checkbox.checked) {
      password.type = 'text'
    }
    else {
      password.type = 'password'
    }
  }



  return (
    <div className="hero min-h-screen  hero-content">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl bg-slate-300 rounded-xl">
        <form onSubmit={handleRegister} className="card-body">
          <h2 className="text-3xl text-orange font-bold text-center">Sign Up</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-bold text-base">First Name</span>
            </label>
            <input type="text" name="fName" placeholder="First Name" id="fName" className="input text-white input-bordered" required />
            <label className="label">
              <span className="label-text text-black font-bold text-base">Last Name</span>
            </label>
            <input type="text" name="lName" placeholder="Last Name" id="lName" className="input text-white input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-bold text-base">Email</span>
            </label>
            <input type="email" name="email" placeholder="Email" id="email" className="input text-white input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black font-bold text-base">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" id="pass" className="input text-white input-bordered" required />
            <p onClick={handleShowPassword} className="mt-2"><input type="checkbox" name="" id="checkbox" /> Show Password</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-orange border-2 font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-white hover:border-orange hover:bg-orange">Register</button>
          </div>
          <p className="text-center">Already have an Account ? <Link to='/login' className="text-orange font-bold">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;