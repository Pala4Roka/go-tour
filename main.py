a = 1
b = 3.2
g = True
c = "string"
z = None
print(a)
a = 2
print(a)
h = [1, 2, z]
j = {2: 'stop', 4: 176}
k = (1, 1, 6)  # Невозможно произвести мутацию(изменить) в кортэже
setl = {1, 2, 3, 4, 5, 6, 6}  # Уникальное значение
print(h, j, k, setl)
print(type(z))
name = input("Ведите имя")
print(f"Меня зовут{name}")  # позволяет вставить какое либо значение без ограничений
name = int(input("Ведите число"))
print(name)