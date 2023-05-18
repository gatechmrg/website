
const microtransatFactors = [
    [.05, .8],
    [.2, .7],
    [0, .7],
    [.3, .7],
    [.5, .4]
]

export function calcMicrotransatOffset(scroll:number, screenSize:number) {
    if (screenSize === -1) {
        return 0
    }
    const size = screenSize >= 3 ? .25 : .2
    const slow = (microtransatFactors[screenSize][0] * (scroll / size) * 100)
    if (scroll < size / 2) {
        return slow
    }
    return slow + (microtransatFactors[screenSize][1] * ((scroll - (size/2)) / size) * 100)
}

const roboBoatFactors = [
    [0, 1],
    [.2, .7],
    [0, .7],
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
    const size = screenSize >= 3 ? .25 : .2
    const slow = (roboBoatFactors[screenSize][0] * ((scroll-size)/size) * 100)
    if (scroll < 1.5 * size) {
        return slow
    }
    return slow + (roboBoatFactors[screenSize][1] * ((scroll - (1.5*size)) / size) * 100)
}