class Shape {
  constructor(){
   this.color = "";
  }
  setColor(color){
    this.color = color;
  }

}
class Triangle extends Shape {
  render() {
  return `<svg height="300" width="200">
  <polygon points="75,0 0,150 150,150" style="fill:${this.color}" />
  </svg>`
  }
}
class Square extends Shape {
  render ()
  return `<svg width="300" height="200">
  <rect width="200" height="200" style="fill:${this.color}" />
   </svg>`
}

class Circle extends Shape {
  render() {
    return `<svg width="300" height="200"> <circle cx="100" cy="100" r="50" style="fill:${this.color}"> </circle>
      </svg>`

  }
}

module.exports = { Triangle, Square, Circle };
