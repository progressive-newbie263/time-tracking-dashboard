fetch('/data.json').then((request) => {  
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
      <div class="flex relative bg-${item.bgColor} rounded-xl 
      z-10 mt-4 mb-10 h-[160px] overflow-hidden ">
        <img alt="${item.title.toLowerCase()}-icon" class="absolute right-4 -top-3" src="${item.icon}">
        
        <!--html code for each card-->
        <div class="flex z-20 bg-darkBlue rounded-xl h-[120px] w-full 
        absolute bottom-0 justify-between p-6 items-center">  
          <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between mb-3">
              <!--font: 600-->
              <span class="text-sm text-white font-semibold">${item.title}</span>
              <img class="cursor-pointer h-fit" alt="elli-icon" src="images/icon-ellipsis.svg">
            </div>
            
            <div class="flex flex-row justify-between">
              <!--font: 200-->
              <span class="text-2xl text-white font-extralight">${item.timeframes.weekly.current}hrs</span>
              <span>Last Week - ${item.timeframes.weekly.previous}hrs</span>
            </div>
          </div>
        </div>
      </div>
    `;  
  });
  document.querySelector('.card-section').innerHTML = contentHTML;
})
.catch((error) => {
  console.error('Error fetching the data:', error);
});
