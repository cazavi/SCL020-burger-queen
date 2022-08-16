// import React, {useState} from 'react';


// function Timer() {
//   const [isActive, setIsActive] = useState(false);
//   const [isPaused, setIsPaused] = useState(true);
//   const [time, setTime] = useState(0);
  
//   React.useEffect(() => {
//     let interval = null;
  
//     if (isActive && isPaused === false) {
//       interval = setInterval(() => {
//         setTime((time) => time + 10);
//       }, 10);
//     } else {
//       clearInterval(interval);
//     }
//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, isPaused]);
  
  
//   const handlePauseResume = () => {
//       setIsPaused(!isPaused);
//     };
    
    
//     return (
//       <div className="stop-watch">
//       <div className="timer">
//       <span className="digits">
//         {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
//       </span>
//       <span className="digits">
//         {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
//       </span>
//       {/* <span className="digits mili-sec">
//         {("0" + ((props.time / 10) % 100)).slice(-2)}
//       </span> */}
//     </div>
//       {/* <ControlButtons
//         active={isActive}
//         isPaused={isPaused}
//         handleStart={handleStart}
//         // handlePauseResume={handlePauseResume}
//         handleReset={handleReset}
//       /> */}
//     </div>
//   );
// }

// const handleStart = () => {
//   setIsActive(true);
//   setIsPaused(false);
// };

// const handleReset = () => {
//   setIsActive(false);
//   setTime(0);
// };


// export {Timer, handleReset, handleStart}

