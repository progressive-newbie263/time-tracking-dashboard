fetch('./data.json').then((request) => {  
  if(!request.ok) {
    console.log('Oops! Something went wrong.');
    return null;
  }
  return request.json();
})
.then((data) => {
  if (!data) {
    return;
  }

  let contentHTML = '';

  data.forEach((item) => {
    contentHTML += `
      <div class="flex relative bg-${item.bgColor} rounded-xl z-10 mt-4 mb-10 h-[160px] 
      overflow-hidden items-center hover:scale-110 hover:ease-in-out hover:duration-300
        md:h-full md:mt-0 
      ">
        <img alt="${item.title.toLowerCase()}-icon" class="absolute right-4 -top-3" src="${item.icon}">
        
        <!--html code for each card-->
        <div class="flex z-20 bg-darkBlue rounded-xl h-[120px] w-full 
          absolute bottom-0 justify-between p-6 md:h-[160px] 
          cursor-pointer hover:bg-hoverDarkBlue
        ">  
          <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between mb-3 items-center">
              <!--font: 600-->
              <span class="text-sm text-white font-semibold">
                ${item.title}
              </span>
              
              <img class="cursor-pointer h-fit" alt="elli-icon" src="images/icon-ellipsis.svg">
            </div>
            
            <div class="flex flex-row justify-between items-center 
              md:flex-col md:items-start
            ">
              <!--font: 200, add in item.title to be able to select all items-->
              <span id="currentTime-${item.title}" class="text-2xl text-white font-extralight md:text-5xl">
                ${item.timeframes.weekly.current}hrs
              </span>
              
              <span id="previousTime-${item.title}" class="md:mt-3 text-desaturatedBlue">
                Last Week - ${item.timeframes.weekly.previous}hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById('card-section').innerHTML = contentHTML;

  //func for toggling between cases:
  dailyToggle(data);
  weeklyToggle(data);
  monthlyToggle(data);
})
.catch((error) => {
  console.error('Error fetching the data:', error);
});



//function to change datas into daily
function dailyToggle(data) {
  const dailySelector = document.getElementById('daily-selector');

  dailySelector.addEventListener('click', () => {
    data.forEach((item) => {
      document.getElementById(`currentTime-${item.title}`).innerHTML = `
        ${item.timeframes.daily.current}hrs
      `;

      document.getElementById(`previousTime-${item.title}`).innerHTML = `
        Last Day - ${item.timeframes.daily.previous}hrs
      `;

      // dailySelector.classList.add('white-text');
      // weeklySelector.classList.remove('white-text');
      // monthlySelector.classList.remove('white-text');
    });
  });
}

//function to change datas into weekly
function weeklyToggle(data) {
  const weeklySelector = document.getElementById('weekly-selector');
  
  weeklySelector.addEventListener('click', () => {
    data.forEach((item) => {
      document.getElementById(`currentTime-${item.title}`).innerHTML = `
        ${item.timeframes.weekly.current}hrs
      `;

      document.getElementById(`previousTime-${item.title}`).innerHTML = `
        Last Week - ${item.timeframes.weekly.previous}hrs
      `;

      // dailySelector.classList.remove('white-text');
      // weeklySelector.classList.add('white-text');
      // monthlySelector.classList.remove('white-text');
    });
  });
}

//function to change datas into monthly
function monthlyToggle(data) {
  const monthlySelector = document.getElementById('monthly-selector');

  monthlySelector.addEventListener('click', () => {
    data.forEach((item) => {
      document.getElementById(`currentTime-${item.title}`).innerHTML = `
        ${item.timeframes.monthly.current}hrs
      `;

      document.getElementById(`previousTime-${item.title}`).innerHTML = `
        Last Month - ${item.timeframes.monthly.previous}hrs
      `;

      // dailySelector.classList.remove('white-text');
      // weeklySelector.classList.remove('white-text');
      // monthlySelector.classList.add('white-text');
    });
  });
}

//fun experiment:
function toggleBGColor() {
  const toggleColor = document.getElementById("toggle-bg-button");
  toggleColor.addEventListener('click', () => {
    document.body.classList.toggle('white-mode');
    toggleColor.classList.toggle('dark-mode');

    if(toggleColor.innerText === 'Dark Mode') {
      toggleColor.innerText = 'Light Mode';
    } else {
      toggleColor.innerText = 'Dark Mode';
    };
  })
}

toggleBGColor();

function saveToStorage() {
  localStorage.getItem()
}