import _ from "lodash";

export const newApp = () => {
  console.log("Hello, Hexlet!");

  let a = 2;
  let b = 3;
  let c = a + b - 250;
  console.log(c);

  console.log(_.last(["one", "two", "three"]));
};
