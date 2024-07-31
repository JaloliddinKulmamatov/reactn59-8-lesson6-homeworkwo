import Header from "./components/Header";
import Points from "@/public/points.svg"
import Image from 'next/image';
import Profile from "./components/Profile";
import Services from "./components/Services";
import Cliboard from "@/public/clipboard-data.png";
import File from "@/public/file-earmark-medical.png";
import Calendar from "@/public/calendar3.png";
import Big from "@/public/big.png"


export default function Home() {
  return (
    <div className="mt-36 p-2">
      <Header />
      <Image className=" w-full mb-11" src={Big} alt="abc" />
      <div className="max-w-7xl m-auto">
        <h2 className="text-sm font-bold text-buttonColor mt-12 text-purple-700">
          WHAT WE OFFER
        </h2>
        <h3 className="text-5xl mt-5 font-bold mb-4">
          Agile focused business <br /> services and more.
        </h3>
        <Image src={Points} alt="abc"/>
        <div className=" grid grid-cols-2	 gap-10 mt-20 mb-10 ">
          <Profile />
          <Profile />
          <Profile />
          <Profile />
        </div>
      </div>
      <div className=" text-center">
        <h2 className=" text-purple-700 mb-4 font-bold">SERVICES</h2>
        <h3 className=" text-5xl font-bold mb-28">We provide or a huge <br /> list of services.</h3>
        <div className=" flex flex-wrap justify-center mb-28">
        <Services src={Cliboard}/>
        <Services src={File}/>
        <Services src={Calendar}/>
        </div>
      </div>
    </div>
  );
}