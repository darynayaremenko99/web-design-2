import pollListView from "../view/pollListView.js";
import poll from "../model/poll.js";
import pollList from "../model/pollList.js"
import pollView from "../view/pollView.js";
import answer from "../model/answer.js";

export default class Controller{
    constructor(pollListFromView){
        console.log("controller");
        this.pollListView = new pollListView();
        this.pollList = new pollList();        
        console.log(pollListFromView);
        if(pollListFromView === null || pollListFromView === undefined){
            this.pollList = new pollList();
        } else{
            this.pollList = pollListFromView;
        }
        this.createPollButton = document.querySelector("#createPollButton");
        this.passPollButton = document.querySelector("#passPollButton");
        this.mainBlock = document.querySelector("#main");
        this.createPollButton.addEventListener("click", this.onCreate.bind(this));
        this.passPollButton.addEventListener("click", this.onPass.bind(this));
        
        
    }

    onCreate(){
        console.log("on create");
        this.pollView = new pollView(this.pollList);
        this.pollView.createPoll(); 

        //this.generateRandomPoll();
      
    }
    generateRandomPoll(){
        let answer1 = new answer();
        let answer2 = new answer();
        answer1.text = "text of answer 1";
        answer2.text = "text of answer 2";
        let poll1 = new poll();
        poll1.question = "How are you doing?";
        poll1.addAnswer(answer1);
        poll1.addAnswer(answer2);
        console.log(poll1);
        this.pollList.addPoll(poll1);
    }

    onPass(){
        console.log("on pass");
        console.log(this.pollList);
        this.pollListView = new pollListView(this.pollList.pollList); 
        this.pollListView.renderPollList();
    }



}