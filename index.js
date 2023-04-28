console.log('funguju!');

const renderRead = (items) => {
    document.querySelector('.read').innerHTML = items
    .map(oneEmail => `
        <div class="email">
            <div class="email__head">
            <button class="email__icon email__icon--opened"></button>
            <div class="email__info">
                <div class="email__sender">${oneEmail.sender.name}</div>
                <div class="email__subject">${oneEmail.subject}</div>
            </div>
            <div class="email__time">${oneEmail.time}</div>
            </div>
            <div class="email__body"></div>
        </div>
    `)
    .join('');
}

const renderUnread = (items) => {
    document.querySelector('.unread').innerHTML = items
    .map(oneEmail => `
        <div class="email">
            <div class="email__head">
            <button class="email__icon email__icon--closed"></button>
            <div class="email__info">
                <div class="email__sender">${oneEmail.sender.name}</div>
                <div class="email__subject">${oneEmail.subject}</div>
            </div>
            <div class="email__time">${oneEmail.time}</div>
            </div>
            <div class="email__body"></div>
        </div>
    `)
    .join('');
}

// fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=all')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        renderRead(data.emails);
    })

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        renderUnread(data.emails);
    })

