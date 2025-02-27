import Image from "next/image";

export default function Login() {
  return (
    <section className="bg-[#2F2F2F] w-full h-screen ">
      <div className="flex ">
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

        <div>
          <h1>3</h1>
        </div>
      </div>
    </section>
  );
}
