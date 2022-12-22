import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="grid grid-cols-12 mb-32">
            <div className="col-span-6">
            <figure className='relative'>
                 <img src={person} className='w-[473px] h-[460px] rounded-lg' alt="Album" />
                 <img src={parts} className='w-[327px] h-[332px] border-8 border-white absolute left-[200px] top-[210px]' alt="Album" />
             </figure>
            </div>
            <div className="col-span-6">
                <h3 className="text-sm text-orange-500 font-bold">About Us</h3>
                <h4 className="text-3xl font-bold w-1/2 mt-5 mb-8">
                We are qualified & of experience in this field
                </h4>
                <div className="text-[#737373] w-3/4 leading-7">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="text-[#737373] w-3/4 leading-7 mt-5 mb-8">
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <button className="btn bg-[#FF3811] border-0 mr-5">Discover More</button>
            </div>
       </div>
//         <div className="card lg:card-side bg-base-100 shadow-xl pb-32">
//             <figure className='relative'>
//                 <img src={person} className='w-[473px] h-[460px] rounded-lg' alt="Album" />
//                 <img src={parts} className='w-[327px] h-[332px] border-8 border-white absolute left-[200px] top-[210px]' alt="Album" />
//             </figure>
//   <div className="card-body">
//     <h2 className="card-title">New album is released!</h2>
//     <p>Click the button to listen on Spotiwhy app.</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Listen</button>
//     </div>
//   </div>
// </div>
    );
};

export default About;