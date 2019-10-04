class GuessingGame {
    constructor() {
        this.L = null
        this.R = null 
    }

    setRange(min, max) {
        this.L = min
        this.R = max
    }

    guess() {
        return Math.round((this.R + this.L)/2)
    }

    lower() {
        this.setRange(this.L, Math.round((this.R + this.L)/2))
    }

    greater() {
        this.setRange(Math.round((this.R + this.L)/2), this.R)

    }
}

module.exports = GuessingGame;
