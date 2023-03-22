const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle", () => {
  test("Should render SVG for a red triangle", () => {
    const expectedSVG = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" style="fill:red" />
  <text x="150" y="125" font-size="55" text-anchor="middle" fill="black">XYZ</text>
  </svg>`;
    const triangle = new Triangle();
    triangle.setColor("red");
    triangle.setText("XYZ");
    triangle.setTextColor("black");
    const createdSvg = triangle.render();
    expect(createdSvg).toEqual(expectedSVG);
  });
});
describe("Square", () => {
  test("Should render SVG for red square", () => {
    const expectedSVG = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" style="fill:red" />
  <text x="100" y="100" font-size="60" text-anchor="middle" fill="black">XYZ</text>
   </svg>`
    const square = new Square();
    square.setColor("red");
    square.setText("XYZ");
    square.setTextColor("black");
    const createdSvg = circle.render();
    expect(createdSvg).toEqual(expectedSVG);
  });
});
describe("Circle", () => {
  test("Should render SVG for a black circle", () => {
    const expectedSVG = `<svg version="1.1" height="200" width="300" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="100" style="fill:black"> </circle>
    <text x="100" y="100" font-size="60" text-anchor="middle" fill="white">XYZ</text>
      </svg> `;
    const circle = new Circle();
    circle.setColor("black");
    circle.setText("XYZ");
    circle.setTextColor("white");const createdSvg = circle.render();
    expect(createdSvg).toEqual(expectedSVG);
  });
});
