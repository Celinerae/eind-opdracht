let code = 0
let start = 1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.logoIsPressed())) {
        start = 0
        code = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (start == 1) {
        basic.showString("C")
    }
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.B) && !(input.logoIsPressed()))) {
        code = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B) && (!(input.buttonIsPressed(Button.A)) && !(input.logoIsPressed()))) {
        code = 2
    }
    if (code == 2 && (input.buttonIsPressed(Button.B) && (!(input.buttonIsPressed(Button.A)) && !(input.logoIsPressed())))) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (input.logoIsPressed() && (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B)))) {
        code = 3
    }
    if (code == 3 && (input.logoIsPressed() && (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))))) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        if (input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && !(input.logoIsPressed()))) {
            code = 4
        }
        if (code == 4 && (input.buttonIsPressed(Button.A) && (!(input.buttonIsPressed(Button.B)) && !(input.logoIsPressed())))) {
            basic.showLeds(`
                # # # # .
                # # # # .
                # # # # .
                # # # # .
                # # # # .
                `)
        }
        if (input.logoIsPressed() && (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B)))) {
            code = 5
        }
        if (code == 5 && (input.logoIsPressed() && (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))))) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # . # #
                # # # # #
                # # # # #
                `)
        }
        if (false && (false && (false && false))) {
            basic.clearScreen()
        }
    }
})
