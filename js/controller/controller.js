export default class Controller{
    constructor(){
        this.main = new Vue({ 
            el: '#main',
            data: {
                create: false,
                choose: true,
                answer: false,
                list: false,
                saved: false,
                poll:{
                    question: "",
                    answer1:"",
                    answer2:"",
                    answer3:""
                },
                pollList:[],
                createAction: ()=>{
                    this.main.create = true;
                    this.main.choose = false;
                },
                passAction: ()=>{
                    this.main.list = true;
                    this.main.choose = false;
                },
                saveCreateAction: ()=>{
                    this.main.pollList.push({...this.main.poll});
                    this.main.poll = {
                        question: "",
                        answer1:"",
                        answer2:"",
                        answer3:""
                    };  
                    console.log(this.main.pollList);
                    console.log(this.main.poll);
                    this.main.create = false;
                    this.showSaveMessage();
                    axios.post('https://localhost:44351/api/poll/', this.main.poll);
                },
                passPollQuestion: (question)=>{
                    this.main.poll = this.main.pollList.find(poll => poll.question == question);
                    this.main.list = false;
                    this.main.answer = true;
                    axios.get('https://localhost:44351/api/pollList/')
                    .then((response) => {
                        this.main.pollList = response;
                    });
                },
                savePassAction: ()=>{
                    this.main.answer = false;
                    this.main.create = false;
                    this.showSaveMessage();
                }
            }
        });   
    }

    showSaveMessage(){
        this.main.saved = true;
        setTimeout(()=>{
            this.main.saved = false;
            this.main.choose = true;
        },2000);
    }
}