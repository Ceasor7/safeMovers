'use client';

import { useState } from 'react';

const RequestMeeting = () => {
  const [formData, setFormData] = useState({
    customerEmail: '',
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
    const response = await fetch('api/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const { success, error } = await response.json();

    if (success) {
      alert('Your Request has been sumitted Successfully');
    } else if (error) {
      console.error(error);
      alert('An Error occurred while submitting your message');
    }

    setSubmitting(false);
  };

  return (
    <div>
      <form className="mt-6 w-full">
        <label htmlFor="UserEmail" className="sr-only">
          {' '}
          Email{' '}
        </label>

        <div className="rounded-md border border-gray-100 sm:flex sm:items-center sm:gap-4">
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            placeholder="Your Email"
            onChange={handleInputChange}
            className="bg-white  text-black rounded p-2 w-full border mb-4"
            required
          />

          <button className="mt-1 w-full rounded bg-[#00008b] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#CC5500] sm:mt-0 sm:w-auto sm:shrink-0">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestMeeting;
