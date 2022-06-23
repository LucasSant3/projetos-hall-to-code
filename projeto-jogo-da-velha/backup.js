const mainBattleFieldElement = document.getElementById('main-battle-field');
const battleFieldElement = document.querySelectorAll('.battle-field');
const resetButtonElement = document.getElementById('reset-button');

let lastClicked = null; // 'X' ou 'O'
let gameEnded = false;

const possibleMoves = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

function checkGameEnded(callback) {
    possibleMoves.every(possibleMove => {
        // possibleMove = [0, 1, 2]
        let innerHtmls = []; // X, X, X | X, O, X
        possibleMove.forEach(move => {
            // move = 0 | 1 | 2
            const element = battleFieldElement[move];
            innerHtmls.push(element.innerHTML);
        });

        const innerHTMLFiltered = innerHtmls.filter(html => html !== '');
        winner = new Set(innerHTMLFiltered).size === 1 && innerHTMLFiltered.length === possibleMove.length;
        
        callback(winner ? innerHTMLFiltered[0] : null);

        if (winner) {
            return false;
        }

        return true;
    });
}

battleFieldElement.forEach(element => {
    element.addEventListener('click', (event) => {
        const target = event.target;

        if (gameEnded) {
            return;
        }

        if (!target.innerHTML) {
            lastClicked = lastClicked === 'X' ? 'O' : 'X';
            target.innerHTML = lastClicked;
            checkGameEnded(function (winner) {
                if (winner) {
                    console.log('quem ganhou foi: ', winner);
                    gameEnded = true;
                }
            });
        }
    })
});

resetButtonElement.addEventListener('click', () => {
    battleFieldElement.forEach(element => {
        element.innerHTML = '';
        gameEnded = false;
    })
});