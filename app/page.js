import Image from "next/image";
import Navbar from "./(customComponents)/Navbar/Navbar";
import Hamkorlar from "./(customComponents)/Hamkorlar/Hamkorlar";
import News from "./(customComponents)/News/News";
import Taqvim from "./(customComponents)/Taqvim/Taqvim";
import CounterSection from "./(customComponents)/CounterSection/CounterSection";
import Students from "./(customComponents)/Students/Students";
import Footer from "./(customComponents)/Footer/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="main_page pt-[16vh] h-screen flex items-stretch justify-center relative">
        <video src="/Impuls-Medical-Institute.mp4" autoPlay loop muted className="border absolute w-full h-full object-cover left-0 top-0"></video>
        <div className="flex gap-5 text-white w-full justify-around items-center transform translate-y-[30%]">
          <Link
            className="py-2 px-14 bg-[--brand_color] rounded-full text-2xl"
            href="#"
          >
            Hujjat topshirish
          </Link>
          <Link
            className="py-2 px-14 bg-[--brand_color] rounded-full text-2xl"
            href="#"
          >
            Tayorlov kurslari
          </Link>
          <Link
            className="py-2 px-14 bg-[--brand_color] rounded-full text-2xl"
            href="#"
          >
            Umumta'lim kursi
          </Link>
          <Link
            className="py-2 px-14 bg-[--brand_color] rounded-full text-2xl"
            href="#"
          >
            O'qishni ko'chirish
          </Link>
        </div>
      </div>
      <div className=" h-screen relative">
        <Hamkorlar />
        <News />
        <Taqvim />
        <CounterSection />
        <Students />
        <Footer />
      </div>
    </div>
  );
}
