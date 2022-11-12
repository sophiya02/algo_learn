import React from "react";
import "./Visualiser.css";
import { useState } from "react";

function Visualiser() {
  const [arr, updateArr] = useState([234, 43, 55, 63, 5, 6, 235, 547]);

  let bubbleSort = () => {
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
        }
        console.log(i, j, tempArr);
        updateArr(tempArr);
      }
    }
    // Print the sorted array
    console.log(tempArr);
  };

  return (
    <div className="visualiser">
      {arr.map((idx) => {
        return (
          <div className="visualiser__bar" style={{ height: idx / 2 }}>
            {" "}
          </div>
        );
      })}
      <button onClick={() => bubbleSort(arr)}> Start</button>
    </div>
  );
}

export default Visualiser;
