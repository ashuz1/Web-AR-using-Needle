import { Component, Transform } from "@needle-tools/engine";

class RotateAndScaleAR extends Component {
    start() {
        this.targetTransform = this.getComponent(Transform);
        this.rotationSpeed = 1; // Rotation speed in degrees
        this.scaleFactor = 1.01; // Scale factor
    }

    update(deltaTime) {
        // Rotate the object
        this.targetTransform.rotation.y += this.rotationSpeed * deltaTime;

        // Scale the object
        this.targetTransform.scale.x *= this.scaleFactor;
        this.targetTransform.scale.y *= this.scaleFactor;
        this.targetTransform.scale.z *= this.scaleFactor;
    }
}