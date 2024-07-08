import { generateSVG } from './lib/shapes.js';
import inquirer from 'inquirer';
import fs from 'fs';

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Enter three (3) characters.",
        validate: (input) => input.length === 3? true : "Enter EXACTLY three (3) characters"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color."
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape",
        choices: ["Circle", "Square", "Triangle",],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color",
        // choices: "",
    },
]

inquirer.prompt(questions).then((answers) => {
    const svgCode = generateSVG(answers.characters, answers.textColor, answers.shape.toLowerCase(), answers.shapeColor);

    console.log("characters", answers.characters);
    console.log("textColor", answers.textColor);
    console.log("shape", answers.shape);
    console.log("shapeColor", answers.shapeColor);

    fs.writeFile('output.svg', svgCode, (err) => {
        if (err) throw err;
        console.log('Logo Generated!');
    });
}
);