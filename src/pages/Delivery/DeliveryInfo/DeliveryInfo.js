// import React from 'react'
// import {BsFillStartFill} from 'react-icons/bs'

// function DeliveryInfo() {
//   return (
//     <div>DeliveryInfo</div>
//   )
// }

// export default DeliveryInfo

import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

import './DeliveryInfo.css'

const DeliveryInfo = () => {
  return (
    <div className='delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div className='description'>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            Order thru <span>DoorDash</span>
                        </h3>
                    </div>

                    <p>You will get a $10 off on your first order of a minimum $30 when you would use DoorDash to order from us.</p>
                </div>

                <div className='description'>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                            Order thru <span>UberEats</span>
                        </h3>
                    </div>

                    <p>You can order through UberEats and get buy 2 get 1 free on your first Order. So, what's the delay?</p>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color="#c3512f" />
                        <h3 className='heading-tertiary'>
                           Our <span> Own Service </span>
                        </h3>
                    </div>

                    <p> Our House Service only delivers on Saturday and Sunday if you order over $40 and for free. Otherwise, you can always drop by!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryInfo