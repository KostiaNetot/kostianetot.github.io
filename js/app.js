'use strict';

const searchBtn = document.getElementById('searchBtn');
const sortBtn = document.getElementById('sortBtn');
const filterBtn = document.getElementById('filterBtn');
const clientId = 'ae6d6d2c50611fc34b67';
const clientSecret = '63a12636dcf3c6e6bc594c90ea33ed912bdc0389';
const reposDataUrl = `https://api.github.com/repositories?client_id=${clientId}&client_secret=${clientSecret}`;
let testUrl = 'test.json';

  checkLocalStorage();

  const fetchRepositories = async () => {
    const callApi = await fetch(reposDataUrl);
    const reposData = await callApi.json();
    return reposData;
  };

  searchBtn.addEventListener('click', () => {
    let inputValue = document.getElementById('searchInput').value;
    inputValue = inputValue.toLowerCase();
    if (!!inputValue.trim()) {
      fetchRepositories().then((res) => {
        let foundRepo = findRepoInData(res, inputValue)[0];
        showData(foundRepo);
      }).catch((err) => {
        showFormAlert(`No matches with ${inputValue}`);
      });
    } else {
      showFormAlert('Field is emty!');
    }
    document.forms['search-repo'].reset();
  });

  sortBtn.addEventListener('click', sortRepoCards);
  filterBtn.addEventListener('click', filterRepoCards);
