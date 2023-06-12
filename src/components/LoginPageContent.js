import { Link, useNavigate } from "react-router-dom";

const LoginPageContent = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/loginPage"); 
  };

  return (
    <article>
      <header>
        <h4>Login</h4>
      </header>

      <section className="inputCredentials" >
        <div className="inputEmail">
          <h6>PLEASE ENTER YOUR EMAIL</h6>
          <input type="email" name="email" id="" />
        </div>

        <div className="inputPassword">
          <h6>PLEASE ENTER YOUR PASSWORD</h6>
          <input type="password" name="password" id="" />
        </div>
      </section>

      <section>
        <div>
          <button type="submit" onClick={handleLogin}>
            LOGIN
          </button>
        </div>
        <div>
          <Link className="SignupLink" to="/SignInPage">
            SignUp
          </Link>
        </div>
      </section>
    </article>
  );
};

export default LoginPageContent;