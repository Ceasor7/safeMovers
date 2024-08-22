'use client';
import { useState } from 'react';

function Estimate() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    movingfromlocation: '',
    movingtolocation: '',
    movingfromhousesize: '',
    movingtohousesize: '',
    planneddates: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    //send email
    const response = await fetch('api/estimate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      alert('Your Message has been sumitted');
    } else if (error) {
      console.error(error);
      alert('An Error occurred while submitting your message');
    }

    setSubmitting(false);
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4 text-left">
      <h1 className="my-8 md:mt-12 font-bold text-4xl">Get A Free Estimate</h1>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full mb-4">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-black mb-2">
              Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              placeholder="Your Name"
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="customerEmail"
              name="customerEmail"
              placeholder="Your Email"
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full mb-4">
          <div className="flex flex-col w-full">
            <label htmlFor="movingFromLocation" className="text-black mb-2">
              Moving From Location
            </label>
            <input
              type="text"
              id="movingFromLocation"
              name="movingfromlocation"
              placeholder="Location"
              onChange={handleInputChange}
              className="bg-white text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="movingToLocation" className="text-black mb-2">
              Moving To Location
            </label>
            <input
              type="text"
              id="movingToLocation"
              name="movingtolocation"
              placeholder="Location"
              onChange={handleInputChange}
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="movingFromHouseSize" className="text-black mb-2">
              Moving From House Size
            </label>
            <input
              type="text"
              id="movingFromHouseSize"
              name="movingfromhousesize"
              placeholder="# Rooms"
              onChange={handleInputChange}
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="movingToHouseSize" className="text-black mb-2">
              Moving To House Size
            </label>
            <input
              type="text"
              id="movingToHouseSize"
              name="movingtohousesize"
              placeholder="# Rooms"
              onChange={handleInputChange}
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full">
          <div className="flex flex-col ">
            <label htmlFor="plannedDates" className="text-black mb-2">
              Planned Dates
            </label>
            <input
              type="date"
              id="plannedDates"
              name="planneddates"
              onChange={handleInputChange}
              className="bg-white  text-black rounded p-2 w-full border mb-4"
              required
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#FF6F00] hover:bg-transparent text-white hover:text-black hover:border border-[#FF6F00] font-bold py-2 px-4 rounded w-full mt-6"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Estimate;
