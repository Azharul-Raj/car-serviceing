import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc,setIsAsc]=useState(true)

  useEffect(() => {
    fetch(`https://server-carservice.vercel.app/services?order=${isAsc?'asc':'dsc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, [isAsc]);
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-sm text-orange-500 font-bold">Services</h3>
        <h4 className="text-3xl font-bold mt-5 mb-8">Our Services Area</h4>
        <div className="text-[#737373] leading-7 w-3/5">
          <p className="text-center">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn" onClick={()=>setIsAsc(!isAsc)}>{isAsc?'L to H': 'H to L'}</button>
        </div>
      <div className="grid grid-cols-3 gap-6 mt-12">
        
              {
                  services.map(service=><Service key={service._id} service={service}/>)
              }
          </div>
    </div>
  );
};

export default Services;
