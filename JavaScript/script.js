function toggleContent(cardId) {
  const content = document.getElementById(`cardContent${cardId}`);
  const button = document.querySelector(`.card[data-card-id="${cardId}"] .expand-btn .icon`);

  if (content.style.display === 'block') {
      content.style.display = 'none';
      button.textContent = '+';
  } else {
      content.style.display = 'block';
      button.textContent = '-';
  }
}
