import poll from "./poll.js";

export default class pollList{
    constructor(){
        this.pollList = [];
    }

    addPoll(poll){
        this.pollList.push(poll);
    }
}