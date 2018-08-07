class EasyHttp {
    async getUrl(url) {
        const respond = await fetch(url);
        const respondData = await respond.json();
        return respondData;
    }

    async post(url, data) {
        const respond = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respondData = await respond.json();
        return respondData;
    }
    async put(url, data) {
        const respond = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respondData = await respond.json();
        return respondData;
    }
    async delete(url, data) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });

        const resData = await 'Resource Deleted...';
        return resData;
    }
}

// let http = new EasyHttp;
// http.getUrl('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .then(err => console.log(err))

