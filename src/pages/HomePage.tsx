import React from 'react'
import { IProduct } from '../types/productType'

type ProductListProps = {
    products: IProduct[],
  }

const HomePage = (props: ProductListProps) => {
    return (
        <div>
            <div className="banner  "><img src="https://img.freepik.com/free-photo/top-view-cup-coffee-with-copy-space_23-2148255031.jpg?w=1380&t=st=1648827737~exp=1648828337~hmac=97180c0dbb794ce0f26feeab330127428470cb5d3b2f91f26f1a2f7a14871575" alt="" className='mx-auto'/></div>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className=" text-[40px] mb-3">San Pham</h2>
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        
                        {props.products.map((item) => {
                                    return <a href="#" className="group">
                                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                        <img src={`${item.img}`} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
                                </a>                        
                              })}

                        {/* More products... */}
                    </div>

                </div>
            </div>
            
            <div className='px-[35px]'>
                <h2 className="text-[40px] mb-3">Blogs</h2>
                <div className="flex flex-wrap justify-between -mx-6">
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <img src="https://i.pinimg.com/564x/d4/d0/7e/d4d07eea397f659ca7d91a3ee99e825f.jpg" className="h-full w-full rounded-t pb-6" />
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            <div className="flex items-center justify-between">
                                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                            </div>
                        </div>
                    </div>
                    {/*1/2 col */}
                    <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                        <div className="flex-1 flex-row bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                                <img src="https://i.pinimg.com/564x/a4/2c/91/a42c91c2808a6b864a1ee6ff4211e57a.jpg" className="h-full w-full rounded-t pb-6" />
                                <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                                <div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
                                <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            <div className="flex items-center justify-between">
                                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" />
                                <p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage