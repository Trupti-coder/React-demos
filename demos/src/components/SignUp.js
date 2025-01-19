function SignUp(){
    return(
        <>
        <form>
            <div>
                Name:<input type="text" />
            </div>
            <div>
                Email:<input type="email" required />
            </div>
            <div>
                Password:<input type="password" required />
            </div>
        </form>
        </>
    );
}
export default SignUp;