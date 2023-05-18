
const microtransatFactors = [
    [.4, 0],
    [.4, 0],
    [0, 1],
    [.3, .7],
    [.5, .4]
]

export function calcMicrotransatOffset(scroll:number, screenSize:number) {
    if (screenSize === -1) {
        return 0
    }
    const slow = (microtransatFactors[screenSize][0] * (scroll / .25) * 100)
    if (scroll < .25 / 2) {
        return slow
    }
    return slow + (microtransatFactors[screenSize][1] * ((scroll - (.25/2)) / .25) * 100)
}

const roboBoatFactors = [
    [.4, 0],
    [.4, 0],
    [0, 1],
    [.4, .6],
    [.6, .2]
]

export function calcRoboBoatOffset(scroll:number, screenSize:number) {
    if (screenSize === -1) {
        return 0
    }
    if (scroll < .25) {
        return 0
    }
    const slow = (roboBoatFactors[screenSize][0] * ((scroll-.25)/.25) * 100)
    if (scroll < .375) {
        return slow
    }
    return slow + (roboBoatFactors[screenSize][1] * ((scroll - .375) / .25) * 100)
}