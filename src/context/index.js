"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";


export const UserContext = createContext(null);

export const WrapperContext = ({ children }) => {
    const [isPassengerOpen, setPassengerOpen] = useState(false);
    const [passengers, setPassengers] = useState({ adult: 1, child: 0, infant: 0 });
    const [tripType, setTripType] = useState(1);
    const [formData, setFormData] = useState({
        origin: "DEL",
        destination: "BOM",
        departureDate: "2025-07-13",
        returnDate: "2025-07-27",
        currencyCode: 'INR',
        cabin: 'ECONOMY',
    });
    const [loading, setLoading] = useState(false);
    const [searchFlightData, setSearchFlightData] = useState([]);  

    const router = useRouter();

    console.log(searchFlightData)

    const updateCount = (type, delta) => {
        setPassengers((prev) => ({
        ...prev,
        [type]: Math.max(0, prev[type] + delta),
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = {
            origin: formData.origin,
            destination: formData.destination,
            departureDate: formData.departureDate,
            returnDate: tripType === 1 ? formData.returnDate : null,
            currencyCode: formData.currencyCode,
            cabin: formData.cabin,
            tripType: tripType, 
            adults: passengers.adult,
            children: passengers.child,
            infants: passengers.infant,
        };

        console.log("req body: ", requestBody);

        const { origin, destination, departureDate, returnDate } = requestBody;

        if(!origin || !destination || !departureDate){
            alert("All fields are mandatory");
            setLoading(false);
        }
        else{
            try {
                setLoading(true);
                const response = await fetch(`https://flight-api.acedigitalsolution.com/flight-offers/v1/get-flight-searches`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(requestBody)
                });
                const result = await response.json();
                const flightDataResult = result.results;
                setSearchFlightData(flightDataResult);
                router.push("/flightResult");
                setLoading(false);
                setFormData({
                    origin: '',
                    destination: '',
                    departureDate: '',
                    returnDate: '',
                    currencyCode: 'INR',
                    cabin: 'ECONOMY',
                })
                // console.log("flight results: ", result.results[0]);
            } catch (error) {
                console.log("Error in fetch: ", error);
                setLoading(false);
            }
        }
    };



    return (
        <UserContext.Provider value={{formData, isPassengerOpen, setPassengerOpen, passengers, handleChange, setTripType, tripType, handleSubmit, updateCount, searchFlightData, loading}}>
            {children}
        </UserContext.Provider>
    )
}