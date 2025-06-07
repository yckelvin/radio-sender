input.onButtonPressed(Button.A, function () {
    current += 1
    if (current > 9) {
        current = 1
    }
    basic.showNumber(current)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(current)
    basic.pause(100)
})
let current = 0
current = 1
radio.setGroup(1)
