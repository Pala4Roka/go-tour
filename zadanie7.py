import turtle
def draw_square(color, fill_color):
    turtle.color(color)
    turtle.fillcolor(fill_color)
    turtle.begin_fill()
    for _ in range(4):
        turtle.forward(100)
        turtle.left(90)
        turtle.end_fill()


def draw_promougl(color, fill_color, width, height):
    turtle.color(color)
    turtle.fillcolor(fill_color)
    turtle.begin_fill()
    turtle.forward(width)
    turtle.left(90)
    turtle.forward(height)
    turtle.left(90)
    turtle.forward(width)
    turtle.left(90)
    turtle.forward(height)
    turtle.left(90)
    turtle.end_fill()


color_square = "black"
fill_color_square = "red"
draw_square(color_square, fill_color_square)

turtle.penup()
turtle.goto(150, 0)
turtle.pendown()

color_rect1 = "black"
fill_color_rect1 = "green"
with_rect1 = 100
height_rect1 = 200
draw_promougl(color_rect1, fill_color_rect1, with_rect1, height_rect1)

turtle.penup()
turtle.goto(300, 0)
turtle.pendown()

color_rect2 = "black"
fill_color_rect2 = "blue"
with_rect2 = 200
height_rect2 = 100
draw_promougl(color_rect2, fill_color_rect2, with_rect2, height_rect2)
turtle.done()