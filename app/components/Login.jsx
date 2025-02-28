import Image from "next/image";
export default function Login() {
  return (
    <section className="bg-[#2F2F2F] w-full min-h-screen">
      <div className="flex gap-[50px] container mx-auto justify-center items-center pt-[50px]">
        <div>
          <Image
            src="/images/Banner.png"
            width={520}
            height={350}
            alt="banner"
          />
        </div>
        <div className=" pt-[70px] ">
          <div className=" h-[600px] w-[520px] font-serif border-2 border-[#646464] px-[40px] rounded-xl">
            <div className="pt-[50px]">
              <h2 className="text-[#989898] text-2xl">
                Log in to your account
              </h2>
              <p className="text-sm text-[#989898]">
                Don't have an account?{" "}
                <span className="text-[#5FA9FF]">Sign Up</span>
              </p>
            </div>
            <div className="my-[40px] ">
              <div className=" flex pt-[30px] justify-center ">
                <div className="bg-[#1E1E1E] py-[5px] w-[140px] rounded-lg  border-[#7a7a7a] border cursor-pointer">
                  <div className="flex items-center gap-[10px] px-[15px]">
                    <Image
                      src="/icons/Google.png"
                      width={40}
                      height={40}
                      alt="google-icon"
                    />
                    <p>Google</p>
                  </div>
                </div>
              </div>
              <div className=" flex items-center  my-[25px]">
                <hr className="flex-grow border-t-2 border-[#575757]" />
                <span className="px-[40px]">OR</span>
                <hr className="flex-grow border-t-2 border-[#575757]" />
              </div>
              <form>
                <div className="mb-6 relative">
                  <input
                    id="username"
                    type="text"
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 border border-[#7a7a7a] bg-[#1E1E1E] text-[#C6C6C6] rounded-lg focus:outline-none focus:border-gray-400"
                  />
                  <label
                    htmlFor="username"
                    className="absolute left-4 top-5 text-sm text-[#C6C6C6] transition-all duration-200 ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
                  >
                    Username
                  </label>
                </div>

                <div className="mb-2  relative">
                  <input
                    id="password"
                    type="password"
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 border border-[#7a7a7a] bg-[#1E1E1E] text-[#C6C6C6] rounded-lg focus:outline-none focus:border-gray-400"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-4 top-5 text-sm text-[#C6C6C6] transition-all duration-200 ease-in-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mb-5 my-[20px]">
                  <a
                    href="#"
                    className="text-[#C6C6C6] text-sm hover:text-gray-300"
                  >
                    Forgot account?
                  </a>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-[100px] cursor-pointer bg-[#1E1E1E] text-[#C6C6C6] py-[18px] border border-[#7a7a7a] rounded-lg font-medium uppercase tracking-wider hover:bg-[#292929]"
                  >
                    LOG IN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
