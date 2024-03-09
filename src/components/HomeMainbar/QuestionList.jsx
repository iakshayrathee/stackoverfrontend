import React from "react";
import Questions from "./Questions";
const QuestionList = ({ questionsList }) => {
  if (!Array.isArray(questionsList)) {
    console.error("questionsList is not an array");
    return null;
  }
  return (
    <>
      {questionsList.map((question) => (
        <Questions question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionList;
