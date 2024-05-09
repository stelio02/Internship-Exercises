function fetchUserData(callback) {
    setTimeout(() => {
        const userData = [
            { id: 1, name: 'Stelio Papa', username: 'stelio02' },
            { id: 2, name: 'Liobel Messi', username: 'messi' }
        ]; 
        callback(userData);
    }, 3000); 
};

function fetchUserPosts(userId, callback) {
    setTimeout(() => {
        const userPosts = [
            { id: 1, userId: userId, title: 'Project Manager' },
            { id: 2, userId: userId, title: 'Soccer Player'}
        ];
        callback(userPosts);
    }, 1500); 
};

function fetchDataAndProcess() {
    fetchUserData(userData => {
        console.log('User Data:', userData);
        fetchUserPosts(userData.id, userPosts => {
            console.log('User Posts:', userPosts);
            
            console.log('Combined Data:', { userData, userPosts });
        });
    });
};

fetchDataAndProcess();
