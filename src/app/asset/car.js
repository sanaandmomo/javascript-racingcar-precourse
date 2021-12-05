import { CHARACTER } from './constant.js';
import isEnoughAccel from './isEnoughAccel.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.track = [];
    }

    go() {
        this.track.push(CHARACTER.tyreTracks);
        return this;
    }

    goIfEnoughAccel() {
        if (isEnoughAccel()) {
            this.go();
        }

        return this;
    }
}
