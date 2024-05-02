import { CGFobject } from "../../../lib/CGF.js";
import { MyHead } from "./head/MyHead.js";
import { MyThorax } from "./thorax/MyThorax.js";
import { MyAbdomen } from "./MyAbdomen.js";

export class MyBee extends CGFobject {
  constructor(scene) {
    super(scene);
    this.thorax = new MyThorax(this.scene);
    this.head = new MyHead(this.scene);
    this.abdomen = new MyAbdomen(this.scene);
  }

  display() {
      this.head.display();
      this.abdomen.display();
      this.thorax.display();
  }
}
