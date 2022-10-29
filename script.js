const cards = document.querySelectorAll('.card');
let index = 0,
    sliderTimer = null;

// Function to change the cards
const changeCard = (num) => {
    cards[index].classList.remove('active');
    index += num;

    if (index < 0) {
        index = cards.length - 1;
    } else if (index === cards.length) {
        index = 0;
    }
    cards[index].classList.add('active');
}


// Function to chnage cards automatically
const autoPlay = () => {
    sliderTimer = setInterval(() => changeCard(1), 7000);
}


// Function to stop the change of cards automatically
const stopAutoPlay = () => {
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches(".arrow.next") || e.target.matches(".arrow.prev") ||
            e.target.matches(".card") || e.target.matches(".img-container") ||
            e.target.matches(".profile-img") || e.target.matches(".card__texts") ||
            e.target.matches(".card-name") || e.target.matches(".card-profession") ||
            e.target.matches(".buttons")) {
            clearInterval(sliderTimer);
        }
    })
}

// Function to restart the change of cards automatically
const restartAutoPlay = () => {
	document.addEventListener('mouseout', (e) => {
        if (e.target.matches(".arrow.next") || e.target.matches(".arrow.prev") ||
            e.target.matches(".card") || e.target.matches(".img-container") ||
            e.target.matches(".profile-img") || e.target.matches(".card__texts") ||
            e.target.matches(".card-name") || e.target.matches(".card-profession") ||
            e.target.matches(".buttons")) {
            autoPlay();
        }
    })
}


document.addEventListener('click', (e) => {
    if (e.target.matches(".arrow.next")) {
        changeCard(1)
    } else if (e.target.matches(".arrow.prev")) {
        changeCard(-1)
    }
})

autoPlay();
stopAutoPlay();
restartAutoPlay();