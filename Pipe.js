function Pipe() {
    this.emptySpace = floor(random() * ((height - 150) - 150 + 1)) + 150;
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.highlight = false;

    this.show = function () {
        fill(255);

        if (this.highlight) {
            fill(255, 0, 0);
        }

        rect(this.x, 0, this.w, this.emptySpace);
        rect(this.x, height - (height - this.emptySpace - 125), this.w, height - this.emptySpace);
    };

    this.update = function () {
        this.x -= this.speed;
    };

    this.isOffScreen = function () {
        return this.x < -this.w;
    };

    this.hits = function (bird) {
        let distance = dist(this.x, this.emptySpace, bird.x, bird.y);
        let _distance = dist(this.x, this.emptySpace + 125, bird.x, bird.y);

        if (distance < bird.r || _distance < bird.r) {
            this.highlight = true;
            return true;
        }

        distance = dist(this.x + this.w, this.emptySpace, bird.x, bird.y);
        _distance = dist(this.x + this.w, this.emptySpace + 125, bird.x, bird.y);

        if (distance < bird.r || _distance < bird.r) {
            this.highlight = true;
            return true;
        }

        if (bird.x + bird.r >= this.x && bird.x + bird.r <= this.x + this.w) {
            if (bird.y < this.emptySpace || bird.y > this.emptySpace + 125) {
                this.highlight = true;
                return true;
            }
        }

        if (this.highlight) {
            this.highlight = false;
            return false;
        }
    }
}