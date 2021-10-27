class Question{

    constructor(){


      this.title = createElement('h1');
      this.input1 = createInput("Enter Your Name Here ");
      this.input2 = createInput("Enter correct option number ");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }

    display(){
        this.title.html("My Quiz Game");
      this.title.position(350,0);

      this.question.html("Question:- Who is the present richest person in the world? ");
      this.question.position(150, 80);
      this.option1.html("1. Elon Musk");
      this.option1.position(150,100);
      this.option2.html("2. Jeff Bezoz");
      this.option2.position(150,120);
      this.option3.html("3. Bill Gates");
      this.option3.position(150,140);
      this.option4.html("4. Warren Buffet");
      this.option4.position(150, 160);

      this.input1.position(150,230);
      this.input2.position(350,230);
      this.button.position(290,300);
    }

} 