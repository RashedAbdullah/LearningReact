import React from "react";


const FlatMap = () => {
  const flating = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ];
  const flatArr = flating.flat(1);
  console.log(flatArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const matrix = [3, [2], [[2]], [4, 4, [[[[3]]]]]];
  console.log(matrix.flat(1)); //[3, 2, Array(1), 4, 4, Array(1)]
  console.log(matrix.flat(2)); //[3, 2, 2, 4, 4, Array(1)]
  console.log(matrix.flat(5)); //[3, 2, 2, 4, 4, 5]
  //  অর্থাৎ যতটা অ্যারে আছে, আমি flat এর ভেতর যত নাম্বার দেবো, সে অনুযায়ী তা ভেঙ্গে ফেলবে।

  const nums = [1, 2, 3];
  const numStr = ["One", "Two", "Three"];
  console.log(nums.map((value, index) => [value, numStr[index]])); //[ [ 1, 'One' ], [ 2, 'Two' ], [ 3, 'Three' ] ]
  console.log(nums.flatMap((value, index) => [value, numStr[index]])); //[ 1, 'One', 2, 'Two', 3, 'Three' ]

  const arr = ["d", "e", "h", "s", "a", "R"];
  console.log(arr.reduce((prev, crr) => prev + crr)); //dehsaR
  console.log(arr.reduceRight((prev, crr) => prev + crr)); //Rashed

  const flatMaping = ["Rashed", "Abdullah"];
  console.log(flatMaping.flatMap((flating) => flating.split(""))); //['R', 'a', 's', 'h', 'e', 'd', 'A', 'b', 'd', 'u', 'l', 'l', 'a', 'h']

  let course = "fabulous";

  course ? console.log("the course is true") : console.log("course is false");
  

  return (
    <div>flat and flatMap</div>
  )
};

export default FlatMap;
