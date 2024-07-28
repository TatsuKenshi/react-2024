import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const showQuestionInfo = (id) => {
    if (activeIndex === id) {
      setActiveIndex(null);
    } else {
      setActiveIndex(id);
    }
  };

  return (
    <section className="container">
      <h1>Frequently Asked Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            question={question}
            key={question.id}
            showQuestionInfo={showQuestionInfo}
            activeIndex={activeIndex}
          />
        );
      })}
    </section>
  );
};

export default Questions;
