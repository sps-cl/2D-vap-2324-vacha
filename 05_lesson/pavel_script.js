// Pořadí operací
const precedenceValues = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
};


// PAVELSCRIPT
class PavelInterpreter {
    constructor() {
        this.variables = {}; // uchování variables v jazyku
    }

    // Přiřazení do proměnných
    assignVariable(name, value) {
        this.variables[name] = value;
    }

    printExpression(expression) {
        const result = this.evaluateExpression(expression);
        this.printValue(result);
    }

    printValue(value) {
        console.log(value);
    }

    evaluateExpression(expression) {

        // Vyhodnocování závorkování
        if (expression.startsWith('("') && expression.endsWith('")')) {
            const innerExpression = expression.slice(2, -2);
            return this.printValue(innerExpression);
        } else if (expression.startsWith('(') && expression.endsWith(')')) {
            const innerExpression = expression.slice(1, -1); // Remove the parentheses
            return this.evaluateExpression(innerExpression);
        }

        const tokens = expression.match(/("[^"]*"|\S+)/g);

        if (!tokens) {
            throw new Error('Invalid expression: ', tokens);
        }

        // je to přiřazení?
        const assignmentIndex = tokens.indexOf('PRIRAD');

        // Když potkáme if (můžeme změnit klidne i na KDYZ)
        if (tokens[0] == 'if') {
            const condition = tokens.slice(1, tokens.indexOf('then')).join(' ');
            const trueBranch = tokens.slice(tokens.indexOf('then') + 1, tokens.indexOf('else')).join(' ');
            const elseBranch = tokens.slice(tokens.indexOf('else') + 1, tokens.indexOf('end')).join(' ');


            if (this.evaluateCondition(condition)) {
                return this.evaluateExpression(trueBranch);
            } else {
                return this.evaluateExpression(elseBranch);
            }
        }

        // Ukončení if statementu
        if (tokens[0] === 'end') {
            if (tokens[tokens.length - 1] !== ';') {
                tokens.push(';');
            }

            return;
        }

        if (assignmentIndex !== -1) {
            const variableName = tokens[assignmentIndex - 1];
            const value = this.evaluateExpression(tokens.slice(assignmentIndex + 1).join(' '));
            this.assignVariable(variableName, value);
            return value;
        }

        // If it's not an assignment or conditional statement, evaluate the expression
        return this.evaluateAST(this.parseAST(tokens));
    }

    // Vyhodnocení if statementu
    evaluateCondition(condition) {

        //Rozdělení výrazu na části
        const [leftOperand, operator, rightOperand] = condition.split(' ');

        // Získání hodnot na jednotlivých stranách (je to proměnná nebo int už rovnou?)
        const leftValue = this.variables[leftOperand] !== undefined ? this.variables[leftOperand] : parseFloat(leftOperand);
        const rightValue = this.variables[rightOperand] !== undefined ? this.variables[rightOperand] : parseFloat(rightOperand);

        switch (operator) {
            case '==':
                return leftValue == rightValue;
            case 'VETSI':
                return leftValue > rightValue;
            default:
                throw new Error(`Invalid operator in condition: ${operator}`);
        }
    }

    /// Sestavení AS stromu
    parseAST(tokens) {
        const operators = ['*', '/', '+', '-', "na"]; // na jakože třeba 5 na 9
        const stack = [];
        const outputQueue = [];

        for (const token of tokens) {
            if (!isNaN(token)) {
                outputQueue.push(parseFloat(token));
            } else if (token in this.variables) {
                outputQueue.push(this.variables[token]);
            } else if (operators.includes(token)) {
                while (operators.includes(stack[stack.length - 1]) && this.precedence(token) <= this.precedence(stack[stack.length - 1])) {
                    outputQueue.push(stack.pop());
                }
                stack.push(token);
            } else {
                throw new Error(`Invalid token: ${token}`);
            }
        }

        while (stack.length > 0) {
            outputQueue.push(stack.pop());
        }

        return outputQueue;
    }


    // Přednosti
    precedence(operator) {
        return precedenceValues[operator] || 0;
    }

    /// Vyhodnocování stromu
    evaluateAST(ast) {
        const stack = [];

        for (const token of ast) {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                switch (token) {
                    case '+':
                        stack.push(operand1 + operand2);
                        break;
                    case '-':
                        stack.push(operand1 - operand2);
                        break;
                    case '*':
                        stack.push(operand1 * operand2);
                        break;
                    case "na":
                        stack.push(Math.pow(operand1, operand2))
                        break;
                    case '/':
                        stack.push(operand1 / operand2);
                        break;
                    default:
                        throw new Error(`Invalid operator: ${token}`);
                }
            }
        }

        if (stack.length !== 1) {
            throw new Error('Invalid expression', stack);
        }

        return stack.pop();
    }

    parseAndExecute(code) {
        const statements = code.split(/;/g);

        for (let statement of statements) {
            statement = statement.trim();
            if (statement) {
                if (statement.startsWith('print')) {
                    const expression = statement.substring(5).trim(); // Odstranění print 
                    this.printExpression(expression);
                } else {
                    this.evaluateExpression(statement);
                }
            }
        }


    }
}

const interpreter = new PavelInterpreter();

const code = `
x PRIRAD 5;
z PRIRAD 3;
c PRIRAD x + z;
dada PRIRAD 64 na 0.5;
if x VETSI 5 then
  branch01a PRIRAD 3
  branch01b PRIRAD 5
  vsechno PRIRAD 100
else 
  branch02a PRIRAD 30
  vsechno PRIRAD 0
end;
zzzz PRIRAD 30;
print(x + z + 3 + vsechno);
print("Ahoj");
`;

const code2 = `
    x PRIRAD 5;
    print(x);
    if 5 VETSI -1 then
        z = 5
    else 
        x = 3
    end;
       print("Ahoj")

`


interpreter.parseAndExecute(code);
console.log(interpreter.variables);