
import turtle
import random
def draw_triangle(color, fill_color):
    turtle.color(color)
    turtle.fillcolor(fill_color)
    turtle.begin_fill()
    for _ in range(3):
        turtle.forward(100)
        turtle.left(120)
    turtle.end_fill()

def generate_random_color():
    colors = ["red", "orange", "yellow", "green", "blue", "purple"]
    return random.choice(colors)

color1 = "black"
fill_color1 = generate_random_color()
draw_triangle(color1, fill_color1)


turtle.penup()
turtle.goto(-150, 0)
turtle.pendown()

color2 = "blue"
fill_color2 = generate_random_color()
draw_triangle(color2, fill_color2)

turtle.done()