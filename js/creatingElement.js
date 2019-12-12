'use strict';

const insertItemCard = (obj) => {
  let card = `
    <div class="item-card" data-id="${obj.id}">
      <div title="remove" class="remove">&#10006;</div>
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
  let cards = itemCardwrapper.children;
  setEvent(cards);
};
