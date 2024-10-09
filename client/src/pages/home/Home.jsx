import { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import earring1 from '../../assets/earring/earring1.jpeg'
import earring2 from '../../assets/earring/earring2.jpeg'
import earring3 from '../../assets/earring/earring3.jpeg'
import necklace1 from '../../assets/necklace/necklace1.jpeg'
import necklace2 from '../../assets/necklace/necklace2.jpeg'
import necklace3 from '../../assets/necklace/necklace3.jpeg'
import necklace4 from '../../assets/necklace/necklace4.jpeg'
import ring1 from '../../assets/rings/ring1.jpeg'
import ring2 from '../../assets/rings/ring2.jpeg'
import ring3 from '../../assets/rings/ring3.jpeg'
import ring4 from '../../assets/rings/ring4.jpeg'
import Bracelets1 from '../../assets/Bracelets/Bracelets1.jpeg'
import Bracelets2 from '../../assets/Bracelets/Bracelets2.jpeg'
import Bracelets3 from '../../assets/Bracelets/Bracelets3.jpeg'
import Bracelets4 from '../../assets/Bracelets/Bracelets4.jpeg'
import banner from '../../assets/banner6.jpg'


const earring = [
  {
    id:1,
    img:earring1
  },
  {
    id:2,
    img:earring2
  },
  {
    id:3,
    img:earring3
  },
];
const necklace = [
  {
    id:1,
    img:necklace1
  },
  {
    id:2,
    img:necklace2
  },
  {
    id:3,
    img:necklace3
  },
  {
    id:4,
    img:necklace4
  },
];
const ring = [
  {
    id:1,
    img:ring1
  },
  {
    id:2,
    img:ring2
  },
  {
    id:3,
    img:ring3
  },
  {
    id:4,
    img:ring4
  },
];
const Bracelets = [
  {
    id:1,
    img:Bracelets1
  },
  {
    id:2,
    img:Bracelets2
  },
  {
    id:3,
    img:Bracelets3
  },
  {
    id:4,
    img:Bracelets4
  },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("earring");

  return (
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex justify-center items-center">
          <img className="w-full h-48 md:h-auto object-cover" src={banner} alt="" />
        </div>

        <div className=" w-10/12 mt-10 flex flex-col justify-between items-center ">
          <div className="md:w-6/12 flex flex-col justify-between items-center">
            <div className="w-full flex justify-center">
              <h1 className="font-semibold text-xl md:text-3xl">Trending Categories</h1>
            </div>
            <div className="w-full font-medium md:font-semibold text-sm md:text-lg flex justify-between mt-8 px-2">
            <button onClick={() => setActiveTab("earring")} className={`py-1 px-2 ${activeTab === "earring" ? "text-light border-b-2 border-light pb-1" : "text-black/60 hover:text-light"}`}>Earrings</button>
            <button onClick={() => setActiveTab("necklace")} className={`py-1 px-2 ${activeTab === "necklace" ? "text-light border-b-2 border-light pb-1" : "text-black/60 hover:text-light"}`}>Necklaces</button>
            <button onClick={() => setActiveTab("ring")} className={`py-1 px-2 ${activeTab === "ring" ? "text-light border-b-2 border-light pb-1" : "text-black/60 hover:text-light"}`}>Rings</button>
            <button onClick={() => setActiveTab("Bracelets")} className={`py-1 px-2 ${activeTab === "Bracelets" ? "text-light border-b-2 border-light pb-1" : "text-black/60 hover:text-light"}`}>Bracelets</button>
            </div>
          </div>

          <div className="min-h-[70vh] w-full my-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeTab === "earring" && (
                earring.map((earring) => (
                  <div key={earring.id} className="bg-white">
                    <img className="bg-transparent" src={earring.img} alt="image" />
                  </div>
                ))
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeTab === "necklace" && (
                necklace.map((necklace) => (
                  <div key={necklace.id} className="bg-white">
                    <img className="bg-transparent" src={necklace.img} alt="image" />
                  </div>
                ))
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeTab === "ring" && (
                ring.map((ring) => (
                  <div key={ring.id} className="bg-white">
                    <img className="bg-transparent" src={ring.img} alt="image" />
                  </div>
                ))
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {activeTab === "Bracelets" && (
                Bracelets.map((Bracelets) => (
                  <div key={Bracelets.id} className="bg-white">
                    <img className="bg-transparent" src={Bracelets.img} alt="image" />
                  </div>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
  );
};

export default Resume;
