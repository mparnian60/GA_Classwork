class DomManager {
    constructor() {
        console.log("DomManger online!");

        
    }

    drawBoostrapBase() {
        $('body').append(`
        <div class="container">
        <div class="row">
            <div class="col-12">                
                <div class="jumbotron" id="jumbo">
                    <h1 class="display-4" id="jumbo-heading"></h1>
                    <p class="lead" id="jumbo-lead"></p>
                    <hr class="my-4">   
                    <!-- Append will go here -->  
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card">                
                <div class="card-body" id="char-sel-body">
                <div id ="select-btn" class="btn-group" role="group" aria-label="Basic example"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card">
                    <img src="" class="card-img-top" id="char-chosen-img" alt="...">
                    <div class="card-body" id="char-chosen-body">
                    </div>
                  </div>
            </div>
        </div>
    </div>`);
    }

    drawWellcomeScreen(setPlayerTypeFunction, startRoundCB) {
    this.drawBoostrapBase();

        $('#jumbo-heading').text('Rock Paper Scissor');
        $('#char-sel-body').prepend('<h2>Select your character!</h2>');

        const selectRockButton = $('<button class="btn btn-primary">Rock</button>').on('click',() => (setPlayerTypeFunction('rock')));
        const selectPaperButton = $('<button class="btn btn-secondary">Paper</button>').on('click',() => (setPlayerTypeFunction('paper')));
        const selectScissorButton = $('<button class="btn btn-success">scissor</button>').on('click',() => (setPlayerTypeFunction('scissor')));
        $('#select-btn').append(selectRockButton);
        $('#select-btn').append(selectPaperButton);
        $('#select-btn').append(selectScissorButton);

        $('#char-chosen-body').append('<h3 id="selectActor">Select an actor!</h3>')

        const startGameBtn = $('<button class="btn btn-success">Start game!</button>').on('click',() => startRoundCB());
        $('#jumbo').append(startGameBtn);
    }

    showSelectedActor(type) {
//other clever way to write below down
    $('#char-chosen-img').attr('src', `./images/${type}.jpeg`);//make sure you have backticks in the first and last of sentences

        if(type.toLowerCase() === 'rock'){
            $('#char-chosen-img').attr('src', './images/rock.jpeg');
        }else if(type.toLowerCase() === 'paper'){
            $('#char-chosen-img').attr('src', './images/paper.jpeg');
        }else if(type.toLowerCase() === 'scissor'){
            $('#char-chosen-img').attr('src', './images/scissor.png');
        }
        
        $('#selectActor').text('Selected: '+ type);

    }

    clearTheDom() {
        $('body').children().remove();// if we dont use children, it will remove body as well
        //that's why we put children
    }

    drawRoundResultScreen(winner, nextRoundCB) {
        console.log(winner);
        $('body').append('<h1>Round Result</h1>');
        $('body').append('<h2>The winner is: '+ winner + '</h2>');

        const nextGameGameBtn = $('<button>Next Round!</button>').on('click',() => nextRoundCB());
        $('body').append(nextGameGameBtn);

    }
}