const github = new GitHub();
const ui = new UI();
const searchUser = document.querySelector('#search-user');

searchUser.addEventListener('keyup', (e) => {
    const searchUserValue = e.target.value;

    if (searchUserValue === "") {
        ui.clearProfile();
        return;
    }

    github.getUser(searchUserValue).then(data => {
        if (data.profileData.message === 'Not Found' && searchUserValue !== "") {
            ui.clearAlert();
            ui.showAlert('User not found', 'alert alert-danger');
        } else {
            if (searchUserValue !== "") {
                ui.clearAlert();
                ui.showProfile(data.profileData);
                ui.showRepos(data.repoData);
            }
        }
    });
});