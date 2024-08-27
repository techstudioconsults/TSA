/* eslint-disable unicorn/prefer-ternary */
interface Mouse {
  x: number;
  y: number;
}

export function HeroCanvas(canvasElement: HTMLCanvasElement) {
  const canvas = canvasElement;
  const context = canvas.getContext("2d");

  // Set canvas dimensions to 50% of the viewport height
  const canvasHeight = window.innerHeight;
  const canvasWidth = window.innerWidth;

  canvas.width = canvasWidth * window.devicePixelRatio;
  canvas.height = canvasHeight * window.devicePixelRatio;

  canvas.style.width = `${canvasWidth}px`;
  canvas.style.height = `${canvasHeight}px`;

  // Effect class
  class Effect {
    private width: number;
    private height: number;
    private gap: number;
    public ctx: CanvasRenderingContext2D;
    public mouse: Mouse;

    constructor(
      width: number,
      height: number,
      context: CanvasRenderingContext2D,
    ) {
      this.width = width;
      this.height = height;
      this.ctx = context;
      this.gap = 70; // Adjust the gap between grid boxes

      this.mouse = { x: -1, y: -1 };

      window.addEventListener("resize", () => {
        const newHeight = window.innerHeight;
        const newWidth = window.innerWidth;

        canvas.width = newWidth * window.devicePixelRatio;
        canvas.height = newHeight * window.devicePixelRatio;
        this.width = canvas.width;
        this.height = canvas.height;

        canvas.style.width = `${newWidth}px`;
        canvas.style.height = `${newHeight}px`;
      });

      canvas.addEventListener("mousemove", (event) => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = (event.clientX - rect.left) * window.devicePixelRatio;
        this.mouse.y = (event.clientY - rect.top) * window.devicePixelRatio;
      });

      canvas.addEventListener("mouseleave", () => {
        this.mouse.x = -1;
        this.mouse.y = -1;
      });
    }

    drawGrid() {
      // Calculate the grid box the mouse is currently in
      const mouseGridX = Math.floor(this.mouse.x / this.gap) * this.gap;
      const mouseGridY = Math.floor(this.mouse.y / this.gap) * this.gap;

      for (let x = 0; x < this.width; x += this.gap) {
        for (let y = 0; y < this.height; y += this.gap) {
          if (x === mouseGridX && y === mouseGridY) {
            this.ctx.fillStyle = "#72779F10"; // Orange color when hovered
          } else {
            this.ctx.fillStyle = "transparent"; // Default color
          }

          this.ctx.fillRect(x, y, this.gap, this.gap);
          this.ctx.strokeStyle = "#72779F50"; // Grid line color
          this.ctx.lineWidth = 0.1; // Grid line width
          this.ctx.strokeRect(x, y, this.gap, this.gap);
        }
      }
    }

    update() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawGrid(); // Draw the grid on the canvas
    }
  }

  const effect = new Effect(canvas.width, canvas.height, context!);

  function animate() {
    effect.update();
    requestAnimationFrame(animate);
  }

  animate();
}
