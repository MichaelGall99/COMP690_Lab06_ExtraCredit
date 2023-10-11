// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
do {
    investment = prompt('Enter investment amount as xxxx.xx');

    if (isNaN(investment) || investment != parseFloat(investment) ||
        investment.length != parseFloat(investment).toString().length || investment < 0) {

        alert('The investment amount must be a numeric dollar value in the format $xxxx.xx (without the dollar sign)')
    }
} while (isNaN(investment) || investment != parseFloat(investment) ||
        investment.length != parseFloat(investment).toString().length || investment < 0)
        
do {
    rate = prompt('Enter interest rate as x.xx%');

    if (isNaN(rate) || rate != parseFloat(rate) ||
        rate.length != parseFloat(rate).toString().length || rate < 0.00 || rate > 6.00) {

        alert('The intetest rate must be a numeric percentage value between 0.00% - 6.00%')
    }
} while (isNaN(rate) || rate != parseFloat(rate) ||
         rate.length != parseFloat(rate).toString().length || rate < 0.00 || rate > 6.00)

do {
    years = prompt('Enter the number of years you want to invest for');

    if (isNaN(years) || years != parseInt(years) ||
        years.length != parseInt(years).toString().length || years <= 0 || years > 30) {

        alert('The term of the investment in years must be a numeric value between 1 - 30 years')
    }
} while (isNaN(years) || years != parseInt(years) ||
         years.length != parseInt(years).toString().length || years <= 0 || years > 30)


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${parseFloat(investment).toFixed(2)}<br>`);
document.write(`Interest rate: ${parseFloat(rate).toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${parseFloat(futureValue).toFixed(2)}`);