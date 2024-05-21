let content = "stelio";

function readFile(callback) {
  setTimeout(() => {
    console.log(content);
    callback();
  }, 3000);
}

function transformContent(content, callback) {
  setTimeout(() => {
    console.log(content.toUpperCase());
    callback();
  }, 2000);
}

function saveFile(callback) {
  setTimeout(() => {
    callback("File saved successfully");
  }, 3000);
}

function logCompletion(message) {
  setTimeout(() => {
    console.log(message);
  }, 1000);
}

function processFile() {
  console.log("Processing file...");
  readFile(() => {
    transformContent(() => {
      saveFile(() => {
        logCompletion(`Processed file with content: ${transformMessage}`);
      });
    });
  });
}

processFile();
