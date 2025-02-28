import Image from "next/image";

export default function Login() {
  return (
    <section className="bg-[#2F2F2F] w-full h-screen ">
      <div className="flex justify-center container mx-auto gap-[130px]">
        <div className="">
          <div className="absolute">
            <Image
              src="/images/BannerCover.jpeg"
              width={450}
              height={340}
              alt="BanncerCover"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/Banner.jpeg"
              width={350}
              height={250}
              className="animate-flag"
              alt="Banner"
            />
          </div>
        </div>

        <div className="border-2 border-[#7A7A7A] rounded-lg">
          <h1>Log in ti your account</h1>
          <p>Don't have an account? Sign Up</p>
          <form></form>
        </div>
      </div>
    </section>
  );
}
