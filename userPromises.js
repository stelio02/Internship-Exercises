const userData = [
  { id: 1, name: "Stelio Papa" },
  { id: 2, name: "Lionel Messi" },
];

const postsData = [
  { id: 1, userId: 1, title: "Post 1", body: "Information 1..." },
  { id: 2, userId: 1, title: "Post 2", body: "Information 2..." },
  { id: 3, userId: 2, title: "Post 3", body: "Information 3..." },
];

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userData);
    }, 1000);
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postsData.filter((post) => post.userId === userId));
    }, 1000);
  });
}

function processUserDataAndPosts(user, posts) {
  return `User: ${user.name}\nPosts:\n${posts
    .map((post) => `Title: ${post.title}\nBody: ${post.body}\n`)
    .join("")}`;
}

function main() {
  fetchUserData()
    .then((users) => {
      users.forEach((user) => {
        fetchUserPosts(user.id)
          .then((posts) => {
            const result = processUserDataAndPosts(user, posts);
            console.log(result);
          })
          .catch((error) => {
            console.error(`Error fetching posts for user ${user.id}:`, error);
          });
      });
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
}

main();
