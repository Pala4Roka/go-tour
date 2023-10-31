name = input("Введите имя")
tel = int(input("Введите номер телефона"))
print(name, tel)
a = float(input("Введите сторону а"))
b = float(input("Введите сторону b"))
c = float(input("Введите сторону c"))
s = (a + b + c) / 2
area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
if a + b > c and c + a > b and b + c > a:
    print("Площадь", area)
else:
    print("Не то")
        