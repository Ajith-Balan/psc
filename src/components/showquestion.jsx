


   import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './phonebook.css';
import axios from 'axios';

function ShowQuestion() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/get");
    console.log(res.data);
    setData([...res.data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="contacts-header flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">PSC</h1>
          <Link to={'/addquestion'}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              +
            </button>
          </Link>
        </div>
        
        <div className="contact-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((dt, index) => (
            <Link to={`/updatequestion/${dt._id}`} className="ln" key={dt._id}>
              <div className="contact bg-white p-4 rounded shadow hover:shadow-lg transition duration-200">
                <div className="question text-lg font-semibold mb-2">{dt.Question}</div>
                <div className="option mb-1">{dt.opt1}</div>
                <div className="option mb-1">{dt.opt2}</div>
                <div className="option mb-1">{dt.opt3}</div>
                <div className="answer text-green-500 font-medium">{dt.answer}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowQuestion;



































