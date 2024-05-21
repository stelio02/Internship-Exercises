let content = "stelio";

function readFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, 3000);
  });
}

function transformContent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(content.toUpperCase());
    }, 2000);
  });
}

function saveFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

function logCompletion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function processFile() {
  console.log("Processing File...");
  return readFile()
    .then((result) => {
      console.log(result);
      return transformContent();
    })
    .then((result) => {
      console.log(result);
      return saveFile();
    })
    .then(() => {
      console.log("File saved successfully.");
      return logCompletion();
    })
    .then(() => {
      console.log("Log completed successfully.");
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}

processFile();
