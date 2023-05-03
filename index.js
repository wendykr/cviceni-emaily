// console.log('funguju!');

const renderTemplate = (items, icon) => {
<<<<<<< HEAD
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

=======
    let element, emailIcon = '';

    if (icon === 'read') {
        element = document.querySelector('.read');
        emailIcon = `<button class="email__icon email__icon--opened"></button>`;
    }

    if (icon === 'unread') {
        element = document.querySelector('.unread');
        emailIcon = `<button class="email__icon email__icon--closed"></button>`;
    }

    element.innerHTML = items
        .map(oneEmail => `
            <div class="email">
                <div class="email__head">
                ${emailIcon}
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

>>>>>>> e89f1f85ac7812e8f9127377b414489582876d9e
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