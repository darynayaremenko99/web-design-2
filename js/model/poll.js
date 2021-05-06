import answer from "./answer.js";

export default class poll{
    constructor(){
        this.question = "";
        this.answerList = [];
    }

    addAnswer(answer){
        this.answerList.push(answer);
    }
}