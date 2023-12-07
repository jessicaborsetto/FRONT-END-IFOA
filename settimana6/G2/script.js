const check = function (){
    if (localStorage.getItem('InputName')) {
        testo = 'Ciao, ' + localStorage.getItem('InputName')
      } else {
        testo = 'No data'
      }
      document.querySelector('.title').innerHTML = testo
}

const inviaForm = function () {
    let user = document.getElementById('InputName').value
    localStorage.setItem('InputName', user)
    check()
  }

  const deleteForm = function () {
    localStorage.removeItem('InputName')
    check()
  }

  window.onload = check