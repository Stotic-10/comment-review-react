import { useState } from "react";
import { FaStar } from "react-icons/fa";


function App() {
  let [star, setStar] = useState(0);
  let [feedback, setFeedback] = useState({});
  let [listFeedback, setListFeedback] = useState([]);

  let handleStar = (star) => {
    setStar(star);
    let feed = { ...feedback, ['star']: star };
    setFeedback(feed);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    let feed = { ...feedback, [name]: value };
    setFeedback(feed);
    console.log(feed);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let listFeed = [...listFeedback, feedback];

    setListFeedback(listFeed);
    console.log(listFeed);
    setStar(0);
    setFeedback({});
  };

  return (
    <div className="container">
      <h2>Feedback</h2>

      <form method="post" onSubmit={handleSubmit}>
        {[1, 2, 3, 4, 5].map((v, i) => (
          <FaStar key={i} color={star >= v ? "yellow" : "gray"} onMouseOver={() => handleStar(v)} />
        ))}
        <br /><br />
        <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} value={feedback.name || ""} />
        <br /><br />
        <textarea name="feedback" placeholder="Enter your feedback" onChange={handleChange} value={feedback.feedback || ""}></textarea>
        <br /><br />
        <input type="text" name="description" placeholder="Enter a description" onChange={handleChange} value={feedback.description || ""} />
        <br /><br />
        <input type="submit" value="Add Feedback" />
      </form>

      <div className="feedback-cards">
        {listFeedback.map((val, i) => (
          <div key={i} className="feedback-card">
            <h4>{val.name}</h4>
            <div>
              {[1, 2, 3, 4, 5].map((v, i) => (
                <FaStar key={i} color={val.star >= v ? "yellow" : "gray"} />
              ))}
            </div>
            <p><strong>Feedback:</strong> {val.feedback}</p>
            <p><strong>Description:</strong> {val.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
