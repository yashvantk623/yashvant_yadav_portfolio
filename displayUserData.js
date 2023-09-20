function addUserCardToDisplay(userData) {
    const userDataList = document.getElementById('user-data-list');
    const userCard = createUserCard(userData);
    userDataList.appendChild(userCard);
}

function createUserCard(userData) {
    const listItem = document.createElement('li');
    listItem.classList.add('text-black');
    listItem.innerHTML = `
        <div class="border rounded-lg p-4 mb-4">
            <p>Username: ${userData.name}</p>
            <p>Email: ${userData.email}</p>
            <p>Contact Number: ${userData.contact}</p>
            <p>Password: ${userData.password}</p>
        </div>
    `;
    return listItem;
}
