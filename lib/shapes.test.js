const { Triangle, Square, Circle } = require("./shapes");

describe("Triangle". () => {
  test("Should render SVG for a red triangle", () => {
    const expectedSVG = `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" style="fill:${this.color}" />
  <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    const triangle = new Triangle();
    triangle.setColor("red");
    const createdSvg = triangle.render();
    expect(createdSvg).toEqual(expectedSVG);

  });
});
describe("Square". () => {
  test("Should render SVG for red square", () => {
    const expectedSVG = `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" style="fill:${this.color}" />
  <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>`
    const square = new Square();
    square.setColor("red");
    const createdSvg = circle.render();
    expect(createdSvg).toEqual(expectedSVG);

  });
});
describe("Circle". () => {
  test("Should render SVG for a black circle", () => {
    const expectedSVG = `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="50" style="fill:${this.color}"> </circle>
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg> `;
    const circle = new Circle();
    circle.setColor("red");
    const createdSvg = circle.render();
    expect(createdSvg).toEqual(expectedSVG);

  });
});
