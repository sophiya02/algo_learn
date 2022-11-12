import React from "react";
import "./Visualiser.css";
import { useState } from "react";

function Visualiser() {
  const [bubbleArray, updateArr] = useState([234, 43, 55, 63, 5, 6, 235, 547]);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function bubbleSort(arr) {
    let tempArr = [...arr];
    for (var i = 0; i < tempArr.length; i++) {
      // Last i elements are already in place
      for (var j = 0; j < tempArr.length - i - 1; j++) {
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (tempArr[j] > tempArr[j + 1]) {
          // If the condition is true then swap them
          var temp = tempArr[j];
          tempArr[j] = tempArr[j + 1];
          tempArr[j + 1] = temp;

          console.log(i, j, tempArr);
          updateArr(tempArr);
          await sleep(1000);
        }

        // updateArr(tempArr);
      }
      await sleep(1000);
    }
    // Print the sorted array
    // console.log(tempArr);
  }

  return (
    <div className="visualiser">
      {bubbleArray.map((idx) => {
        return (
          <div className="visualiser__bar" style={{ height: idx / 2 }}>
            {" "}
          </div>
        );
      })}
      <button onClick={() => bubbleSort(bubbleArray)}> Start</button>
    </div>
  );
}

export default Visualiser;
