import { voiture } from "./voiture";
import { course } from "./course";

let v1 = new voiture("rouge");
let v2 = new voiture("verte");
let c = new course("Lyon", [v1, v2]);

console.log(c.toString());