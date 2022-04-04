'use strict'

var gQuests = [
    { id: 1, opts: ['Rüppell\'s fox', 'Fennec fox'], correctOptIndex: 1 },
    { id: 2, opts: ['Manatee', 'Dugong'], correctOptIndex: 0 },
    { id: 3, opts: ['Bone-beaked stork', 'Shoebill'], correctOptIndex: 1 },
    { id: 4, opts: ['Umi-Yumi', 'Aye-Aye'], correctOptIndex: 1 },
    { id: 5, opts: ['Axolotl', 'Coraciidae'], correctOptIndex: 0 }

]

var gCurrQuestIdx = 0


function init(elBtn) {
    gCurrQuestIdx = 0
    renderQuest()
    elBtn.classList.add("none")
    var elQuest = document.querySelector(`.quest${gCurrQuestIdx + 1}`)
    elQuest.classList.remove("none")
}

function isCorrect(elBtn) {
    var currQuest = gQuests[gCurrQuestIdx]

    if (elBtn.innerText === currQuest.opts[currQuest.correctOptIndex]) {
        alert('Correct!')
        gCurrQuestIdx += 1
        nextQuest()
    } else {
        alert('Incorrect.. try again!')
    }
}

function nextQuest() {
    if (gCurrQuestIdx >= gQuests.length) {
        alert('You won!')
        var elCurrQuest = document.querySelector(`.quest${gQuests.length}`)
        elCurrQuest.classList.add("none")
        var elBtn = document.querySelector('.startgame')
        console.log(elBtn)


    } else {
        var elCurrQuest = document.querySelector(`.quest${gCurrQuestIdx}`)
        console.log(elCurrQuest)
        var elNextQuest = document.querySelector(`.quest${gCurrQuestIdx+1}`)
        elCurrQuest.classList.add("none")
        elNextQuest.classList.remove("none")
    }


}


function renderQuest() {
    var strHTML = ''

    var elBody = document.querySelector("body")

    for (var i = 0; i < gQuests.length; i++)

        strHTML += `<div class="none quest${i + 1}">

<img src="img/${i + 1}.jpg" alt="" class="animal-imgs">

<button class="first-choice" onclick="isCorrect(this)">
    ${gQuests[i].opts[0]}
</button>

<button class="second-choice" onclick="isCorrect(this)">
    ${gQuests[i].opts[1]}
</button>

</div>`


    elBody.innerHTML += strHTML
}
