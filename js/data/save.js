export function save() {
  const data = {
    date: this.date.getTime(),
    tax: this.tax,
    cash: this.cash,
    parts: this.parts,
    financialReports: this.financialReports,
    employees: this.employees.list,
    stockOffers: this.stockOffers.list,
    deliveries: this.deliveries.list,
    aircrafts: this.aircrafts.list,
    designs: this.designs.list,
    loanOffers: this.loanOffers.list,
    loanTaken: this.loansTaken.list,
  };
  localStorage.setItem('data', JSON.stringify(data));
}
