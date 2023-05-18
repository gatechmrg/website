
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
    [.05, .9],
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

const wamvFactors = [
    [.05, .9],
    [.2, .7],
    [0, .7],
    [.4, .6],
    [.6, .2]
]

export function calcWamvOffset(scroll:number, screenSize:number) {
    if (screenSize === -1) {
        return 0
    }
    if (scroll < .5) {
        return 0
    }
    const size = screenSize >= 3 ? .25 : .2
    const slow = (wamvFactors[screenSize][0] * ((scroll-(2*size))/size) * 100)
    if (scroll < 2.5 * size) {
        return slow
    }
    return slow + (wamvFactors[screenSize][1] * ((scroll - (2.5*size)) / size) * 100)
}

const roboSubFactors = [
    [1.3],
    [1.5],
    [1.8],
    [2.2],
    [2.2]
]

export function calcRobSubOffset(scroll:number, screenSize:number) {
    if (screenSize === -1) {
        return 0
    }
    const size = screenSize >= 3 ? .75 : .8
    const prop = screenSize >= 3 ? .25 : .2
    if (scroll < size) {
        return 0
    }
    return roboSubFactors[screenSize][0] * ((scroll - size)/prop) * 100
}