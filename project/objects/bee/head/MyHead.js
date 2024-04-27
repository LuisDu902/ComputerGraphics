import { CGFobject, CGFappearance } from "../../../../lib/CGF.js";
import { MyAntenna } from "./MyAntenna.js";
import { MySphere } from "../../../polygons/MySphere.js";
import { MyTriangle } from "../../../polygons/MyTriangle.js";

export class MyHead extends CGFobject {
  constructor(scene) {
    super(scene);

    this.antenna = new MyAntenna(this.scene);
    this.sphere = new MySphere(this.scene, 50, 50);
    this.triangle = new MyTriangle(this.scene);

    this.gold = new CGFappearance(this.scene);
    this.gold.setAmbient(0.9, 0.9, 0.1, 1);
    this.gold.setDiffuse(0.9, 0.9, 0.1, 1);
    this.gold.setSpecular(0.0, 0.0, 0.0, 1);

    this.white = new CGFappearance(this.scene);
    this.white.setAmbient(1, 1, 1, 1);
    this.white.setDiffuse(1, 1, 1, 1);
    this.white.setSpecular(0.0, 0.0, 0.0, 1);
  }

  display() {

    this.scene.pushMatrix();
        this.scene.rotate(-Math.PI / 10, 0, 0, 1);

        // Eyes
        this.scene.pushMatrix();
            this.white.apply();
            this.scene.scale(0.35, 0.55, 0.35);
            
            this.scene.pushMatrix();
                this.scene.translate(-0.5, 0, 1.8);
                this.sphere.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
                this.scene.translate(-0.5, 0, -1.8);
                this.sphere.display();
            this.scene.popMatrix();
        this.scene.popMatrix();

        // Head
        this.gold.apply();
        this.scene.scale(0.75, 1.0, 0.75);
        this.sphere.display();

    this.scene.popMatrix();
    
    // Antennas
    this.scene.pushMatrix();
        this.scene.pushMatrix();
            this.scene.translate(-0.2, 0.6, -0.2);
            this.scene.rotate(-Math.PI / 4, 0, 1, 0);
            this.antenna.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
            this.scene.translate(-0.2, 0.6, 0.2);
            this.antenna.display();
        this.scene.popMatrix();

    // Mouth
    this.scene.pushMatrix();
        this.scene.translate(-0.45, -0.9, 0.1);
        this.scene.rotate(Math.PI/4, 1, 0, 0);
        this.scene.scale(0.2, 0.15, 0.2);
        this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
        this.scene.translate(-0.45, -0.9, -0.1);
        this.scene.rotate(-Math.PI/4, 1, 0, 0);
        this.scene.scale(0.2, 0.15, 0.2);
        this.triangle.display();
    this.scene.popMatrix();

    this.scene.popMatrix();
  }
}
