import poll from "../model/poll.js";
import pollView from "./pollView.js";
import pollList from "../model/pollList.js"

export default class pollListView{
    constructor(pollList){
        this.pollView = new pollView();
        this.pollList = pollList;
    }

    renderPollList(){
        document.querySelector("#main").innerHTML = '<div id="pollBlock" class="box coral-color center-box col-md-6"><h2 class="centered">Pass the poll</h2><br></div>';
        
        
        this.pollList.forEach((element, index) => {
            let currentPollShortId = 'smallBox' + index;
            this.pollView.renderPollShort(element, currentPollShortId);
        });

        this.pollList.forEach((element, index) => {
            let currentPollShortId = 'smallBox' + index;
            document.getElementById(currentPollShortId).addEventListener("click", this.renderPoll.bind(this, index));
        }) 

    }

    renderPoll(index){
        this.pollView.renderPollFull(this.pollList[index]);
    }
     

}