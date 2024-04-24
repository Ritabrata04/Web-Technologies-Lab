function changeContent() {
    mainContent.innerHTML = `
      <h2>Updated Interactive Area</h2>
      <p>This is the new interactive content.</p>
      <button class="button" id="restoreContentButton">Restore Content</button>
    `;
    document.getElementById('restoreContentButton').addEventListener('click', resetContent);
  }