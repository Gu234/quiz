(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(8),i=n.n(s),c=(n(16),n(10)),l=n(1),o=n(2),u=n(4),d=n(3),m=n(5),h=(n(17),n(9)),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={isClicked:!1},n.handleClick=function(){n.setState({isClicked:!0}),n.props.onClick()},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return a.a.createElement("button",{onClick:this.handleClick,className:this.className(),disabled:this.isDisabled()},e)}},{key:"className",value:function(){return this.state.isClicked?this.props.is_correct_answer?"green":"red":this.props.is_correct_answer&&this.props.isSelectedAnswer?"green":void 0}},{key:"isDisabled",value:function(){return this.props.isSelectedAnswer}}]),t}(r.Component),w=new h.AllHtmlEntities,f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={quizState:"initial",data:null,correct_answer_index:Math.floor(4*Math.random()),currentQuestion:0,confirmButtonContent:"Choose an answer",score:0},n.showNextQuestion=function(){n.isSelectedAnswerCorrect()&&n.setState({score:n.state.score+1}),n.setSelectedAnswer(null),n.setState({currentQuestion:n.state.currentQuestion+1,correct_answer_index:Math.floor(4*Math.random())})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.data||fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentQuestion,r=t.data;return r?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"decoration-top"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("div",{className:"jumbotron"},a.a.createElement("div",{className:"jumbotron-item1"},"ARE YOU READY?!"),a.a.createElement("div",{className:"jumbotron-item2"},"QUIZ TIME!")),a.a.createElement("div",{className:"quiz"},this.isQuizFinished()?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"quiz-score-description"},"Your score:"),a.a.createElement("div",{className:"quiz-score"},this.state.score,"/10"),a.a.createElement("button",{onClick:this.reloadPage},"Again?")):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"quiz-question"},w.decode(r.results[n].question)),a.a.createElement("div",{className:"quiz-answers"},this.getAnswers().map((function(t){return a.a.createElement(v,{onClick:function(){return e.setSelectedAnswer(t)},is_correct_answer:e.isCorrectAnswer(t),isSelectedAnswer:e.isSelectedAnswer(),key:t},w.decode(t))}))),a.a.createElement("button",{onClick:this.showNextQuestion,className:this.setNextQuestionButtonClass()},this.setNextQuestionButtonMessage()))),a.a.createElement("div",{className:"decoration-bottom"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))):null}},{key:"setSelectedAnswer",value:function(e){this.setState({selectedAnswer:e})}},{key:"isSelectedAnswer",value:function(){return!!this.state.selectedAnswer}},{key:"isCorrectAnswer",value:function(e){return e===this.correctAnswer()}},{key:"correctAnswer",value:function(){return this.currentQuestion().correct_answer}},{key:"currentQuestion",value:function(){return this.state.data.results[this.state.currentQuestion]}},{key:"getAnswers",value:function(){var e=Object(c.a)(this.currentQuestion().incorrect_answers);return e.splice(this.state.correct_answer_index,0,this.correctAnswer()),e}},{key:"isSelectedAnswerCorrect",value:function(){return!!this.isSelectedAnswer()&&this.isCorrectAnswer(this.state.selectedAnswer)}},{key:"quizState",value:function(){return this.isSelectedAnswer()?this.isSelectedAnswerCorrect()?"green":"red":"initial"}},{key:"setNextQuestionButtonClass",value:function(){switch(this.quizState()){case"red":return"red";case"green":return"green";default:return"hidden"}}},{key:"setNextQuestionButtonMessage",value:function(){return this.isSelectedAnswerCorrect()?"Correct! Next question":"Wrong! Next question"}},{key:"isQuizFinished",value:function(){return this.state.currentQuestion===this.state.data.results.length}},{key:"reloadPage",value:function(){window.location.reload()}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ffd794dd.chunk.js.map