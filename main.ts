input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.clearScreen()
    PA += 1
    Rounds += 1
})
function showScoreboard () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + Rounds)
    reset()
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.clearScreen()
    Ties += 1
    Rounds += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.clearScreen()
    PB += 1
    Rounds += 1
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Let's play a game")
    basic.pause(2000)
    showScoreboard()
}
let Ties = 0
let PB = 0
let Rounds = 0
let PA = 0
reset()
