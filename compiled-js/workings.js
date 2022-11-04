var operations;
(function (operations) {
    operations["Addition"] = "addition";
    operations["Add"] = "add";
    operations["Subtraction"] = "subtraction";
    operations["Subtract"] = "subtract";
    operations["Sub"] = "sub";
    operations["Multiplication"] = "multiplication";
    operations["Multiply"] = "multiply";
    operations["Mul"] = "mul";
})(operations || (operations = {}));
var Inputclass = /** @class */ (function () {
    function Inputclass() {
    }
    return Inputclass;
}());
function performOperation(request) {
    var operation = request.operation_type.trim().toLowerCase();
    if (operation.split(" ").length == 1) {
        switch (operation) {
            case operations.Add:
            case operations.Addition:
                return {
                    slackUsername: "Ronin",
                    result: request.x + request.y,
                    operation_type: request.operation_type
                };
            case operations.Sub:
            case operations.Subtract:
            case operations.Subtraction:
                return {
                    slackUsername: "Ronin",
                    result: request.x - request.y,
                    operation_type: request.operation_type
                };
            case operations.Mul:
            case operations.Multiplication:
            case operations.Multiply:
                return {
                    slackUsername: "Ronin",
                    result: request.x * request.y,
                    operation_type: request.operation_type
                };
            default:
                return {
                    slackUsername: "Ronin",
                    result: undefined,
                    operation_type: "Invalid operation/command"
                };
        }
    }
    else
        return ExplicitCommand(operation);
}
function get_params(inputText) {
    var operands = [];
    var opRequest = new Inputclass();
    var input = inputText.split(" ");
    for (var i = 0; i < input.length; i++) {
        if (input[i] == operations.Add ||
            input[i] == operations.Addition ||
            input[i] == operations.Sub ||
            input[i] == operations.Subtract ||
            input[i] == operations.Subtraction ||
            input[i] == operations.Mul ||
            input[i] == operations.Multiply ||
            input[i] == operations.Multiplication) {
            opRequest.operation_type = input[i];
            continue;
        }
        if (isNaN(Number(input[i])))
            continue;
        else
            operands.push(input[i]);
    }
    opRequest.x = Number(operands[0]);
    opRequest.y = Number(operands[1]);
    return opRequest;
}
function ExplicitCommand(command) {
    var requestParams = get_params(command);
    switch (requestParams.operation_type) {
        case operations.Add:
        case operations.Addition:
            return {
                slackUsername: "Ronin",
                result: requestParams.x + requestParams.y,
                operation_type: requestParams.operation_type
            };
        case operations.Sub:
        case operations.Subtract:
        case operations.Subtraction:
            return {
                slackUsername: "Ronin",
                result: requestParams.x - requestParams.y,
                operation_type: requestParams.operation_type
            };
        case operations.Mul:
        case operations.Multiplication:
        case operations.Multiply:
            return {
                slackUsername: "Ronin",
                result: requestParams.x * requestParams.y,
                operation_type: requestParams.operation_type
            };
        default:
            return {
                slackUsername: "Ronin",
                result: undefined,
                operation_type: "Invalid operation/command"
            };
    }
}

module.exports = {
    performOperation
}