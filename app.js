
const github = new GitHub;
const ui = new UI;
//Search input
const serachUser = document.getElementById('searchUser');
serachUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== '') {
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                }
            })
    } else {
        ui.clearProfile();
    }
})