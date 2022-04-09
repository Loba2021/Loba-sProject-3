const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTION = [
    {
        name:'rock',
        emoji:'✊',
        beats:'scissors'
    },
    {
        name:'paper',
        emoji:'🖐',
        beats:'rock'
    },
    {
        name:'scissors',
        emoji:'✌',
        beats:'paper'
    }
]
let reached10 = false
function incrementScore(scoreSpan) {
    if (scoreSpan.innerText == 10){
        
        document.getElementById('endBtn').setAttribute('disabled',false);
        return reached10 = true;
    }
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
    
}
selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
    const selectionName = selectionButtons.dataset.selection
    const selection = SELECTION.find(selection => selection.name === selectionName)
    makeSelection(selection)
    })
})
function makeSelection(selection) {
    if (reached10 == true) {
        return;
    }
    const computerSelection = randomSelections()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    addSectionResult(computerSelection, computerWinner)
    addSectionResult(selection, yourWinner)
    
    if(yourWinner) incrementScore(yourScoreSpan)
    if(computerWinner) incrementScore(computerScoreSpan)
    // console.log(computerSelection)
}
function addSectionResult(selection, winner) {
    let div = document.createElement('div')
    div.innerText = ""
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
    // if(selection.emoji > 1){
    //     div.innerText = ''
    // }
}
function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}
function randomSelections() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomIndex]
}