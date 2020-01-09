/*
 *
 * wave.js
 *
 */

module.exports = class Wave {
	constructor(id) {
		var self = this;

		this.stageW = 0;
    this.stageH = 0;
    this.canvas = document.querySelector(id);
    this.context = this.canvas.getContext('2d');
		this.speed = Math.random() * (7000 - 5000) + 5000;

    this.resize();
    this.tick();

    window.addEventListener('resize', self.resize);
	}

	tick() {
		var self = this;
		requestAnimationFrame(function() {
			self.tick()
		});
		this.draw();
	}
	draw() {
		var self = this;

		this.context.clearRect(0, 0, self.stageW, self.stageH);
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.strokeStyle = `#0095e9`;
		const segmentNum = 30;
		const amplitude = self.stageH / 10;
		const time = Date.now() / self.speed;

		// [...Array(segmentNum).keys()].forEach(i => {
		for (var i = 0;i < segmentNum; i++) {
			const x = i / (segmentNum - 1) * self.stageW;
			const radian = i / segmentNum * (Math.PI * 1.5) + time;

			const y = amplitude * Math.sin(radian) + self.stageH / 2;
			if (i === 0) {
				self.context.moveTo(x, y);
			} else {
				self.context.lineTo(x, y);
			}
		}
		// });
		self.context.stroke();
	}

	resize() {
		this.stageW = innerWidth * devicePixelRatio;
		this.stageH = innerHeight * devicePixelRatio;
		this.canvas.width = this.stageW;
		this.canvas.height = this.stageH;
	}
}
