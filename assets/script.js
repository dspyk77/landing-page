var copyrightYear = document.querySelector("#copyright")

function getCopyrightYear() {
  var dateTime = new Date()
  dateTime = dateTime.getFullYear()
  copyrightYear.insertAdjacentHTML('beforeend', `${dateTime}`)
}

getCopyrightYear()

copyrightYears.innerHTML = new Date().getFullYear();





