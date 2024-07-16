import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    // Login
    login(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfull",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch(() => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login Failed!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
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
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-3xl text-orange font-bold text-center">Login</h2>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover hover:text-orange text-orange font-bold text-base">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline text-orange border-2 font-bold transition ease-in-out delay-150 duration-300 hover:scale-110 hover:text-white hover:border-orange hover:bg-orange">Login</button>
          </div>

          <p className="text-center">Do not have an Account ? <Link to='/signUp' className="text-orange font-bold">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;