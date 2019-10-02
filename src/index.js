module.exports = function zeros(expression) {
    var arr = expression.split("*");
    var arrLetterQuestion = []
    for(var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "!") {
                count++;
            }
        }
        arrLetterQuestion[i] = {
            "number" : parseInt(arr[i].replace(/\D+/g,"")),
            "count" : count
        };
    }
    var productsNumber = [];
    var k = 0;
    arrLetterQuestion.forEach(element => {
        var product = 1;
        var startElement = (element["number"] % 2 === 0) ? 2 : 1;
        for (var i = startElement; i <= element["number"]; i+=element["count"]) {
            product = BigInt(product) * BigInt(i);
        }
        productsNumber[k] = BigInt(product);
        k++;
    });

    var productAnswer = 1;
    for (var i = 0; i < productsNumber.length; i++ ) {
        productAnswer =  BigInt(productAnswer) * BigInt(productsNumber[i]);
    }
    productAnswer = BigInt(productAnswer);

    var multiply = productAnswer.toString().split('').reverse().join('');
    var cnt = 0;
    
    while (multiply[cnt] === "0") {
        cnt++;
    }

    return cnt;
}
