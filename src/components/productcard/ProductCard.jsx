import React, { useContext } from 'react'
import myContext from '../context/data/myContext'
import pic13 from '../../mentoons ecommerce products/pic13.jpg'
import posterd from '../../mentoons ecommerce products/posterd.png'
import pic14 from '../../mentoons ecommerce products/pic14.jpg'
import pic3 from '../../images/pic3.jpg'


function ProductCard() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={pic3} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Mentoons</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>This is title of comic</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-black bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={pic13} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Mentoons</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>This is title of comic</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-black bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={posterd} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Mentoons</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>This is title of comic</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-black bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2">Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="p-4 md:w-1/4  drop-shadow-lg " >
                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="flex justify-center cursor-pointer" >
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={pic14} alt="blog" />
                            </div>
                            <div className="p-5 border-t-2">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '', }}>Mentoons</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '', }}>This is title of comic</h1>
                                {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ 500</p>
                                <div className=" flex justify-center">
                                    <button type="button" className="focus:outline-none text-black bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2" style={{ color: mode === 'dark' ? 'white' : '', }}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                    </div>

                    

                </div>

            </div>
        </section >

    )
}

export default ProductCard