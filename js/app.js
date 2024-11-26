// "Spela igen" button: resets the game and goes to the start view
spelaIgenBtn.addEventListener("click", () => {
  initializeGame();
  showView("start-screen");
});

// "Visa poäng" button: shows the score view
visaPoangBtn.addEventListener("click", () => {
  updateScoreDisplay();
  showView("score-view");
});