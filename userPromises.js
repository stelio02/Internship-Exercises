function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userData = [
                { id: 1, name: 'Stelio Papa', username: 'stelio02' },
                { id: 2, name: 'Lionel Messi', username: 'messi' }
            ];
            resolve(userData);
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userPosts = [
                { id: 1, userId: userId, title: 'Manager' },
                { id: 2, userId: userId, title: 'Football Player' }
            ];
            resolve(userPosts);
        }, 1500);
    });
}

function fetchDataAndProcess() {
    fetchUserData().then(userData => {
        console.log('Combined Data:');
        userData.forEach(user => {
            fetchUserPosts(user.id).then(userPosts => {
                const userPost = userPosts.find(post => post.userId === user.id);
                console.log(`User Data: id: ${user.id}, name: ${user.name}, username: ${user.username}, \n Post: id: ${userPost.id}, userId: ${userPost.userId}, title: ${userPost.title}`);
            });
        });
    });
}

fetchDataAndProcess();
