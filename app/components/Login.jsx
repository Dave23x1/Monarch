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
          <div className=" h-[600px] w-[520px] font-serif border-2 border-[#7A7A7A] px-[40px] rounded-xl">
            <div className="pt-[50px]">
              <h2 className="text-[#989898] text-2xl">
                Log in to your account
              </h2>
              <p className="text-sm text-[#989898]">
                Don't have an account?{" "}
                <span className="text-[#5FA9FF]">Sign Up</span>
              </p>
            </div>
            <div className=" flex pt-[30px] justify-center ">
              <div className="bg-[#1E1E1E] py-[5px] w-[140px] rounded-lg  border-[#C6C6C6] border ">
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
          </div>
          <form></form>
        </div>
      </div>
    </section>
  );
}
