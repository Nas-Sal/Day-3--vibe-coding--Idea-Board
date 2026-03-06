# Ask for total monthly budget
budget = float(input("Enter your total monthly budget: "))
total_expenses = 0
# Loop to enter multiple expenses
while True:
    expense = input("Enter an expense (type 'done' to finish): ")

    if expense.lower() == "done":
        break

    total_expenses += float(expense)
# Calculate remaining balance
balance = budget - total_expenses
# Display results
print("Total Budget   :", budget)
print("Total Expenses :", total_expenses)
print("Remaining Bal. :", balance)
# Warning message
if balance < 500:
    print("Warning: Low Funds")