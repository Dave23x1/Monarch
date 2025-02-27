import Image from "next/image";

export default function Login() {
  return (
    <section className="bg-[#2F2F2F] w-full h-screen">
      <div className="flex">
        <div>
          <div>
            <Image
              src="/images/BannerCover.jpeg"
              width={450}
              height={340}
              alt="BanncerCover"
            />
          </div>
        </div>

        <div>
          <h1>2</h1>
        </div>
      </div>
    </section>
  );
}
