class GitHub {
    constructor() {
        this.client_id = 'a39f48ec4d81800b4c98';
        this.client_secret = '54f58c2f112400af12ebda957752795b5ecceb54';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
        
        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}