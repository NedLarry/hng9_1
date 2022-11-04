enum operations{
    Addition = "addition",
    Add = "add",
    Subtraction = "subtraction",
    Subtract = "subtract",
    Sub = "sub",
    Multiplication = "multiplication",
    Multiply = "multiply",
    Mul = "mul"
}

class Inputclass{
    operation_type:string;
    x:number;
    y:number
}

function performOperation(request: Inputclass):any{

    var operation = request.operation_type.trim().toLowerCase();

    if (operation.split(" ").length == 1){
        switch(operation){

            case operations.Add:
            case operations.Addition:
                return {
                    slackUsername:"Ronin",
                    result: request.x + request.y,
                    operation_type: request.operation_type,
    
                }
            case operations.Sub:
            case operations.Subtract:
            case operations.Subtraction:
                return{
                    slackUsername: "Ronin",
                    result: request.x - request.y,
                    operation_type: request.operation_type
                }
    
            case operations.Mul:
            case operations.Multiplication:
            case operations.Multiply:
                return {
                    slackUsername: "Ronin",
                    result: request.x * request.y,
                    operation_type: request.operation_type
                }
            default:
                return{
                    slackUsername: "Ronin",
                    result: undefined,
                    operation_type: "Invalid operation/command"
                }
        }
    }
    else
        return ExplicitCommand(operation);
    


}

function get_params(inputText:string):any{

    var operands = [];
    var opRequest: Inputclass = new Inputclass();

    var input = inputText.split(" ");

    for(var i =0; i < input.length; i++){
        if (
                input[i] == operations.Add ||
                input[i] == operations.Addition ||
                input[i] == operations.Sub || 
                input[i] == operations.Subtract || 
                input[i] == operations.Subtraction ||
                input[i] == operations.Mul || 
                input[i] == operations.Multiply || 
                input[i] == operations.Multiplication
            ){
                opRequest.operation_type = input[i];
                continue;
            }
            
        if (isNaN(Number(input[i])))
            continue;
        else
            operands.push(input[i]);
        


        
    }

    opRequest.x = Number(operands[0])
    opRequest.y = Number(operands[1])

    return opRequest;
}

function ExplicitCommand(command: string):any{
    

    var requestParams = get_params(command)

    switch(requestParams.operation_type){

        case operations.Add:
        case operations.Addition:
            return {
                slackUsername:"Ronin",
                result: requestParams.x + requestParams.y,
                operation_type: requestParams.operation_type,

            }
        case operations.Sub:
        case operations.Subtract:
        case operations.Subtraction:
            return{
                slackUsername: "Ronin",
                result: requestParams.x - requestParams.y,
                operation_type: requestParams.operation_type
            }

        case operations.Mul:
        case operations.Multiplication:
        case operations.Multiply:
            return {
                slackUsername: "Ronin",
                result: requestParams.x * requestParams.y,
                operation_type: requestParams.operation_type
            }
        default:
            return{
                slackUsername: "Ronin",
                result: undefined,
                operation_type: "Invalid operation/command"
            }
    }
}