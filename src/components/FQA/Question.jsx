import { useState } from "react";

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div class="border-b-2 " id="section4">
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        type="button"
        class="focus:outline-none flex flex-row pt-5 pb-3 items-center cursor-pointer w-full justify-between "
      >
        <label class="text-left cursor-pointer block relative text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-semibold">
          {question}
        </label>
        <img
          src="/down-arrow.png"
          class={
            `flex w-9 h-9 duration-200 ` +
            (showAnswer ? "rotate-[-180deg] " : "")
          }
        />
      </button>
      <div
        class={
          "overflow-hidden pb-3 animate-growFQA transition-all duration-300 ease-in-out " +
          (showAnswer ? "h-auto " : " h-0 hidden")
        }
      >
        <p class="text-lg font-thin">{answer}</p>
      </div>
    </div>
  );
};

export default Question;
