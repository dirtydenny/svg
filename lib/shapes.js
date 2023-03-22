class Shape {
  constructor(){
   this.text = ""; 
   this.color = "";
   this.textColor = "";

  }
  setColor(color){
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }

}
class Triangle extends Shape {
  render() {
  return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150, 18 244, 182 56, 182" style="fill:${this.color}" />
  <text x="150" y="125" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}
class Square extends Shape {
  render (){
  return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" style="fill:${this.color}" />
  <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   </svg>`;
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" height="300" width="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="100" cy="100" r="50" style="fill:${this.color}"> </circle>
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;

  }
}

module.exports = { Triangle, Square, Circle };
