const width = 5;
const container = document.querySelector("#container");
const numberOfBars = container.clientWidth / (width+2) | 0; //+2 for margin

// Create an array of random numbers
/* const data= Array.from({ length: numberOfBars }, () =>
Math.floor(Math.random() * 100) + 1);  // +1 to not get 0
*/

const dataList =[]
for(i=1;i<numberOfBars+1;i++)
  dataList.push(i)

// suffle the array using Fisher-Yates algorithm.
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

const data = shuffleArray(dataList);



// Create an array of div elements representing the data
const elements = data.map(d => {
  const el = document.createElement('div');
  el.className = 'bar';
  el.style.height = `${d}px`;
  el.style.width = `${width}px`;
  return el;
});

// Add the elements to the container
elements.forEach(el => container.appendChild(el));

// Bubble sort algorithm
const speed = 20; //in milli second 

async function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len -1 ; i++) {
    for (let j = 0; j < len - i-1 ; j++) {
      // Wait for a short time to animate the swap
      elements[j].style.backgroundColor= "yellow";
      elements[j+1].style.backgroundColor= "red";
      await new Promise(resolve => setTimeout(resolve, speed));

      // Swap elements and update their heights
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;

        const tmpHeight = elements[j].style.height;
        elements[j].style.height = elements[j + 1].style.height;
        elements[j + 1].style.height = tmpHeight;
      }
      elements[j].style.backgroundColor= "blue";
      elements[j+1].style.backgroundColor= "green";
    }
  }
  elements[0].style.backgroundColor = "green"
}

// Sort the data when the sort button is clicked
const sortButton = document.getElementById('sort-btn');
sortButton.addEventListener('click', () => {
  bubbleSort(data);
});