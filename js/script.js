document.addEventListener('DOMContentLoaded', function() {
  function updateStatusIndicator() {
      var indicator = document.querySelector('.status-indicator'); 
      if (indicator) {
          var currentTime = new Date();
          var currentHour = currentTime.getHours();

          if (currentHour >= 8 && currentHour < 22) {
              indicator.style.backgroundColor = 'green'; 
          } else {
              indicator.style.backgroundColor = 'grey'; 
          }
      } else {
          console.error('El elemento con la clase "status-indicator" no se encuentra en el DOM.');
      }
  }

  updateStatusIndicator(); 

  setInterval(updateStatusIndicator, 60000); 
});

