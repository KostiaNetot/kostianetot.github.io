'use strict';

let foundRepositories = [];
let changedReposArr = [];

const checkLocalStorage = () => {
  if (localStorage.getItem('found-repos')) {
    foundRepositories = JSON.parse(localStorage.getItem('found-repos'));
    createCardsfromArr(foundRepositories);
  }
  setSearchHeader(foundRepositories.length);
};

const setSearchHeader = (num) => {
  document.querySelector('#searchInfo').textContent = `Checked ${num} repositories:`;
};

const showFormAlert = (alert) => {
  document.querySelector('#searchInfo').textContent = alert;
  setTimeout(function () {
    setSearchHeader(foundRepositories.length)
  }, 3000);
};

const findRepoInData = (arr, val) => {
  return arr.filter((item) => item.name === val);
};

const showData = (obj) => {
  let repoId = obj.id,
    repoName = obj.name,
    repoOwner = obj.owner['login'],
    ownerUrl = obj.owner['html_url'],
    repoUrl = obj.html_url,
    ava = obj.owner['avatar_url'];

    const newRepo = setNewRepositoryCard(repoId, repoName, repoOwner, repoUrl, ownerUrl, ava);
    insertItemCard(newRepo);
    setSearchHeader(foundRepositories.length)
};

const setNewRepositoryCard = (id, name, owner, url, owUrl, ava) => {
  const newRepositoryCard = new RepositoryCard(id, name, owner, url, owUrl, ava);
  foundRepositories.push(newRepositoryCard);
  localStorage.setItem('found-repos', JSON.stringify(foundRepositories));

  return newRepositoryCard;
};

const insertItemCard = (obj) => {
  let card = `
    <div class="item-card" data-id="${obj.id}">
    <div class="item-card-inner-wrap">
      <div class="img-wrapper">
        <img class="avatar" src="${obj.ava}" alt="avatar">
      </div>
      <div class="text-wrapper">
        <h5 class="nameInfo">${obj.name}</h5>
        <p>id: <span class="bold idInfo">#${obj.id}</span></p>
        <p>owner: <a class="bold owner-info" href="${obj.owUrl}" target="_blank" title="owner page">${obj.owner}</a></p>
        <p><a class="link link-info" target="_blank" href="${obj.url}" title="repos page">repository link...</a></p>
      </div>
    </div>
  </div>
`;
  let itemCardwrapper = document.getElementById('itemsWrapper');
  itemCardwrapper.innerHTML += card;
};

function sortRepoCards() {
  if (!this.classList.contains('active')) {
    changedReposArr = foundRepositories.sort((a, b) => {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    fillCardsContainer(changedReposArr);
  } else {
    foundRepositories = JSON.parse(localStorage.getItem('found-repos'));
    fillCardsContainer(foundRepositories);
  }
  this.classList.toggle('active');
};

function filterRepoCards() {
  if (!this.classList.contains('active')) {
    let changedReposArr = foundRepositories.filter((item) => (item.id % 2 !== 0));
    fillCardsContainer(changedReposArr);
  } else {
    // foundRepositories = JSON.parse(localStorage.getItem('found-repos'));
    fillCardsContainer(changedReposArr);
  }
  this.classList.toggle('active');
};

const fillCardsContainer = (arr) => {
  document.getElementById('itemsWrapper').innerHTML = '';
  foundRepositories = arr;
  createCardsfromArr(foundRepositories);
};

const createCardsfromArr = (arr) => {
  arr.forEach((obj) => {
    insertItemCard(obj);
  });
};
