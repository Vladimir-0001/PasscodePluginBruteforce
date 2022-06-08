def hash(string):
    hash = 0
    if (len(string) == 0):
        return hash
    for i in string:
        hash = ((hash << 5) - hash) + ord(i)
        hash |= 0
    return hash

while True:
    password = input("Enter a hashed password: ")
    for i in range(0, 10000):
        if (hash(str(i)) == int(password)):
            print("Password is: " + str(i))
            input()
            break
            
            