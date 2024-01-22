// script.js
function downloadFile(fileName, filePath) {
    // Create a dummy anchor element
    var link = document.createElement('a');

    // Set the download attribute with the provided file name
    link.download = fileName;

    // Set the href attribute with the provided file path
    link.href = filePath;

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger a click on the anchor element
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
}
