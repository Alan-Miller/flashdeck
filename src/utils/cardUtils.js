export function flip(e, id) {
  e.stopPropagation();
  const card = document.getElementById(id);
  card.classList.toggle('flip');
  card.classList.add('fade-in');
}

export function dropCard(e, direction, firstCardContainer) {
  e.stopPropagation();

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
      Buttons disappear on drop
      Drop styles added
      Reset button and card styles after drop animation
  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

  const buttons = firstCardContainer.children[0].children[1].children;
  [].forEach.call(buttons, button => button.style.display = 'none');

  firstCardContainer.classList.add(`drop-${direction}`);

  setTimeout(() => {
    firstCardContainer.style.display = 'none';
    firstCardContainer.classList.remove('drop-left', 'drop-right');
  }, 400);
}

export const getRank = index => {
  index = index % 13;
  return ['A','2','3','4','5','6','7','8','9','10','J','Q','K'][index];
}