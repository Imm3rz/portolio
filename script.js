const downloadButton = document.querySelector('.download-button');
const downloadIcon = document.querySelector('.download-icon');
const downloadLoader = document.querySelector('.download-loader');
const downloadCheckMark = document.querySelector('.check-svg');
const downloadText = document.querySelector('.button-copy');

// Set the path to your file
const resumeFilePath = 'downloads/Resume.pdf'; // Update with your file path

downloadButton.addEventListener('click', () => {
  // Prevent multiple clicks
  downloadButton.disabled = true;

  // Show loader and update the button text
  downloadIcon.classList.add('hidden');
  downloadLoader.classList.remove('hidden');
  downloadText.innerHTML = 'DOWNLOADING';

  // Simulate a real file download process
  setTimeout(() => {
    // Create a temporary <a> tag to trigger the file download
    const a = document.createElement('a');
    a.href = resumeFilePath;
    a.download = 'resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // After download, show the check icon and update the text
    downloadLoader.classList.add('hidden');
    downloadCheckMark.classList.remove('hidden');
    downloadText.innerHTML = 'DOWNLOADED';

    // Re-enable the button after some time
    setTimeout(() => {
      downloadButton.disabled = false;
      resetButtonState();
    }, 2000); // Reset the button state after 2 seconds
  }, 2000); // Simulate download preparation time
});

function resetButtonState() {
  downloadIcon.classList.remove('hidden');
  downloadLoader.classList.add('hidden');
  downloadCheckMark.classList.add('hidden');
  downloadText.innerHTML = 'DOWNLOAD';
}
