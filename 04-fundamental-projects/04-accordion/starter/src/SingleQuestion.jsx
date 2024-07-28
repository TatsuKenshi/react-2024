import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ question, showQuestionInfo, activeIndex }) => {
  const { title, info, id } = question;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <div>
          <button
            className="question-btn"
            onClick={() => {
              showQuestionInfo(id);
            }}
          >
            {activeIndex === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
      </header>
      {activeIndex === id && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
