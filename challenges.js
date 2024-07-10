// String Reversal - Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.
const reverseString = (string) => {
    let reversed = '';

    class Letter {
        constructor(val){
            this.val = val;
            this.next = null;
        }
    };

    class Stack {
        constructor(){
            this.first = null;
            this.last = null;
            this.size = 0;
        }

        push(val){
            let letter = new Letter(val);

            if (!this.size){
                this.first = letter;
                this.last = letter;
            } else {
                letter.next = this.first;
                this.first = letter;
            }
            this.size++;
        }

        pop(){
            if (!this.size){
                return null;
            }

            let removeLetter = this.first;

            this.first = this.first.next;
            this.size--;

            if (this.size === 0){
                this.last = null;
            }
            return removeLetter.val;
        }
    }

    let stack = new Stack();

    for (let char of string){
        stack.push(char);
    }
    
    while (stack.size > 0){
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("hello"));