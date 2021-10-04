import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css'
const Services = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="bg-color">
            <div className="container service-container mx-auto row g-4">
                {
                    products.map(product => <ServiceItem
                        key={product.key}
                        product={product}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;