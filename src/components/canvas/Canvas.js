import React, { useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import './Canvas.css'

import { useState } from "react";
// export default function Canvas() {
//     const [canvas, setBrush] = useState("#FCA5A5");
//     const [brush, setThick] = useState(50);
//     // const [color, setColor] = useColor("hex", "#121212");
//     // const c = "#FCA5A5";
//     const style = {
//         width: brush + "px",
//         background: canvas,
//         marginLeft: "50%"
//     };
//     const canvasRef=useRef(null)
//     console.log(canvasRef)
//     console.log(style.width);
//     return (
//         <div className="canvasContainer">
//             <CanvasDraw

//                 ref={canvasRef}
//                 brushColor={canvas}
//                 brushRadius={brush}
//                 canvasHeight="50vh"
//                 hideGrid={true}
//                 canvasWidth="80vw"
//             />
//             {/* <button
//         onClick={() => {
//           setBrush("#7F1D1D");
//         }}
//       >
//         color
//       </button> */}
//             <button
//                 onClick={() => {
//                     canvasRef.current.undo();
//                 }}
//             >
//                 UNDO
//             </button>
//             <button
//                 onClick={() => {
//                     canvasRef.current.clear();
//                 }}
//             >
//                 CLEAR
//             </button>
//             {/* <button
//         onClick={() => {
//           this.modify.getSaveData();
//         }}
//       >
//         SAVE
//       </button> */}
//             {/* <ColorPicker width={200} height={200} color={color} onChange={setColor} />
//       ;
//       <Palette /> */}
//             <br />
//             <label>Colour picker</label>
//             <input
//                 style={{ background: { canvas } }}
//                 type="color"
//                 value={canvas}
//                 onChange={(event) => {
//                     console.log(event.target.value);
//                     setBrush(event.target.value);
//                 }}
//             />

//             <br />
//             <label>Brush Thickness</label>
//             {/* <input
//         type="color"
//         value={canvas}
//         onChange={(event) => {
//           console.log(event.target.value);
//           setBrush(event.target.value);
//         }}
//       /> */}
//             <div className="thickness" style={style}></div>
//             <input
//                 min="2"
//                 max="50"
//                 type="range"
//                 onChange={(event) => {
//                     console.log(event.target.value);
//                     setThick(event.target.value);
//                 }}
//             />
//         </div>
//     );
// }



// import ColorPicker, { useColor } from "react-color-palette";





// import { useIsMobileOrTablet } from "../utils/isMobileOrTablet";


export default function Canvas() {
    //   const isMobOrTab = useIsMobileOrTablet();
    // const [canvas, setBrush] = useState("#FCA5A5");
    // const [brush, setThick] = useState(50);
    // const style = {
    //     width: brush + "px",
    //     background: canvas,
    //     marginLeft: "50%"
    // };
    // const canvasRef=useRef(null)
    return (
        <div className="canvas">

            <iframe
                frameborder="0"
                scrolling="0"
                width="160px"
                height="30px"
            />
            <CanvasDraw
                // ref={canvasRef}
                // brushColor={canvas}
                // brushRadius={brush}
                // canvasHeight="50vh"
                // hideGrid={true}
                // canvasWidth="80vw"
                style={{
                    boxShadow:
                        "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)"
                }}
            />
            {/* <button
                onClick={() => {
                    canvasRef.current.undo();
                }}
            >
                UNDO
            </button>
            <button
                onClick={() => {
                    canvasRef.current.clear();
                }}
            >
                CLEAR
            </button>
            <br />
            <label>Colour picker</label>
            <input
                style={{ background: { canvas } }}
                type="color"
                value={canvas}
                onChange={(event) => {
                    console.log(event.target.value);
                    setBrush(event.target.value);
                }}
            />

            <br />
            <label>Brush Thickness</label>
            <div className="thickness" style={style}></div>
            <input
                min="2"
                max="50"
                type="range"
                onChange={(event) => {
                    console.log(event.target.value);
                    setThick(event.target.value);
                }}
            /> */}
        </div>
    );
}



