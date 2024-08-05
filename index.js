document.getElementById("age-calculate").addEventListener("click", function () {
    const today = new Date();
    const inputDate = new Date(document.getElementById("date-input").value);

    const birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    };

    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    if (isFutureDate(birthDetails, currentDate, currentMonth, currentYear)) {
        alert("NOT BORN YET");
        displayResult("-", "-", "-");
        return;
    }

    const { years, months, days } = calculateAge(birthDetails, currentYear, currentMonth, currentDate);
    displayResult(years, months, days);
});

const isFutureDate = (birthDetails, currentDate, currentMonth, currentYear) => {
    if (birthDetails.year > currentYear) return true;
    if (birthDetails.year === currentYear && birthDetails.month > currentMonth) return true;
    if (birthDetails.year === currentYear && birthDetails.month === currentMonth && birthDetails.date > currentDate) return true;
    return false;
};

const calculateAge = (birthDetails, currentYear, currentMonth, currentDate) => {
    let years = currentYear - birthDetails.year;
    let months = currentMonth - birthDetails.month;
    let days = currentDate - birthDetails.date;

    if (days < 0) {
        months -= 1;
        days += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
};

const displayResult = (years, months, days) => {
    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("Days").innerText = days;
};
