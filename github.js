class GitHub {
    constructor() {
        this.clientId = 'd88038a744cbeae647bb';
        this.clientSecret = 'b8c4079be1112860d145443df9089cb4b4d42a2e';
        this.reposLimit = 5;
        this.reposSort = 'created: asc';
    };

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profileData = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposLimit}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repoData = await repoResponse.json();

        return {
            profileData,
            repoData
        };
    };
}