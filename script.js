let expenses = [];

function addExpense() {
    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;

    if (title === "" || amount === "" || category === "") {
        alert("All fields are required");
        return;
    }

    if (amount <= 0) {
        alert("Amount must be greater than 0");
        return;
    }

    let expense = {
        title,
        amount: Number(amount),
        category
    };

    expenses.push(expense);
    renderExpenses();
}

function renderExpenses() {
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((exp, index) => {
        total += exp.amount;

        list.innerHTML += `
            <tr>
                <td>${exp.title}</td>
                <td>${exp.amount}</td>
                <td>${exp.category}</td>
                <td><button onclick="deleteExpense(${index})">Delete</button></td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    renderExpenses();
}