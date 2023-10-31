import math

fio = input("Ведите ФИО:")
if fio == "Иванов Иван Иванович":
    print("Фио совпадает")
else:
    print("фио не совпадаетс заранее созданной")

a = float(input("коэфицент а:"))
b = float(input("коэфицент b:"))
c = float(input("коэфицент c:"))
discriminant = b**2 - 4*a*c

if discriminant > 0:
    x1 = (-b + math.sqrt(discriminant)) / (2*a)
    x2 = (-b + math.sqrt(discriminant)) / (2*a)
    print("уравнение имеет 2 корня: x1 =" , x1 , " и x2 = " , x2)
elif discriminant == 0:
    x = -b / (2*a)
    print("Уравнение имеет 1 корень: x =", x)
else:
    print("Уравнение не имееткорней")