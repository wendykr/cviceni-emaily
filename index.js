// console.log('funguju!');

const renderTemplate = (items, icon) => {
    let emailIcon = '';

    if (icon === 'read') {
        emailIcon = `opened`;
    }

    if (icon === 'unread') {
        emailIcon = `closed`;
    }

    const item = items
        .map(oneEmail => `
            <div class="email">
                <div class="email__head">
                <button class="email__icon email__icon--${emailIcon}"></button>
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

    document.querySelector(`#${icon}`).insertAdjacentHTML('afterend', item);

}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
    .then((response) => response.json())
    .then((data) => {
        renderTemplate(data.emails, "read");
    })

fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
    .then((response) => response.json())
    .then((data) => {
        renderTemplate(data.emails, "unread");
    })