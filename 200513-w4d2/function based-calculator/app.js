
const values = {
    currentNumber: "",
    firstValue: false,
    secondValue: false,
    operator: null,
    result: 0
}

let operatorClick= false;

const calculate = () => {
    if (values.operator === "+") {
        values.result = values.firstValue + values.secondValue;
    }else if(values.operator === "-") {
        values.result = values.firstValue - values.secondValue;
    }else if(values.operator === "/") {
        values.result = values.firstValue / values.secondValue;
    }else if(values.operator === "*") {
        values.result = values.firstValue * values.secondValue;
    }
    $('#display').text(values.result);

    values.currentNumber = values.result;
    values.firstValue = values.result;
    values.secondValue = false;// false means the second value is nothing, doesn't exist
}

//click number value
$('.number').on('click', function (e) {
    let numberClicked = $(e.target).val();
    values.currentNumber = values.currentNumber + numberClicked;
    $('#display').text(values.currentNumber);

    console.log("values are : ", values);
});

//click operator
operatorClick = $('.btn-success').on('click', function (e) {
    values.operator = $(e.target).val();
    values.firstValue = parseFloat(values.currentNumber);
    values.currentNumber = "";

    console.log("values are : ", values);

});

// if(operatorClick){
//     values.secondValue = values.firstValue;
//     calculate();
// }

//click equal
$('#equal').on('click', function (e) {
    $(e.target).val();
    values.secondValue = parseFloat(values.currentNumber);
    calculate();
    
    console.log("values are : ", values);
});



$('#resetBtn').on('click', function (e) {
    values.currentNumber = "";
    values.firstValue = false;
    values.secondValue = false;
    values.operator = null;
    values.result = 0;

    $('#display').text("");

    console.log("values are : ", values);
});