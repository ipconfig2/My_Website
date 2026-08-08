// ===== Hamburger + Sidenav Toggle =====
function openNav() {
  const hamburger = document.querySelector('.hamburger');
  const sidenav = document.getElementById('mySidenav');
  hamburger.classList.toggle('active');
  sidenav.style.width = sidenav.style.width === '250px' ? '0' : '250px';
}


// Close sidenav (optional, if you add a close button or link)
function closeNav() {
  const hamburger = document.querySelector('.hamburger');
  const sidenav = document.getElementById('mySidenav');

  hamburger.classList.remove('active');
  sidenav.style.width = '0';
}

// ===== Resume Download Button =====
document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("downloadButton");

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const downloadLink = document.createElement("a");
      downloadLink.href = "resume.pdf"; // Path to your PDF
      downloadLink.download = "Holden_Weber_Resume.pdf"; // File name
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
});
