'use strict';

let inputValue = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sortBtn = document.getElementById('sortBtn');
const filterBtn = document.getElementById('filterBtn');

  const fetchRepositories = async (repo) => {
    const callApi = await fetch(`https://api.github.com/search/repositories?q=${repo}`);
    const reposData = await callApi.json();
    return reposData;
  };

  const setReposData = () => {
    fetchRepositories(inputValue.value).then((res) => {
      let resArr = res.items;
      foundRepositories.splice(0, foundRepositories.length);
      document.getElementById('itemsWrapper').innerHTML = '';
      resArr.forEach((obj) => {
        showData(obj);
      });
      document.forms['search-repo'].reset();
    }).then(() => {
      setSearchHeader(foundRepositories.length)
    })
  };

const formSearch = document.forms['search-repo'];

formSearch.addEventListener('submit', function (e) {
  e.preventDefault();
  setReposData();
});

function asd() {
  console.log('asd');
}

searchBtn.addEventListener('click', () => {
  setReposData();
});

  sortBtn.addEventListener('click', sortRepoCards);
  filterBtn.addEventListener('click', filterRepoCards);
