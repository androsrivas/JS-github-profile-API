const APIURL = 'https://api.github.com/users/';
const userProfile = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getUser = async ( user ) => {
    try {
        const response = await axios.get(APIURL + user);

        getUserInfo(response.data);
    } catch (error) {
        console.error(error)
    }
}

getUser("");

function getUserInfo ( user ) {
    console.log(user);
    const userBox = 
    `
        <section class="card" id="card">
            <a href=${ user.html_url }>
            <img class="avatar" src=${ user.avatar_url } alt=${ user.name }>
            </a>
            <div class="user-info">
            <h2>${ user.name }</h2>
            <p>${ user.location }</p>
                <ul>
                <li>${ user.followers }<strong>followers</strong></li>
                <li>${ user.following } <strong>following</strong></li>
                <li>${ user.public_repos} <strong>repos</strong></li>
                </ul>
            </div>
        </section>
    `;

    userProfile.innerHTML = userBox;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);
        search.value = "";
    }
});
