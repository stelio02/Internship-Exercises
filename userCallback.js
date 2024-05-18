const userData = [
  { id: 1, name: "Stelio Papa", username: "stelio02" },
  { id: 2, name: "Lionel Messi", username: "messi" },
];

const postsData = [
  { id: 1, userId: 1, title: "Post 1", body: "Information..." },
  { id: 2, userId: 1, title: "Post 2", body: "Information 2..." },
  { id: 3, userId: 2, title: "Post 3", body: "Information 3..." },
];

function fetchUserData(callback) {
  setTimeout(() => {
    callback(userData);
  }, 1000);
}

function fetchUserPosts(userId, callback) {
  setTimeout(() => {
    callback(postsData.filter((post) => post.userId === userId));
  }, 1000);
}

function processUserDataAndPosts(user, posts) {
  return `User: ${user.name}\nPosts:\n${posts
    .map((post) => `Title: ${post.title}\nBody: ${post.body}\n`)
    .join("")}`;
}

function main() {
  fetchUserData((users) => {
    users.forEach((user) => {
      fetchUserPosts(user.id, (posts) => {
        console.log(processUserDataAndPosts(user, posts));
      });
    });
  });
}

main();
