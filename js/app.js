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
      resArr.forEach((obj) => {
        showData(obj);
      });
    }).then(() => {
      setSearchHeader(foundRepositories.length)
    })
  };

searchBtn.addEventListener('click', () => {
  setReposData();
});

  sortBtn.addEventListener('click', sortRepoCards);
  filterBtn.addEventListener('click', filterRepoCards);
