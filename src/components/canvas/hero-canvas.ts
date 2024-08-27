interface Mouse {
  radius: number;
  x: number;
  y: number;
}

export function HeroCanvas(canvasElement: HTMLCanvasElement) {
  const canvas = canvasElement;
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;

  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  // Effect class
  class Effect {
    private width: number;
    private height: number;
    private gap: number;
    public ctx: CanvasRenderingContext2D;
    public readonly mouse: Mouse;

    constructor(
      width: number,
      height: number,
      context: CanvasRenderingContext2D,
    ) {
      this.width = width;
      this.height = height;
      this.ctx = context;
      this.gap = 50; // Adjust the gap between grid lines

      this.mouse = {
        radius: 3000,
        x: 0,
        y: 0,
      };

      window.addEventListener("mousemove", (event) => {
        this.mouse.x = event.clientX * window.devicePixelRatio;
        this.mouse.y = event.pageY * window.devicePixelRatio;
        this.mouse.radius = 3000;
      });
      window.addEventListener("mouseout", () => {
        this.mouse.x = 0;
        this.mouse.y = 0;
        this.mouse.radius = 0;
      });
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        this.width = canvas.width;
        this.height = canvas.height;

        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
      });
    }

    drawGrid() {
      this.ctx.strokeStyle = "grey"; // Grid line color
      this.ctx.lineWidth = 0.2; // Grid line width

      // Draw vertical lines
      for (let x = 0; x <= this.width; x += this.gap) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, 0);
        this.ctx.lineTo(x, this.height);
        this.ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= this.height; y += this.gap) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, y);
        this.ctx.lineTo(this.width, y);
        this.ctx.stroke();
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
