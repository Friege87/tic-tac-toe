let title = [];
let message = [];

function render() {
    let main = document.getElementById('notice');
    main.innerHTML = '';
    for(let i = 0; i < title.length; i++) {
        main.innerHTML += `<div class="notice">
            <b>${title[i]}</b> <br>
            ${message[i]} <br>
            <img onclick="deleteThis(${i})" src="./img/muell.svg" class="trash">
        </div>`;
    }
}

function addNotice() {
    let titles = document.getElementById('title');
    let messages = document.getElementById('message');

    title.push(titles.value);
    message.push(messages.value);

    render();
}

function deleteThis(i){
    title.splice(i, 1);
    message.splice(i, 1);

    render();
}

function save() {
    localStorage.setItem('notices', JSON.stringify({
    title,
    message
  }));
}

function load() {
    let notices = localStorage.getItem('notices');
  if(notices) {
    notices = JSON.parse(notices);
    title = notices.title;
    message = notices.message;
  }

  render();
}