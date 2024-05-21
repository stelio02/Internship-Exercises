let content = "stelio";

function readFile(callback) {
  setTimeout(() => {
    callback(content);
  }, 3000);
}

function transformContent(callback) {
  setTimeout(() => {
    callback(content.toUpperCase());
  }, 2000);
}

function saveFile(callback) {
  setTimeout(() => {
    callback("File saved successfully");
  }, 3000);
}

function logCompletion(callback) {
  setTimeout(() => {
    callback("Log completed successfully.");
  }, 1000);
}

function processFile() {
  console.log("Processing file...");
  readFile((readMessage) => {
    console.log(readMessage);
    transformContent((transformMessage) => {
      console.log(transformMessage);
      saveFile((saveMessage) => {
        console.log(saveMessage);
        logCompletion((logMessage) => {
          console.log(logMessage);
        });
      });
    });
  });
}

processFile();
