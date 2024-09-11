import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css';
import axios from 'axios';

function AddQuestion() {
  const navigator = useNavigate();

  const [question, setContact] = useState({
    Question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    answer: ""
  });

  const handleChange = (e) => {
    setContact((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const addTask = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/api/add", question);
    console.log(res.status);

    if (res.status === 200) {
      navigator('/showquestion');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="profile mb-4">
        {/* Profile content if any */}
      </div>
      <div className="info bg-white p-6 rounded shadow-md">
        <div className="name mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Question:</label>
          <input
            name='Question'
            type="text"
            id='name'
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt1" className="block text-gray-700 font-medium mb-2">Option 1:</label>
          <input
            name='opt1'
            type="text"
            id='opt1'
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt2" className="block text-gray-700 font-medium mb-2">Option 2:</label>
          <input
            name='opt2'
            type="text"
            id='opt2'
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt3" className="block text-gray-700 font-medium mb-2">Option 3:</label>
          <input
            name='opt3'
            type="text"
            id='opt3'
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-gray-700 font-medium mb-2">Answer:</label>
          <input
            name='answer'
            type="text"
            id='answer'
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          id='add'
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Add Question
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
