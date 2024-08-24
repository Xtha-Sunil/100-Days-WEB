var Snake = (function () {
	const INITIAL_TAIL = 2;
	var fixedTail = false;
	var intervalID;
	var tileCount = 20;
	var gridSize = 600/tileCount;
	const INITIAL_PLAYER = {
		x: Math.floor(tileCount / 2), y: Math.floor(tileCount / 2)
	};

	var velocity = {
		x: 0, y: 0
	};
	var player = {
		x: INITIAL_PLAYER.x, y: INITIAL_PLAYER.y
	};

	var walls = false;
	var fruit = {
		x: 1, y: 1
	};

	var trail = [];
	var tail = INITIAL_TAIL;

	var reward = 0;
	var points = 0;

	var ActionEnum = {
		'none': 0, 'up': 1, 'down': 2, 'left': 3, 'right': 4
	};
	Object.freeze(ActionEnum);
	var lastAction = ActionEnum.none;

	function setup () {
		canv = document.getElementById('gc');
		ctx = canv.getContext('2d');
		game.reset();
	}
	var game = {

		reset: function () {
			ctx.fillStyle = 'grey';
			ctx.fillRect(0, 0, canv.width, canv.height);

			tail = INITIAL_TAIL;
			points = 0;
			velocity.x = 0;
			velocity.y = 0;
			player.x = INITIAL_PLAYER.x;
			player.y = INITIAL_PLAYER.y;
			// this.RandomFruit();
			reward = -1;

			lastAction = ActionEnum.none;

			trail = [];
			trail.push({
				x: player.x, y: player.y
			});
		},

		action: {
			up: function () {
				if (lastAction != ActionEnum.down) {
					velocity.x = 0;
					velocity.y = -1;
				}
			},
			down: function () {
				if (lastAction != ActionEnum.up) {
					velocity.x = 0;
					velocity.y = 1;
				}
			},
			left: function () {
				if (lastAction != ActionEnum.right) {
					velocity.x = -1;
					velocity.y = 0;
				}
			},
			right: function () {
				if (lastAction != ActionEnum.left) {
					velocity.x = 1;
					velocity.y = 0;
				}
			}
		},

		RandomFruit: function () {
			fruit.x = Math.floor(Math.random() * tileCount);
			fruit.y = Math.floor(Math.random() * tileCount);
		},
		loop: function () {
			reward = -0.1;
			function DontHitWall () {
				if (player.x < 0)
					player.x = tileCount-1;
				if (player.x >= tileCount)
					player.x = 0;
				if (player.y < 0)
					player.y = tileCount+6;
				if (player.y >= tileCount+7)
					player.y = 0;
			}
			var stopped = velocity.x == 0 && velocity.y == 0;

			player.x += velocity.x;
			player.y += velocity.y;

			if (velocity.x == 0 && velocity.y == -1)
				lastAction = ActionEnum.up;
			if (velocity.x == 0 && velocity.y == 1)
				lastAction = ActionEnum.down;
			if (velocity.x == -1 && velocity.y == 0)
				lastAction = ActionEnum.left;
			if (velocity.x == 1 && velocity.y == 0)
				lastAction = ActionEnum.right;

			ctx.fillStyle = 'rgba(40,40,40,0.8)';
			ctx.fillRect(0, 0, canv.width, canv.height);

			DontHitWall();

			if (!stopped) {
				trail.push({
					x: player.x, y: player.y
				});
				while (trail.length > tail) trail.shift();
			}
			ctx.fillStyle = 'green';
			for (var i = 0; i < trail.length-1; i++) {
				ctx.fillRect(trail[i].x * gridSize+1, trail[i].y * gridSize+1, gridSize-2, gridSize-2);

				if (!stopped && trail[i].x == player.x && trail[i].y == player.y) {
					game.reset();
				}
				ctx.fillStyle = 'lime';
			}
			ctx.fillRect(trail[trail.length-1].x * gridSize+1, trail[trail.length-1].y * gridSize+1, gridSize-2, gridSize-2);

			if (player.x == fruit.x && player.y == fruit.y) {
				if (!fixedTail) tail++;
				points++;
				reward = 1;
				game.RandomFruit();
				// make sure new fruit didn't spawn in snake tail
				while ((function () {
					for (var i = 0; i < trail.length; i++) {
						if (trail[i].x == fruit.x && trail[i].y == fruit.y) {
							game.RandomFruit();
							return true;
						}
					}
					return false;
				})());
			}

			ctx.fillStyle = 'red';
			ctx.fillRect(fruit.x * gridSize+1, fruit.y * gridSize+1, gridSize-2, gridSize-2);

			ctx.fillStyle = 'white';
			ctx.font = "bold small-caps 16px Helvetica";
			ctx.fillText("points: " + points, 288, 40);
			return reward;
		}
	}
	return {
		start: function (fps = 15) {
			window.onload = setup;
			intervalID = setInterval(game.loop, 1000 / fps);
		},
		loop: game.loop,
		reset: game.reset,
		stop: function () {
			clearInterval(intervalID);
		},

		setup: {
			wall: function (state) {
				walls = state;
			},
			tileCount: function (size) {
				tileCount = size;
				gridSize = 600 / tileCount;
			},
			fixedTail: function (state) {
				fixedTail = state;
			}
		},

		action: function (act) {
			switch (act) {
				case 'left':
					game.action.left();
					break;
				case 'up':
					game.action.up();
					break;
				case 'right':
					game.action.right();
					break;
				case 'down':
					game.action.down();
					break;
			}
		},

		data: {
			player: player,
			fruit: fruit,
			trail: function () {
				return trail;
			}
		},

		info: {
			tileCount: tileCount
		}
	};
})();
Snake.start(8);
Snake.setup.fixedTail(false);
