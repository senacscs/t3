
function displayDictionary(words) {
  const list = document.getElementById("dictionaryList");
  const quantity = document.getElementById("quantity");
  quantity.textContent = `${words.length} palavras`;
  list.innerHTML = "";

  words.sort((a, b) => a.word.localeCompare(b.word));

  words.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "bg-white p-4 rounded shadow w-full";

    listItem.innerHTML = `
          <div class="flex items-center gap-2">
            <h2 class="text-xl font-semibold text-gray-800">${item.word}</h2>
            <span class='text-gray-400 text-xs'>${item.type}</span>
          </div>
          <p class="text-gray-600">${item.definition}</p>
        `;

    list.appendChild(listItem);
  });
}

displayDictionary(dictionaryData);

document.getElementById("searchBar").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredWords = dictionaryData.filter((item) =>
    item.word.toLowerCase().includes(searchTerm)
  );
  displayDictionary(filteredWords);
});
