let data = [{
        title: 'Hunger Games',
        isBorrowed: true,
    },
    {
        title: 'Harry Potter',
        isBorrowed: true,
    },
    {
        title: 'Assassins Creed',
        isBorrowed: true,
    },
    {
        title: 'Percy Jackson',
        isBorrowed: false,
    },
    {
        title: 'Fifty Shades of Grey',
        isBorrowed: true,
    },
];


function displayBook(title) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].title === title) {
            return data[i].isBorrowed;
        }
    }
};

console.log(displayBook('Percy Jackson'));


function listBook() {
    let title = [];
    let index = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].isBorrowed == true) {
            title[index] = data[i].title;
            index++;
        } 
    }
    return title;
};

console.table(listBook());
