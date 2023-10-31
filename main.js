//ARRAYS
const classPlacement = ['Griffindor', 'Hufflepuff', 'Ravenclaw','Slytherin']
const students = []
const expelledGroup = []

// Reveal sorting div
function showDiv() {
  document.getElementById('welcomeDiv').style.display = "block";
}

// CARD LAYOUT
const renderToDom = (array) => {

  let domString = ""

array.map((object, index) => {
  domString += 
      `<div class="card mb-3"  style="max-width: 340px;">
        <div class="row g-0">
          <div class="col-md-4" id="${object.house}">
          </div>
          <div class="col-md-8">
            <div class="card-body" >
              <h5 class="card-title" id ="nameCard">${object.name}</h5>
              <p class="card-text">${object.house.toUpperCase()}</p>
              <button type ="button" class="btn btn-danger" id="expel--${index}" >EXPEL</button>
            </div>
          </div>
        </div>
      </div>`
    })
    app.innerHTML = domString
}

//CREATE NEW STUDENT CARD / give house placement 
const form = document.querySelector("form")

form.addEventListener('submit',  (event) => {
  event.preventDefault()
  
    const newStudentObj ={
      id: students.length +1,
      name: document.querySelector("#studentName").value,
      house: classPlacement[Math.floor(Math.random() * classPlacement.length)],
      studentId: Math.floor(Math.random() * (999 - 100) ) + 100
      }
    

    students.push(newStudentObj)
    renderToDom(students)
    form.reset()

  })

// render new array with card : NAME AND HOUSE ON CARD  & expel button
// display school cards on left side of page
const jail = document.querySelector("#jail")

const renderToJail = (array) => {
  let domStringJail = ""

  array.map((object, index) => {
    domStringJail += 
        `<div class="card m-1" style="width: 15rem;" id="${index}">
        <img src="https://www.looper.com/img/gallery/dumbledores-history-with-voldemort-explained/l-intro-1641410297.jpg" alt="Death Eater">
        <div class="card-body text-center">
          <p class="h6 card-text text-dark">Unfortunately, <span class="text-danger bold">${object.name}</span> went over to the dark side</p>
        </div>
      </div>`
      })
      
      jail.innerHTML = domStringJail
  }




// expel Button -- move to new array on right side of page
const expelStudent = document.querySelector("#app")

expelStudent.addEventListener("click", (e) => {
  if(e.target.id.includes("expel")){

    const [,index] = e.target.id.split("--");
    
    expelledGroup.push(students[index])
    students.splice(index, 1)
    
    renderToDom(students)
    renderToJail(expelledGroup)
  }
  
})

//filter function
const filter = (house) => {

  const filteredArray = []
  for(object of students){
      if(object.house === house){
        filteredArray.push(object)
    }
  }
  renderToDom(filteredArray)
}

const filterButtons = document.querySelector("#filter-buttons")
filterButtons.addEventListener("click", (e) => {
  const id = e.target.id 
  const possibleTypes = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

  if(id === "all"){
    renderToDom(students)
  } else if(possibleTypes.includes(id)){
    filter(id)
  }
  console.log("got clicked")
})


const startApp = () => {

  




renderToDom(students)
  events()
}

startApp()
