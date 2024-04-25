import LoginSide from "./assets/images/bg.jpg";
import UserIcon from "./assets/icons/icons8-user-64.png";
import PadLock from "./assets/icons/icons8-locked-padlock-78.png";

function Login2() {
  return (
    <>
      <div className=" flex">
        <div
          className=" w-3/5 h-screen"
          style={{
            backgroundImage:
              "linear-gradient(15deg, rgba(62,0,0,0.75) 0%, rgba(124,0,0,0.7540266106442577) 100%), url(" +
              LoginSide +
              ")",
            backgroundSize: "cover",
          }}>
        </div>


        <div className="w-full h-screen grid place-items-center font-Rubik">
          <div className="grid place-items-center w-[800px] h-[700px] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <form action="" method="post">
            <div>

              <h1 className="text-[50px] font-bold text-primary text-center mb-[10px]">Login As Admin</h1>
              <p className="text-[16px] text-Secondary text-center mb-[50px]">Login using your Username and Password</p>
              <div className=" border-[1px] flex w-[400px] rounded-full px-[20px] h-[40px] mb-[20px]">
                <input
                  className=" outline-none w-[300px] grid place-items-start"
                  type="text"
                  placeholder="Enter UserName"
                />
                <img className="relative left-[33px] top-[6px] w-[25px] h-[25px]" src={UserIcon} alt="" />
              </div>

              <div className=" border-[1px] border-primary flex w-[400px] rounded-full px-[20px] h-[40px] mb-[20px]">
                <input
                  className=" outline-none w-[300px] grid place-items-start"
                  type="password"
                  placeholder="Enter Password"/>
                <img className="relative left-[30px] top-[4px] w-[30px] h-[30px]" src={PadLock} alt="" />
              </div>

              <div className=" flex space-x-2 mb-[30px] text-Secondary">
                <input type="checkbox" className=" cursor-pointer text-primary"/>
                <label>Remember me</label>
                <div>
                  <a href="#" className="relative left-[90px] hover:underline">Forgot your Password?</a>
                </div>
              </div>

              <div className="flex justify-center">
                <button type="submit" className="border-[1px] w-[400px] rounded-full h-[40px] bg-primary text-forth transition-colors delay-[0.02s] hover:bg-Secondary">Login</button>
              </div>             

            </div>
          </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Login2;
