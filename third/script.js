const d = document;

let cards = [
    {
        id: '1',
        head: 'Baphomet',
        body: 'Baphomet is a deity allegedly worshipped by the Knights Templar that subsequently became incorporated into various occult and mystical traditions. The name Baphomet appeared in trial transcripts for the Inquisition of the Knights Templar starting in 1307. It first came into popular English usage in the 19th century during debate and speculation on the reasons for the suppression of the Templars.',
        img: 'https://i.pinimg.com/736x/c6/17/b8/c617b8e4de77ea3e8253047bc4877ddd--satanic-art-dark-angels.jpg',
    },
    {
        id: '2',
        head: 'Lucifer',
        body: 'Lucifer is the name of various figures in folklore associated with the planet Venus. Originally stemming from a son of the personified dawn, the goddess Aurora, in Roman mythology, the entity s name was subsequently absorbed into Christianity as a name for the devil. Modern scholarship generally translates the term in the relevant Bible passage where the Ancient Greek figure s name was historically used (Isaiah 14:12) as "morning star" or "shining one" rather than as a proper noun, Lucifer.',
        img: 'https://1.bp.blogspot.com/-gcts91QdApk/YHNV0rJV2JI/AAAAAAAACJQ/d6y3ZvNrG1YBwpNJSTN7CU5V9awSJniSgCLcBGAsYHQ/s1200/lucifer.jpg',
    },
    {
        id: '3',
        head: 'Azazel',
        body: 'In the Bible, the name Azazel  appears in association with the scapegoat rite; the name represents a desolate place where a scapegoat bearing the sins of the Jews during Yom Kippur was sent. During the end of the Second Temple period, his association as a fallen angel responsible for introducing humans to forbidden knowledge emerged due to Hellenization, Christian narrative, and interpretation exemplified in the Book of Enoch. His role as a fallen angel partly remains in Christian and Islamic traditions.',
        img: 'https://i.pinimg.com/originals/10/52/23/105223fd5ef7ab43c659f3c6a64184fe.jpg',
    }
]

let cardsCont = d.getElementById('cards');

createManyCards(cards, cardsCont);

function createManyCards(array, cont) {
    array.forEach(item => {
        cont.insertAdjacentHTML('beforeend', createCard(item));
    });
}

function createCard({ img, head, body, id }) {
    return `
        <div class='card' id='${id}'>
            <img src='${img}' alt='${head}'>
            <h2>${head}</h2>
            <p>${cutText(body)}</p>
            <div class='contBut'>
                <button class='but-delete'>Удалить</button>
                <button class='but-info'>Подробнее</button>
            </div>
        </div>
    `
}

function cutText(text, length = 100) {
    return text.substr(0, length) + '...';
}

d.querySelectorAll('.but-info').forEach(btn => {
    btn.addEventListener('click', show);
});

let num;

let prevbut = d.getElementById('prev');
let nextbut = d.getElementById('next');

const modal = d.querySelector('.modal');

function show(e) {
    modal.style.display = 'flex';
    num = e.target.closest('.card').id;
    showCard(cards, e);
    console.log(num);
}

function showCard(array, e) {
    let { img, body, head } = array.find(item => item.id == num);
    d.querySelector('.leftCont > img').src = img;
    d.querySelector('.rightCont > h3').textContent = head;
    d.querySelector('.rightCont > p').textContent = body;
    if(num==1){
        prevbut.classList.add('hiden');
    }
    else{
        prevbut.classList.remove('hiden');
    }
    if(num==cards.length){
        nextbut.classList.add('hiden');
    }
    else{
        nextbut.classList.remove('hiden');
    }
}

prevbut.addEventListener('click', (e) => {
    if (num > 1) {
        --num;
        showCard(cards, e);
    }
});

nextbut.addEventListener('click', (e) => {
    if (num <= cards.length) {
        num++;
        showCard(cards, e);
    }
});

modal.addEventListener('click', e => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

const crest = d.querySelector('.modalClose');

crest.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
}

d.addEventListener('keydown', e => {
    if (e.code = 'ESC') {
        closeModal();
    }
});

d.querySelectorAll('.but-delete').forEach(btn => {
    btn.addEventListener('click', deleteCard);
});

function deleteCard(e) {
    e.target.closest('.card').remove();
}


