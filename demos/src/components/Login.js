function Login(){
    return(
        <>
        <form>
            <h3>Login</h3>
            <div>
                Email:<input type="email" required />
            </div>
            <div>
                Password:<input type="password" required/>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </>
    );
}
export default Login;