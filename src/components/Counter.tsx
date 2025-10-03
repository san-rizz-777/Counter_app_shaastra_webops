import { useState } from "react";
import bg_img from "../assets/w1.webp";  // ✅ correct import

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div
      className="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_img})` }}   // ✅ correct usage
    >
      <div className="flex flex-col justify-center items-center h-[500px] w-[400px] border-2 border-violet-500 rounded-xl bg-gradient-to-r from-violet-500/80 to-fuchsia-500/80 text-white p-6">
        <h1 className="text-[80px] font-bold mb-6">{count}</h1>
        <div className="flex gap-4">
          <button
            className="h-[45px] w-28 bg-indigo-600 hover:bg-indigo-400 ease-in duration-300 hover:scale-105 rounded-lg"
            onClick={increase}
          >
            Increase
          </button>
          <button
            className="h-[45px] w-28 bg-pink-600 hover:bg-pink-400 ease-in duration-300 hover:scale-105 rounded-lg"
            onClick={reset}
          >
            Reset
          </button>
          <button
            className="h-[45px] w-28 bg-violet-600 hover:bg-violet-400 ease-in duration-300 hover:scale-105 rounded-lg"
            onClick={decrease}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
