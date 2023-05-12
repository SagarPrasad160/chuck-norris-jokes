const fetchJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      document.getElementById("joke").textContent = response.value;
    }
  };

  xhr.send();
};

// on button click
document.getElementById("joke-btn").addEventListener("click", fetchJoke);

// on load
fetchJoke();
