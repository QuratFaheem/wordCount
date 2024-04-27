#! /usr/bin/env node
import inquirer from "inquirer";

const paragraph= await inquirer.prompt([
    {
      name: "para",
      type: "string",
      message: "Write your paragraph to start counting",
    },
  ]);

  let words=paragraph.para.trim().split(" ");
  console.log(words)
  console.log("Word count of above paragraph is: ",words.length);
