
let names = ['John', 'Jane', 'Jack'];
let phoneNumbers = ['123-456-7890', '098-765-4321', '555-1212'];
load();

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `  <h1>My Contacts</h1>`;
    content.innerHTML += `<input id="name"  placeholder="Names">
                            <input id="phone" placeholder="Telefon">
                            <button onclick='addContact()'>Hinzufügen</button><br>`

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];
        
        content.innerHTML += `
        <div class="card">
            <b>Name:</b> ${name}<br>
            <b>Phone:</b> ${phoneNumber}<br>
            <button onclick="deleteContact(${i})">Löschen</button>
        </div>`;
        // Add a button to each contact with
    }
}

function addContact() {
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');

    names.push(name.value);
    phoneNumbers.push(phone.value);

    render();
    save();
    
    
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);

    render();
    save();
    
}

function save() {
    let namesAsText = JSON.stringify(names);
    let phoneNumbersAsText = JSON.stringify(phoneNumbers);  
    localStorage.setItem("names", namesAsText);
    localStorage.setItem("phoneNumbers", phoneNumbersAsText);
}

function load() {
    let storedNames = localStorage.getItem("names");
    let storedPhoneNumbers = localStorage.getItem("phoneNumbers");
    if (storedNames && storedPhone){
        names = JSON.parse(storedNames);
        phoneNumbers = JSON.parse(storedPhoneNumbers);
    }
    

    render();
}