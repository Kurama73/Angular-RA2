"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const voiture_1 = require("./voiture");
const course_1 = require("./course");
let v1 = new voiture_1.voiture("rouge");
let v2 = new voiture_1.voiture("verte");
let c = new course_1.course("Lyon", [v1, v2]);
console.log(c.toString());
//# sourceMappingURL=app.js.map