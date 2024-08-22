import React from 'react'
import second from '../../public/element.png'
import l1 from '../../public/logoicon (1).png'
import l2 from '../../public/Frame.png'
import l3 from '../../public/Frame (2).png'
import l4 from '../../public/Frame (1).png'
import l5 from '../../public/logoicon (5).png'
import l6 from '../../public/logoicon (6).png'
const About = () => {
    return (
        <div className='py-32 pb-9'>
            <div className='max-w-screen-xl mx-auto flex justify-between gap-x-[102px]'>

                <div className=" bg-hero2 bg-cover   bg-center">
                    <div className="relative">
                        <img className=' absolute  w-[450px] rounded-lg top-[40%] left-4 w-[450px] rounded-lg top-0 left-0' src="https://www.creativeitinstitute.com/images/course/course_1662724358.jpg" alt="" />
                    </div>
                    <div className="relative">
                        <img className='rounded-2xl ' src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg" alt="" />
                    </div>
                </div>

                <div className="mx-auto items-center">
                    <img className='mx-auto mb-4' src={second} alt="" />
                    <h1 className='font-bold text-4xl text-center '>Who We Are?</h1>
                    <p className='w-[442px] text-[18px] font-paprika mx-auto py-4'>We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, </p>
                    <p >Join the 10.000+ Companys Trusting </p>
                    <div className="grid grid-cols-3 gap-4 mt-5 ">
                        <img src={l1} alt="" />
                        <img src={l2} alt="" />
                        <img src={l3} alt="" />
                        <img src={l4} alt="" />
                        <img src={l5} alt="" />
                        <img src={l6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About