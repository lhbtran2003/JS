class Invoice {
    constructor(number, date, totalValue) {
        this.number = number;
        this.date = date;
        this.totalValue = totalValue;
    }

    displayInfo() {
        console.log(`Invoice Number: ${this.number}`);
        console.log(`Date: ${this.date}`);
        console.log(`Total Value: $${this.totalValue}`);
    }
}

class InvoiceManager {
    constructor() {
        this.invoices = [];
    }

    addInvoice() {
        const number = prompt("Enter the invoice number:");
        const date = prompt("Enter the invoice date:");
        const totalValue = parseFloat(prompt("Enter the total value:"));

        const invoice = new Invoice(number, date, totalValue);
        this.invoices.push(invoice);
    }

    displayAllInvoices() {
        console.log("List of all invoices:");
        this.invoices.forEach((invoice, index) => {
            console.log(`Invoice ${index + 1}:`);
            invoice.displayInfo();
            console.log("-------------------------");
        });
    }

    calculateTotalValue() {
        let total = 0;
        this.invoices.forEach((invoice) => {
            total += invoice.totalValue;
        });
        return total;
    }
}

const invoiceManager = new InvoiceManager();

while (true) {
    const choice = parseInt(prompt("Choose an option:\n1. Add an invoice\n2. Display all invoices\n3. Calculate total value\n4. Exit"));
    switch (choice) {
        case 1:
            invoiceManager.addInvoice();
            break;
        case 2:
            invoiceManager.displayAllInvoices();
            break;
        case 3:
            const totalValue = invoiceManager.calculateTotalValue();
            console.log(`Total value of all invoices: $${totalValue}`);
            break;
        case 4:
            console.log("Exiting the program.");
            // return;
            break;
        default:
            console.log("Invalid choice. Please choose again.");
    }
}
