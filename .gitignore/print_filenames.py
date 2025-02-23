import os

filepath = "C:/Users/Marc/Downloads/Demon Slayer S05 - auf drive"
filenames = os.listdir(filepath)

# print(filenames)

for f in filenames:
    print(f)


x = [1, 2, 3, 4, 5, 6, 7, 1, 3, 56]
y = [number for number in x if number > 4]

print(y)
