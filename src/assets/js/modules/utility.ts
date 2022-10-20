interface Utility {
	ww: number;
	wh: number;
	wy: number;
	mq: MediaQueryList;
	scrollGap: number;
	run(): void;
	updateWindowSize(): void;
	updateWindowOffset(): void;
	mpEvent(): void;
	changeSP(): void;
	changePC(): void;
	setScrollbarWidth(): void;
}

const u: Utility = {
	ww: window.innerWidth,
	wh: window.innerHeight,
	wy: window.scrollY,
	mq: window.matchMedia('(max-width: 768px)'),
	scrollGap: 0,

	run: function () {
		window.addEventListener('resize', this.updateWindowSize.bind(this));
		window.addEventListener('DOMContentLoaded', this.updateWindowSize.bind(this));
		window.addEventListener('scroll', this.updateWindowOffset.bind(this));
		window.addEventListener('DOMContentLoaded', this.updateWindowOffset.bind(this));
		this.mq.addEventListener('change', this.mpEvent.bind(this));
		this.mpEvent();
		this.setScrollbarWidth();
	},
	updateWindowSize: function () {
		this.ww = window.innerWidth;
		this.wh = window.innerHeight;
	},
	updateWindowOffset: function () {
		this.wy = window.scrollY;
	},
	mpEvent: function () {
		if (this.mq.matches) {
			this.changeSP();
		} else {
			this.changePC();
		}
	},
	changeSP: function () {
		this.scrollGap = -80;
	},
	changePC: function () {
		this.scrollGap = -120;
	},
	setScrollbarWidth: function () {
		const html = document.documentElement;
		const div = document.createElement('div');
		div.style.visibility = 'hidden';
		div.style.overflow = 'scroll';
		document.body.appendChild(div);
		const scrollbarW = div.offsetWidth - div.clientWidth;
		html.style.setProperty('--scroll-bar', `${scrollbarW}px`);
	}
}

u.run();

export default u;

