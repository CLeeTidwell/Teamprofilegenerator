/* require inquirer, fs and teamtemplate.JS */

const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./teamtemplate/teamtemplate.js");

        /* library modules */

const Engineer = require("./library/Engineer");
const Intern = require("./library/Intern");
const Manager = require("./library/Manager");