async function GETDATA() {
    fetch('http://localhost:3000/stories&fiction')
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element, index) => {
            // console.log(data);
            showdem.innerHTML += `
            
            <div class="sectcon left">
        <img src="${element.url}" alt="" width="100%" height="100%">
        <div class="prevcon">
          <div class="prevtext" id="leftText">
          <a href="hone~ReadersPage.html">
          <button class="btn Prevbtn animate__animated animate__fadeIn">Free</button>
          </a>
          <h1>${element.title}</h1>
          <span><h4>Author: ${element.author}</h4>    <i>Likes: 50 <i class="fa fa-thumbs-o-up"></i></i></span>
          </div>
        </div>
      </div>
    
            `
        });
    })
}

GETDATA()