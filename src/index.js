const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const toysURL= "http://localhost:3000/toys"
const username= document.querySelector(".input-text")
const image= document.getElementById("img")



// YOUR CODE HERE
document.addEventListener("DOMContentLoaded", function() {
      fetch(toysURL)
      .then((resp) => resp.json()) // Transform the data into json
      .then(data => {
        data.forEach(addToysCard) 

       
    })
    

    function addToysCard(toy){
      let div1=document.getElementById("toy-collection")

      let div2=document.createElement('div')
      div2.className="card"
      div1.append(div2)

      let h2= document.createElement('h2')
      h2.innerHTML=toy.name
      div2.append(h2)

      let img=document.createElement('img')
      img.className="toy-avatar"
      img.src=toy.image
      div2.append(img)

      let p=document.createElement('p')
      p.innerHTML=`${toy.likes}`
      div2.append(p)

      likebutton=document.createElement('button')
      likebutton.className="like-btn"
      likebutton.innerHTML="like"
      div2.append(likebutton)

      likebutton.style.backgroundColor="green"
      likebutton.addEventListener('click',function(e){
        e.preventDefault() 
        console.log(p)
        fetchPatch(toy, p)

      })
       

    }


      addBtn.addEventListener('click', () => {
    // hide & seek with the form

    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener for form here

    submit=document.querySelector(".submit")
    submit.addEventListener('click',function(){
      //e.preventDefault()
      fetchPost()
    })


    function fetchPost(){
      
        fetch(toysURL, {
          method: "POST",
          headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
          body: JSON.stringify({
                name: username.value ,  
                image:image.value,
                likes: 0
          })
        }).then(function(response){return response.json()})
        .then(function(result){console.log(result)})

      }


      } else {
        toyForm.style.display = 'none'
      }
    }) 


    function fetchPatch(toys, p){
              
        fetch(`http://localhost:3000/toys/${toys.id}`, {
        
          method: "PATCH",
          headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                  },
          body: JSON.stringify({
                likes: ++toys.likes   
          })
        })
        
        p.innerHTML = `${toys.likes}`

     }
})

function x(){
  console.log(hello)
}







// OR HERE!
