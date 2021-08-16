import React from 'react'
import '../../../assets/css/SliderSection.css';
export default function SliderSection() {
    return (
        <div className='main-div'>
            <div className='containers' style={{backgroundImage:`url(https://static.wixstatic.com/media/a9c4c85a01ea44aca2e6ca85d212cc60.jpg/v1/crop/x_581,y_0,w_3426,h_3444/fill/w_284,h_286,al_c,q_80,usm_0.66_1.00_0.01/Architectural%20Plans.webp)`}}>
              <div className='container-child'>
                <h4>Pre-bid Estimation</h4>
                <p>Manage all your residential and commercial fire protection proposal designs with GoIGNIS</p>
              </div>
            </div>
            <div className='containers' style={{backgroundImage:`url(https://static.wixstatic.com/media/fabcbe0da8494d1db64d284d3336461f.jpg/v1/crop/x_242,y_0,w_2144,h_2000/fill/w_287,h_268,al_c,q_80,usm_0.66_1.00_0.01/Notary%20Stamps.webp)`}}>
             <div className='container-child'>
                <h4>Permit Designs</h4>
                <p>Get detailed Permit Designs made with our experienced engineers</p>
             </div>
            </div>
            <div className='containers' style={{backgroundImage:`url(https://static.wixstatic.com/media/1d48d8c57a7449499b2cecf09ceda9c1.jpg/v1/crop/x_871,y_1,w_4366,h_4031/fill/w_296,h_273,al_c,q_80,usm_0.66_1.00_0.01/Business%20Meeting.webp)`}}>
            <div className='container-child'>
                <h4>Grow your Business</h4>
                <p>Make life easier by monitoring and assigning projects to GoIGNIS</p>
            </div>
            </div>
        </div>
    )
}
