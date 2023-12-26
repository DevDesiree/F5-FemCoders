const APIURL = 'https://api.github.com/users/';
const searchUser = document.getElementById("search");
const main = document.getElementById("main");

async function getUsers() {
    let user = searchUser.value;
    console.log(user);

    try {
        const response = await axios.get(APIURL + user);
        console.log(response.data);

        let name = response.data.name;
        let avatar_url = response.data.avatar_url;
        let descripcion = response.data.bio;
        let followers = response.data.followers;
        let following = response.data.following;
        let repos = response.data.public_repos;

        let recentRepos = await getRepos(user);

        console.log(name + avatar_url + descripcion + followers + following + repos + recentRepos);

        const contentCard = `
            <div class="card">
                <div><img class="avatar" src="${avatar_url}"></div>
                <div class="user-info">
                    <h2>${name}</h2>
                    <p>${descripcion}</p>
                    <ul>
                        <li>${followers} Followers</li>
                        <li>${following} Following</li>
                        <li>${repos} Repos </li>
                    </ul>
                    ${recentRepos.slice(0, 5).map(repo => `<div class="repo">${repo}</div>`).join('')}
                </div>
            </div>
        `;

        main.innerHTML = contentCard;
    } catch (error) {
        console.error(error);
        console.log("Don't found this profile");

        let msgError = "No profile with this Username";
        const contentCardError = `
            <div class="card">
                ${msgError}
            </div>
        `;

        main.innerHTML = contentCardError;
    }
}

async function getRepos(user) {
    try {
        let saveData = [];
        const response = await axios.get(`${APIURL}${user}/repos`);

        response.data.forEach(repo => {
            saveData.push(repo.name);
        });

        console.log(saveData);
        return saveData;
    } catch (error) {
        console.error(error);
    }
}

searchUser.addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getUsers();
    }
});
