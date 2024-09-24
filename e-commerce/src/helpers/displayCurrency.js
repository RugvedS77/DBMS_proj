// const displayINRCurrency = (num) => {
//     console.log(num)
//     console.log(typeof num)
//     const formatter = new Intl.NumberFormat('en-IN',{
//         style : "currency",
//         currency : 'INR',
//         minimumFractionDigits : 2
//     })

//     return formatter.format(num)

// }

// export default displayINRCurrency

const displayINRCurrency = (num) => {
    // Check if the input is a valid number
    const numericValue = Number(num);
    if (isNaN(numericValue)) {
        console.error("Invalid number:", num);
        return "N/A";
    }

    console.log(numericValue);
    console.log(typeof numericValue);

    const formatter = new Intl.NumberFormat('en-IN', {
        style: "currency",
        currency: 'INR',
        minimumFractionDigits: 2
    });

    return formatter.format(numericValue);
};

export default displayINRCurrency;
