(function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let numberOfDrops = 60;
    let drops = [];

    class Drop {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speed = Math.random() * 4 + 1;
            this.length = Math.random() * 20 + 10;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        draw() {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x, this.y + this.length);
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -this.length;
                this.x = Math.random() * canvas.width;
            }
        }
    }

    function init() {
        for (let i = 0; i < numberOfDrops; i++) {
            drops.push(new Drop());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let drop of drops) {
            drop.draw();
            drop.update();
        }

        requestAnimationFrame(animate);
    }

    init();
    animate();
})();

