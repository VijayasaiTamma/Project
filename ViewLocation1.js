import React, { useEffect, useState } from "react";

const ViewLocation1 = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetching locations from the backend
        fetch("http://localhost:8083/api/locations") // Adjust the API URL if needed
            .then((response) => response.json())
            .then((data) => setLocations(data))
            .catch((error) => console.error("Error fetching locations:", error));
    }, []);

    return (
        <div className="locations-container">
            <h2>Available Locations</h2>
            <div className="cards">
                {locations.length > 0 ? (
                    locations.map((location) => (
                        <div key={location.id} className="card">
                            <h3>{location.name}</h3>
                            <p>{location.description}</p>
                            {/* If you have an image URL for locations */}
                            {location.image && (
                                <img src={location.image} alt={location.name} className="location-image" />
                            )}
                        </div>
                    ))
                ) : (
                    <p>No locations available</p>
                )}
            </div>
        </div>
    );
};

export default ViewLocation1;
