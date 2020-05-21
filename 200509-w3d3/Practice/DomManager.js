class DomManager {
    constructor(){
        // console.log("DomManager running");

    }

    styleWithBootstrap() {

    $('body').append(`
    <div class="container">
        <div class="row">
            <div class="col-12">

                <div class="jumbotron">
                    <h1 class="display-4" id="jumbo-heading"></h1>
                    <p class="lead"></p>
                    <hr class="my-4">
                    <p id="jumbo-paragraph"></p>
                    <a class="btn btn-primary btn-lg" id="selectCharBtnOne" href="#" role="button"></a>
                    <a class="btn btn-secondary btn-lg" id="selectCharBtnTwo" href="#" role="button"></a>
                    <a class="btn btn-success btn-lg" id="selectCharBtnThree" href="#" role="button"></a>
                </div>

        <div class="row">
            <div class="col-6">

                <div class="card" id="cardWithImage" style="width: 18rem;">
                    <img src="" class="card-img-top" id="chosenImag" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="actorSelection"></h5>
                    <a href="#" class="btn btn-dark" id="startGameBtn"></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
        `)
    }

    drawWellcomeScreen(setPlayerTypeFunction, startRoundFunction) {

        this.styleWithBootstrap();

        $('#jumbo-heading').text('Rock, Scissor, Paper Game');
        $('#jumbo-paragraph').text("Select your character");

        $('#selectCharBtnOne').text('Rock').on('click', () => setPlayerTypeFunction('rock'));
        $('#selectCharBtnTwo').text('Paper').on('click', () => setPlayerTypeFunction('paper'));
        $('#selectCharBtnThree').text('Scissor').on('click', () => setPlayerTypeFunction('scissor'));

        

        $('#actorSelection').text('Select an actor!');

        $('#startGameBtn').text('Start game').on('click', () => startRoundFunction());
    }

    showSelectedActor(type) {

        $('#actorSelection').text('Selected: '+ type);

        if(type.toLowerCase() === 'rock'){
            $('#chosenImag').attr('src','./images/rock.png');
        }else if(type.toLowerCase() === 'paper'){
            $('#chosenImag').attr('src','./images/paper.png');
        }else if(type.toLowerCase() === 'scissor'){
            $('#chosenImag').attr('src','./images/scissor.png');
        }

        //2 Q
        //1 Why we don't need to call styleWithBootstrap inside showSelectedActor and it works without calling but drawWellcomeScreen didn't work

    }

    clearTheDom () {
        $('body').children().remove();
    }

    showTheResult (winner, reStartRoundFunction) {
        $('body').append('<h1>Game result</h1>');
        $('body').append('<h2>The winner is '+ winner +'</h2>');

        const gameRestart = $('<button>Restart the game</button>').on('click', () => reStartRoundFunction());
        $('body').append(gameRestart);
    }
}

