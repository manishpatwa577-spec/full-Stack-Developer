let name = document.querySelector("h1");
let email = document.querySelector("p");
let img = document.querySelector("img");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    fetching().then((user) => {
        name.textContent = user.results[0].name.first;
        email.textContent = user.results[0].email;
        img.src = user.results[0].picture.large;
    });
});

async function fetching() {
    let data = await fetch("https://randomuser.me/api/");
    let fData = await data.json();
    return fData;   // ✅ yaha change hai
}