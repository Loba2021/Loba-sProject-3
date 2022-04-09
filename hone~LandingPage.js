let htmlcategory = document.getElementById('category')
let rightcon = document.querySelector('.right')
let leftcon = document.querySelector('.left')
let leftext = document.getElementById('leftText')
let rightext = document.getElementById('rightText')

const navbar = document.querySelector('nav');
const bck = document.querySelector('.changenav');
const sliders = document.querySelectorAll('.sectcon');
const appearOptions = { 
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}
const backgroundOptions = { }



    const backgroundObserver = new IntersectionObserver(function (enteries, backgroundObserver){
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                navbar.classList.add('nav-scrolled');
                console.log(entry);
            } else{
                navbar.classList.remove('nav-scrolled');
            }
        });
    }, backgroundOptions)

    const appearOnScroll = new IntersectionObserver(function(enteries, appearOnScroll){
        enteries.forEach(entry => {
            if(!entry.isIntersecting){
                return
            }else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target)
            }
        });
    }, appearOptions)

    sliders.forEach(slider => {
        appearOnScroll.observe(slider)
    });
    backgroundObserver.observe(bck);
    //begin fetching.............


    async function GETDATA() {
        fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0].categories);
            data.forEach((element, index) => {
                // console.log(element.category);
                
                if (index < 1) {
                    // if (element.author1=='Stephen R.Sorensen') {
                    //     $('.sectcon').click(function(){
                    //         console.log(element.author1);
                    //     })
                    // }
                    
                    leftcon.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i id="track">50likes</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    rightText.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                        $('#leftText').click(function(){
                            bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                        })
                    
                        $('#rightText').click(function(){
                            bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                        })
                    
                }

                if (index > 0 && index <= 1) {
                    leftcon2.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon2.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText2.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere p</p>
                    `
                    rightText2.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facer</p>
                    `
                    $('#leftcon2').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                    $('#rightcon2').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                }

                if (index > 1 && index < 3) {
                    leftcon3.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon3.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText3.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    rightText3.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    $('#leftcon3').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                    $('#rightcon3').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                }

                if (index > 2 && index < 4) {
                    leftcon4.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon4.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText4.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    rightText4.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    $('#leftcon4').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                    $('#rightcon4').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                }

                if (index > 3 && index < 5) {
                    leftcon5.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon5.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText5.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    rightText5.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    $('#leftcon5').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                    $('#rightcon5').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                }

                if (index > 4 && index < 6) {
                    leftcon6.innerHTML += `<img src="${element.bookcovers.url1}" alt="" width="100%" height="100%">`
                    rightcon6.innerHTML += `<img src="${element.bookcovers.url2}" alt="" width="100%" height="100%">`
                    leftText6.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title1}</h1>
              <span><h4>Author: ${element.author1}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    rightText6.innerHTML = `
                    <button class="btn Prevbtn animate__animated animate__fadeIn">Preview</button>
              <h1>${element.title2}</h1>
              <span><h4>Author: ${element.author2}</h4>    <i>Likes: 50</i></span>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere placeat sequi unde esse dolor quos perspiciatis enim nisi, rem autem fugiat! Unde, architecto?</p>
                    `
                    $('#leftcon6').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title1}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url1}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author1}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                    $('#rightcon6').click(function(){
                        bckbody.innerHTML += `
                            <div class="bodycover">
    <span  class="goback" onclick="GoBack"><a href="hone~LandingPage.html"><i class="fa fa-arrow-left">Back</i></a></span>
                            <div class="EventDisplay">
                              <h1>${element.title2}</h1>
                              <div class="d-flex justify-content-around">
                                <img src="${element.bookcovers.url2}" alt="" width="50%">
                              <div style="width: 50%;">
                                <span style="color: rgb(255, 174, 0); font-size: 30px;"><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i><i class="fa fa fa-star"></i> <i class="fa fa-star-half-full"></i></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti harum itaque, numquam ducimus, commodi sequi provident aut eos, quia quibusdam iusto quam qui sapiente sunt fugiat quisquam enim omnis.</p>
                                <h4>Author: ${element.author2}</h4>
                                <p>Price: $${element.price}:00</p>
                                <button class="buybtn">PURCHASE <i class="fa fa-bookmark-o"></i> </button>
                              </div>
                              </div>
                            </div>
                          </div>
                            `
                    })
                }

            });
        })
    }

// $('.sectcon').click(function(){
//                 console.log('hello world');
//             })

    GETDATA()
