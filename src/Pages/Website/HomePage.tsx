import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="https://i.pinimg.com/564x/a4/a4/2b/a4a42bdae7c3666451aa505d437fb99a.jpg" className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                    <NavLink to="productdetail">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Chuck 70s High AllWhite
                    </NavLink>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">white</p>
                </div>
                <p className="text-sm font-medium text-gray-900">950.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Promotional information</h2>
    
          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://i.pinimg.com/564x/47/c7/6d/47c76d69700dfc71548fdcf99d449f10.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-full h-full object-center object-cover"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  20% off men's shoes
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">Promotion is applied to all men's footwear products... </p>
            </div>
    
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://i.pinimg.com/564x/47/c7/6d/47c76d69700dfc71548fdcf99d449f10.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="w-full h-full object-center object-cover"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Buy 5 get 1 free
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">When customers buy online, they will be offered incentives with 5 products poured on...</p>
            </div>
    
            <div className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img src="https://i.pinimg.com/564x/47/c7/6d/47c76d69700dfc71548fdcf99d449f10.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="w-full h-full object-center object-cover"/>
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  Free ship
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">Free shipping with products from 1,000,000, customers will be free...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default HomePage