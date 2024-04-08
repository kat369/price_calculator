"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const datum = [
    {
      roomtype: "Single",
      price: 100,
      service: 10,
      available: 5,
    },
    {
      roomtype: "Double",
      price: 150,
      service: 15,
      available: 10,
    },
    {
      roomtype: "Dulex",
      price: 200,
      service: 15,
      available: 8,
    },
    {
      roomtype: "Ultra Dulex",
      price: 300,
      service: 30,
      available: 5,
    },
    {
      roomtype: "Prime Suite",
      price: 500,
      service: 40,
      available: 3,
    },
    {
      roomtype: "Elite Suite",
      price: 800,
      service: 50,
      available: 3,
    },
    {
      roomtype: "Executive Suite",
      price: 1000,
      service: 100,
      available: 5,
    },
  ];

  const [booking, setbooking] = useState({
    availability: 0,
    roomType: "",
    roomFair: 0,
    roomCount: 1,
    serviceCost: 0,
    totalDays: 1,
    totalCost: 0,
    overallCost:0
  });

  useEffect(() => {
    
    // wright initial api muu!!!
    
  }, []);

  let FairCalculate = () => {
    try {
      // wright api call here muu!!!
      alert(`Totally Booked ${booking.roomCount} ${booking.roomType} for ${booking.totalDays} days for the total fair of  ₹ ${booking.overallCost}`);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(booking);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h2 className="p-5 text-2xl">Booking Page</h2>
        <hr />
        <label>Room Type:</label>
        <div className="p-2 w-3/12 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black">
          <select
            value={booking.roomType}
            onChange={(e) => {
              datum.map((room) => {
                if (room.roomtype === e.target.value)
                  var updatedvalue = {
                    roomType: e.target.value,
                    roomFair: room.price,
                    serviceCost: room.service,
                    availability: room.available,
                    totalCost: room.price + room.service,
                    overallCost:((room.price + room.service)* booking.roomCount)*booking.totalDays,
                  };
                setbooking((booking) => ({ ...booking, ...updatedvalue }));
              });
            }}
          >
            <option> select any room</option>
            {datum.map((room) => {
              return (
                <option value={room.roomtype}>
                  {room.roomtype}:{room.price}/day
                </option>
              );
            })}
          </select>
        </div>
        <div>*Excluding Service Cost and Tax</div>
        <div className="w-3/12 flex flex-row items-center justify-center py-2 ">
          <div className="flex flex-row items-center justify-between p-2 mr-1 w-6/12 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black">
            <button onClick={()=>{setbooking((booking) => ({ ...booking, roomCount:booking.roomCount-- }))}}>-</button>
            <div>Rooms: {booking.roomCount}</div>
            <button onClick={()=>{setbooking((booking) => ({ ...booking, roomCount:booking.roomCount++ }))}}>+</button>
          </div>
          <div className="flex flex-row items-center justify-between p-2 mr-1 w-6/12 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black">
            <button onClick={()=>{setbooking((booking) => ({ ...booking, totalDays:booking.totalDays-- }))}}>-</button>
            <div>Days: {booking.totalDays}</div>
            <button onClick={()=>{setbooking((booking) => ({ ...booking, totalDays:booking.totalDays++ }))}}>+</button>
          </div>
        </div>

        <div className="w-3/12 py-2">
          <h2 className="px-5 text-2xl">Booking Details</h2>
          <diV>Fair: ₹ {booking.roomFair}/day</diV>
          <diV>Service Charge: ₹ {booking.serviceCost}/day</diV>
          <diV>Total Rooms:{booking.roomCount}</diV>
          <diV>Total Days:{booking.totalDays}</diV>
          <diV>Total Cost: ₹ {booking.totalCost}</diV>
          <diV>Overall Cost:  ₹ {booking.overallCost}</diV>
        </div>
        <button
          onClick={FairCalculate}
          className="p-2 w-3/12 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        >
          Book Now
        </button>
        <div> Having Issue in Booking?</div>
      </div>
    </>
  );
}
