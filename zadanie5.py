import turtle
t = turtle
#Цвета вводятся на английском
def draw_square(color):
    t.color(color)
    for _ in range (4):
        t.forward(100)
        t.right(90)

def draw_circle(color):
    t.color(color)
    t.circle(50)

def draw_triangle(color):
    t.color(color)
    for _ in range(3):
        t.forward(100)
        t.left(120)

color = input("Цвет")
draw_square(color)
t.penup()
t.forward(150)
t.pendown()
draw_circle(color)
t.penup()
t.forward(150)
t.pendown()
draw_triangle(color)

t.done()
print(t.onscreenclick())