import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getQuestion = async () => {
    const res = await axios.get(`http://localhost:3000/api/getforedit/${id}`);
    setData(res.data);
  };

  const update = async () => {
    const res = await axios.patch(`http://localhost:3000/api/update/${id}`, data);
    if (res.status === 201) {
      navigate('/showquestion');
    }
  };

  const deleteQuestion = async () => {
    const res = await axios.delete(`http://localhost:3000/api/delete/${id}`);
    if (res.status === 200) {
      navigate('/showquestion');
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="profile mb-4">
        {/* Profile content if any */}
      </div>
      <div className="info bg-white p-6 rounded shadow-md">
        <div className="name mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Question:</label>
          <input
            name="Question"
            type="text"
            id="name"
            onChange={handleChange}
            value={data.Question || ''}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt1" className="block text-gray-700 font-medium mb-2">Option 1:</label>
          <input
            name="opt1"
            type="text"
            id="opt1"
            onChange={handleChange}
            value={data.opt1 || ''}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt2" className="block text-gray-700 font-medium mb-2">Option 2:</label>
          <input
            name="opt2"
            type="text"
            id="opt2"
            onChange={handleChange}
            value={data.opt2 || ''}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="opt3" className="block text-gray-700 font-medium mb-2">Option 3:</label>
          <input
            name="opt3"
            type="text"
            id="opt3"
            onChange={handleChange}
            value={data.opt3 || ''}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block text-gray-700 font-medium mb-2">Answer:</label>
          <input
            name="answer"
            type="text"
            id="answer"
            onChange={handleChange}
            value={data.answer || ''}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex space-x-4">
          <button
            id="update"
            onClick={update}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Update
          </button>
          <button
            id="delete"
            onClick={deleteQuestion}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateQuestion;
