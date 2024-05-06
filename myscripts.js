function openNav() {
  var hamburger = document.querySelector('.hamburger');
  var sidenav = document.getElementById('mySidenav');
  hamburger.classList.toggle('active');
  sidenav.style.width = sidenav.style.width === '250px' ? '0' : '250px';
}

function closeNav() {
  var hamburger = document.querySelector('.hamburger');
  var sidenav = document.getElementById('mySidenav');
  hamburger.classList.remove('active');
  sidenav.style.width = '0';
}

document.getElementById("downloadButton").addEventListener("click", function() {
  var downloadLink = document.createElement("a");
  downloadLink.href = "resume.pdf"; // Path
  downloadLink.download = "Holden_Weber_Resume.pdf"; // Set the name for the downloaded file
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
});

