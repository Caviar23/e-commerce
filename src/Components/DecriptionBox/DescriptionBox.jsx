import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>E-commerce website is an online platform that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
                <p>
                    Ecommerce website design involves creating and launching a virtual store to sell products. We’re not talking about listing your items on a third-party online marketplace like eBay. This is your store, and you have creative control.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox;