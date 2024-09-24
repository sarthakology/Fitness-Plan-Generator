import React from 'react';

const Form = ({ setFormData, setFormStatus }) => {
  const [formData, setLocalFormData] = React.useState({
    age: '',
    weight: '',
    heightFeet: '',
    heightInches: '',
    gender: 'male',
    workoutPlanType: 'gym',
    otherInformation: 'none',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const description = `Create a ${formData.workoutPlanType} plan for a ${formData.gender} with age ${formData.age}, height ${formData.heightFeet} feet ${formData.heightInches} inches, weight ${formData.weight} kg. Additional information: ${formData.otherInformation}.`;

    setFormData(description); // Pass the descriptive string to parent
    console.log('Form Data:', description); // Print form data to the console
    setFormStatus(1);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-black-and-white-gym-room-with-a-row-of-equipment-image_2911173.jpg)' }}
    >
      <div className="max-w-lg w-full p-8 bg-white bg-opacity-75 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">
          Fitness Information Generator
        </h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-semibold mb-1">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-semibold mb-1">
              Weight (kg):
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              value={formData.weight}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Height:</label>
            <div className="flex space-x-4">
              <input
                type="number"
                name="heightFeet"
                placeholder="Feet"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                value={formData.heightFeet}
                onChange={handleChange}
              />
              <input
                type="number"
                name="heightInches"
                placeholder="Inches"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                value={formData.heightInches}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Gender:</label>
            <select
              name="gender"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">Plan Type:</label>
            <select
              name="workoutPlanType"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              value={formData.workoutPlanType}
              onChange={handleChange}
            >
              <option value="gym workout plan">Gym Workout Plan</option>
              <option value="home workout plan">Home Workout Plan</option>
              <option value="morning cardio plan">Morning Cardio Plan</option>
              <option value="diet plan">Diet Plan</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="otherInformation" className="block text-gray-700 font-semibold mb-1">
              Other Information:
            </label>
            <input
              type="text"
              id="otherInformation"
              name="otherInformation"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
              value={formData.otherInformation}
              onChange={handleChange}
            />
            <p className="text-m text-gray-500 mt-1">Other Information Example:</p>
            <p className="text-sm text-gray-500">I have back pain</p>
            <p className="text-sm text-gray-500">benefits of creatine</p>
            <p className="text-sm text-gray-500">I'm allergic to peanuts</p>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
