import { useEffect, useState } from 'react';
import './phonebook.css'; // Ensure this is necessary, or you might rely solely on Tailwind CSS
import Layout from './layout/Layout';

function ShowQuestion() {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/questions.questions.json"); // Fetch from public folder
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonData = await response.json();
        const shuffledData = jsonData.map(dt => {
          const options = shuffleArray([dt.opt1, dt.opt2, dt.opt3, dt.answer]);
          return { ...dt, options };
        });
        setData(shuffledData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleOptionClick = (question, option) => {
    if (!selectedOptions[question]) {
      setSelectedOptions(prev => ({
        ...prev,
        [question]: option
      }));
    }
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto p-4">Error: {error}</div>;
  }

  return (
    <Layout title={'GK World Test Questions'}>
      <div className="container mx-auto p-4">
        <section className="intro-text mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="mb-4">Welcome to the PSC question bank. This section provides a comprehensive set of questions that are designed to test your knowledge in various areas relevant to the PSC exams. Make sure to go through each question carefully and select the best possible answer.</p>
          <p className="mb-4">The questions are shuffled for each session to ensure that you get a unique set of questions every time you practice. This will help you to better prepare and improve your chances of success in the actual exams.</p>
        </section>

        <section className="psc-info mb-6">
          <h2 className="text-xl font-semibold mb-2">About PSC Exams</h2>
          <p className="mb-4">The Public Service Commission (PSC) exams are competitive exams that assess a candidate's knowledge and skills in various subjects relevant to public service positions. The exams are designed to test candidates' abilities to handle the responsibilities of public service roles effectively.</p>
          <p className="mb-4">Preparation for PSC exams involves understanding the exam pattern, familiarizing oneself with the types of questions asked, and practicing with sample questions and previous years' papers. This section provides resources and questions to aid in your preparation.</p>
        </section>

        <div className='text-center mb-4'>
          <b className='text-xl'>Mock Test</b>
        </div>

        <div className="contacts-header flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">PSC QUESTION BANK</h1>
        </div>

        <div className="contact-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((dt) => {
            const selectedOption = selectedOptions[dt.Question];
            return (
              <div className="contact bg-white p-4 rounded shadow hover:shadow-lg transition duration-200" key={dt.Question}>
                <div className="question text-lg font-semibold mb-2">{dt.Question}</div>
                {dt.options.map((option, index) => {
                  const isAnswer = option === dt.answer;
                  let optionClass = "option mb-1 p-2 cursor-pointer";

                  if (selectedOption) {
                    if (selectedOption === option) {
                      optionClass += isAnswer ? " bg-green-500 text-white" : " bg-red-500 text-white";
                    } else if (isAnswer) {
                      optionClass += " bg-green-200";
                    } else {
                      optionClass += " bg-gray-200";
                    }
                  } else {
                    optionClass += " bg-gray-100";
                  }

                  return (
                    <div
                      className={optionClass}
                      key={index}
                      onClick={() => handleOptionClick(dt.Question, option)}
                      style={{ cursor: selectedOption ? 'not-allowed' : 'pointer' }}
                    >
                      •&nbsp; {option}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ShowQuestion;
