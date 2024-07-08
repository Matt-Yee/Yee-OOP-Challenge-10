//exports triangle, circle and square classes
const shapes = {
    circle:'<circle cx="50%" cy="50%" r="50" fill="{shapeColor}" />',
    square:'<rect x="50%" y="50%" width="100" height="100" fill="{shapeColor}" transform="translate(-50,-50)" />',
    triangle:'<polygon points="50,10 100,100 0,100" fill="{shapeColor}" />',
};

function generateSVG (characters, textColor, shape, shapeColor) {
    let svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">`;

    //adds text wow
    svgCode += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="50">${characters}</text>`;

    //adds shape wow
    svgCode += shapes[shape].replace('{shapeColor}', shapeColor);

    svgCode += `</svg>`;

    return svgCode;
}

export { generateSVG };