import poll from "../model/poll.js";
import answer from "../model/answer.js";
import controller from "../controller/controller.js";


export default class pollView{
    constructor(pollList){
        this.pollList = pollList;
    }

    pollBlock(){
        return document.querySelector("#pollBlock");
    }

    renderPollShort(poll, currentPollShortId, func){
        let pollHtml = '<div id="' + currentPollShortId + '" class="box white-color center-box col-md-10"><b>' + poll.question + '</b></div>';
        pollBlock.innerHTML += pollHtml;  
    }


    renderPollFull(poll){
        console.log("it works");
        console.log(poll);
        let pollBlock = document.querySelector("#pollBlock");
        let pollHtml = '<div class="box coral-color center-box col-3">'+
        '<h4 style="text-align: center;">' + poll.question + '</h4><br>' +
        '<div class="answer-block">' +
          '<input class="radio" type="radio" id="aw1" name="aw1" value="'+ poll.answerList[0].text + '">'+
          '<label type="radio" class="answer" for="aw1">' + poll.answerList[0].text + '</label>' +
        '</div>' +
        '<div class="answer-block">' +
            '<input class="radio" type="radio" id="aw2" name="aw2" value="'+ poll.answerList[1] + '">'+
            '<label type="radio" class="answer" for="aw2">' + poll.answerList[1].text + '</label>' +
        '</div>' +
        '<div class="answer-block">'+
            '<input class="radio" type="radio" id="aw3" name="aw3" value="'+ poll.answerList[2] + '">'+
            '<label type="radio" class="answer" for="aw3">' + poll.answerList[2].text + '</label>' +
       '</div><br><button id="saveAnswer" class="btn btn-success">Save</button></div>';

       pollBlock.innerHTML = pollHtml;
        
        document.getElementById("saveAnswer").addEventListener("click", this.saved.bind(this));
    }


    renderQuestion(){

    }

    renderAnswerList(pollList){
        // document.querySelector("#main").innerHTML = '<div id="pollBlock" class="box coral-color center-box col-md-6"> </div>';
        // let pollBlock = document.querySelector("#pollBlock");
        // let htmlForPollBlock = "";
        // pollList.forEach(element => {
        //     htmlForPollBlock += this.pollView.renderPoll();
        // });
        // console.log("htmlForPollBlock");

    }

    createPoll(){
        document.querySelector("#main").innerHTML = '<div id="pollBlock" class="box coral-color center-box col-md-6">'+
        '<h2 class="centered">Create the poll</h2><br>'+
        '<label for="question">Question</label><br>'+
        '<input id="question" type="text">' +
        '<br><br>' +
        '<label for="av1">Answer variant 1</label><br>' +
        '<input id="av1" type="text">' +
        '<br><br>' +
        '<label for="av2">Answer variant 2</label><br>' +
        '<input id="av2" type="text">' +
        '<br><br>' +
        '<label for="av3">Answer variant 3</label><br>' +
        '<input id="av3" type="text"> </br></br>' +
         '<button id="savePoll" class="btn btn-success">Save</button>' +
             '</div>';

        document.getElementById("savePoll").addEventListener("click", this.savePoll.bind(this));
    }

    savePoll(){
        let questionText = document.getElementById("question").value;
        let av1 = new answer();
        let av2 = new answer();
        let av3 = new answer();
        av1.text = document.getElementById("av1").value;
        av2.text = document.getElementById("av2").value;
        av3.text = document.getElementById("av3").value;
        let newPoll = new poll();
        console.log(newPoll);
        newPoll.question = questionText;
        newPoll.addAnswer(av1);
        newPoll.addAnswer(av2);
        newPoll.addAnswer(av3);
        this.pollList.addPoll(newPoll);      
        this.saved();
    }

    saved(){
        document.querySelector("#main").innerHTML = '<div class="box green-color  center-box col-md-6" > <h2 style="text-align:center;"> Saved </h2> </div>'
        setTimeout(this.mainView.bind(this), 1000);
    }

    mainView(){
        document.querySelector("#main").innerHTML = ' <div class="row flex main-poll-content"><button id="createPollButton" class="col-md-4">Create poll</button><button id="passPollButton" class="col-md-4">Pass the poll</button></div>';
        console.log(this.pollList);
        let cnt = new controller(this.pollList);
    }

}