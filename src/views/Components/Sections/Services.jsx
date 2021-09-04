import React from 'react'
import './Services.scss';
function Services() {
    return (
        <div className='services'>
            <div className='service-cards'>
                <img src="https://lh3.googleusercontent.com/proxy/Nxg-Aasmdd3tOpwQggUqUQGtsSmpCK4mSVLWktx5ncNJs6owYMt9kR4T2xidEwuLP9nQQpT1MLktTVqvLYaIqTpfc9ideHEQdF18LVz7B567zLdtfmfPUm13uQOfnUz_qHIOM8m1QdQ" alt="" id="top-image" />
                <h3>CAD Drafting</h3>
            </div>
            <div className='service-cards'>
                <img src="https://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-architectural-sketching-10-architecture-sketching-tips.jpg" alt="" id="top-image" />
                <h3>Pre-Bid Design</h3>
            </div>
            <div className='service-cards'>
                <img src="https://static.designeverest.com/static/images/blog/blog91.jpg" alt="" id="top-image" />
                <h3>Permit Design</h3>
            </div>
            <div className='service-cards'>
                <img src="https://www.webuildcs.com/wp-content/uploads/Construction-As-Built-Plans.jpg" alt="" id="top-image" />
                <h3>As-Built Drawings</h3>
            </div>
        </div>
    )
}

export default Services
