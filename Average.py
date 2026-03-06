while True:
    # Ask for student's name
    name = input("Enter student's name (type Exit to stop): ")

    if name.lower() == "exit":
        print("Program ended.")
        break

    # Ask for 3 subject marks
    mark1 = float(input("Enter mark for subject 1: "))
    mark2 = float(input("Enter mark for subject 2: "))
    mark3 = float(input("Enter mark for subject 3: "))

    # Calculate average
    average = (mark1 + mark2 + mark3) / 3

    # Determine grade
    if average >= 75:
        grade = "A"
    elif average >= 60:
        grade = "B"
    elif average >= 40:
        grade = "C"
    else:
        grade = "Fail"

    # Formatted output
    print("------------------------------")
    print("Name   :", name)
    print("Average:", average)
    print("Grade  :", grade)
    print("------------------------------")