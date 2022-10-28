import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import "./BoodDetails.css";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const BoodDetails = () => {
    const datas = useLoaderData();
    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: 23.739302100290843,
        lng:  90.39579743900444
    };


    return (
        <div className='hotel-container'>
            <div>
                {
                    datas.map(data => <div key={data.id}>
                        <div className='hotel-desc'>
                            <div className='hotel-img'>
                                <img src={data.img} alt="" />
                            </div>
                            <div>
                                <h3>{data.title}</h3>
                                <p>{data.desc}</p>
                                <p><span><FaStar/>{data.view}</span><span>${data.price}</span></p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>)
                }
            </div>
            <div>
                <LoadScript
                    googleMapsApiKey="AIzaSyB87IE96d47ey86smzlN15AWopw_nAkIw0"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        <Marker
                            position={center}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default BoodDetails;