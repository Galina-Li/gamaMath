import React from "react";
import "./Canvas.css"

export default function Canvas() {
    // function generatePalette(palette) {
    //       for (r = 0, max = 4; r <= max; r++) {
    //       for (g = 0; g <= max; g++) {
    //         for (b = 0; b <= max; b++) {
    //           paletteBlock = document.createElement('div');
    //           paletteBlock.className = 'button';
    //           paletteBlock.addEventListener('click', function changeColor(e) {
    //             context.strokeStyle = e.target.style.backgroundColor;
    //           });
   
    return (
        <div class="container-canvas">
            <canvas id='canvas' width="50" height="150">Ваш браузер устарел!</canvas>
            <div id="palette" >

            </div>
            {/* <div id="clear" onClick={function clear() {
                context.clearRect(0, 0, canvas.width, canvas.height)
            }}>Очистить изображение</div> */}
        </div>
    )
}