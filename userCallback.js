function fetchUserData(callback){
    setTimeout(( )=> {
        const userData = [
            {id: 1, name: 'Stelio Papa', username: 'stelio02'},
            {id: 2, name:'Lionel Messi', username: 'messi' }
        ];
        callback(userData);
    }, 1000);
};

function fetchUserPosts(userId, callback) {
    setTimeout(() => {
        const userPosts = [
            { id: 1, userId: userId, title: 'Manager'},
            { id: 2, userId: userId, title: 'Football Player'}
        ];
        callback(userPosts);
    }, 1500); 
};

/*
function fetchDataAndProcess() {
    fetchUserData(userData => {
        console.log('User Data:', userData);
        fetchUserPosts(userData, userPosts => {
            console.log('User Posts:', userPosts);
            
            console.log('Combined Data:', { userData, userPosts });
        });
    });
};

function fetchDataAndProcess() {
    fetchUserData(userData => {
        console.log('User Data:');
        userData.forEach(user => {
            console.log(`id: ${user.id}, name: ${user.name}, username: ${user.username}`);
        });
        fetchUserPosts(userData[0].id, userPosts => { // Assuming the first user's id is used for posts
            console.log('\nUser Posts:');
            userPosts.forEach(post => {
                console.log(`id: ${post.id}, userId: ${post.userId}, title: ${post.title}`);
            });

            console.log('\nCombined Data:');
            userData.forEach(user => {
                const userPost = userPosts.find(post => post.userId === user.id);
                console.log(`User ${user.name}'s Data: id: ${user.id}, name: ${user.name}, username: ${user.username}, title: ${userPost.title}`);
            });
        });
    });
};
*/
function fetchDataAndProcess() {
    fetchUserData(userData => {
        console.log('Combined Data:');
        userData.forEach(user => {
            fetchUserPosts(user.id, userPosts => {
                const userPost = userPosts.find(post => post.userId === user.id);
                console.log(`User Data: id: ${user.id}, name: ${user.name}, username: ${user.username}, Post: id: ${userPost.id}, userId: ${userPost.userId}, title: ${userPost.title}`);
            });
        });
    });
};

fetchDataAndProcess();

