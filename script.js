const newsList = document.getElementById('news-list');
const linksList = document.getElementById('links-list');
const genresList = document.getElementById('genres-list');
const tagsList = document.getElementById('tags-list');

let newsData = [    //NEWS欄の内容
    
];
let linksData = [   //LINKS欄の内容

];
let genresData = [  //GENRES欄の内容

];
let tagsData = [    //TAGS欄の内容

];

newsData.forEach((news) => {    //NEWS欄の内容を作る
    // 親要素の取得
    const parentElement = newsList;
    // 新しいHTML要素の作成
    const newElement = document.createElement("li");
    newElement.innerText = news;
    // 作成したHTML要素を追加
    parentElement.appendChild(newElement)
});
linksData.forEach((link) => {   //LINKS欄の内容を作る
    // 親要素の取得
    const parentElement = linksList;
    // 新しいHTML要素の作成
    const newElement = document.createElement("li");
    newElement.innerText = link;
    // 作成したHTML要素を追加
    parentElement.appendChild(newElement)
});
genresData.forEach((genre) => {  //GENRES欄の内容を作る
    // 親要素の取得
    const parentElement = genresList;
    // 新しいHTML要素の作成
    const newElement = document.createElement("li");
    newElement.innerText = genre;
    // 作成したHTML要素を追加
    parentElement.appendChild(newElement)
});
tagsData.forEach((tag) => {  //TAGS欄の内容を作る
    // 親要素の取得
    const parentElement = tagsList;
    // 新しいHTML要素の作成
    const newElement = document.createElement("li");
    newElement.innerText = tag;
    // 作成したHTML要素を追加
    parentElement.appendChild(newElement)
});