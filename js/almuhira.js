var amburger = document.querySelector(".amburger");
var menu = document.querySelector(".menu");
var reveals = document.querySelectorAll(".reveal");
var body = document.querySelector("body");

for (let index = 0; index < menu.getElementsByTagName("li").length; index++) {
    menu
        .getElementsByTagName("li")[0]
        .firstElementChild.classList.toggle("selected");
    menu.getElementsByTagName("li")[index].addEventListener("click", () => {
        var selected = index;
        for (var j = 0; j < menu.getElementsByTagName("li").length; j++) {
            if (j != selected) {
                menu
                    .getElementsByTagName("li")
                [j].firstElementChild.classList.remove("selected");
            } else {
                menu
                    .getElementsByTagName("li")
                [j].firstElementChild.classList.toggle("selected");
            }
        }
    });
}

// show small menu or hide it
amburger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("showMenu");
});

window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        var windowsheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;
        if (revealtop < windowsheight - revealpoint) {
            reveals[i].classList.add("fade-up");
        } else {
            reveals[i].classList.remove("fade-up");
        }
    }
});
// var newsLetter = document.querySelector('#newsLetter')[0].value
var form = document.querySelectorAll("#FormData");
var isRequesting = false







var Data = {};
var ErroMessage = {
    header: "",
    message: "",
};
form = (event) => {
    event.stopPropagation();
    var value = event.target.value;
    var name = event.target.name;
    return (Data = { ...Data, [name]: value });
};

handleSubmitnewsLetter = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var newsLetter = document.querySelector("#newsLetter")[0].value;
    console.log(newsLetter)
    if (!newsLetter) {
        body.innerHTML += `
            <div class="message_notifier error">
                <div class="notifier_header">
                    <h5 id="error"> Erreur !</h5>
                    <span>X</span>
                </div>
                <p>
                    Vous ne pouvez pas envoyer un formulaire vide
                </p>
            </div>`
        ;
        let mymessage = document.body.querySelector(".message_notifier");
        mymessage.querySelector("span").addEventListener("click", () => {
            mymessage.remove();
        });
    } else {
        fetch("https://newsletterlaravel1.herokuapp.com/api/addmail", {
            method: "post",
            body: JSON.stringify({
                email: newsLetter,
                AppCode: 1123
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => {
            console.log(response.status)
            body.innerHTML += `
                <div class="message_notifier success">
                    <div class="notifier_header">
                        <h5 id="success"> OK !</h5>
                        <span>X</span>
                    </div>
                    <p>
                        Vous Avez Souscrit avec success a notre infolettre !
                    </p>
            </div>`;
            let mymessage = document.body.querySelector(".message_notifier");
            mymessage.querySelector("span").addEventListener("click", () => {
                mymessage.remove();
            });
        }).then((json) => console.log(json)).catch((error) => {

            body.innerHTML += `
                <div class="message_notifier error">
                    <div class="notifier_header">
                        <h5 id='error'>Une erreur est survenu</h5>
                        <span>X</span>
                    </div>
                    <p>
                        Vérifier votre connection internet puis réessayer l'opération !
                    </p>
                </div>`
                ;

            let mymessage = document.body.querySelector(".message_notifier");
            mymessage.querySelector("span").addEventListener("click", () => {
                mymessage.remove();
            });
            console.log("an error occur ! checkout your network");
            console.log(error);
        });
    }
};



handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(Data).length === 0) {
        body.innerHTML += `
            <div class="message_notifier error">
                <div class="notifier_header">
                    <h5 id="error"> Erreur !</h5>
                    <span>X</span>
                </div>
                <p>
                    Vous ne pouvez pas envoyer un formulaire vide
                </p>
            </div>`
        ;

        let mymessage = document.body.querySelector(".message_notifier");
        mymessage.querySelector("span").addEventListener("click", () => {
            mymessage.remove();
        });

    } else {
        let loadingAnimation = document.querySelector('.loading')
        loadingAnimation.style.display = 'flex';
        fetch("https://mados-mailer.herokuapp.com/api/mailer/sendmail/", {
            method: "post",
            body: JSON.stringify({
                subject: "Feed back",
                variables: {
                    client: Data.Name,
                    company: Data.EtsName,
                    contact: Data.Phonenumber,
                    email: Data.email,
                    message: Data.message,
                },
                email: "jamesamuli1998@gmail.com",
                template: "almuhira",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((response) => {
            loadingAnimation.style.display = 'none';
            body.innerHTML += `
                <div class="message_notifier success">
                    <div class="notifier_header">
                        <h5 id="success"> OK !</h5>
                        <span>X</span>
                    </div>
                    <p>
                        Votre Message a été envoyer avec succès !
                    </p>
                </div>`
            ;let mymessage = document.body.querySelector(".message_notifier");
            mymessage.querySelector("span").addEventListener("click", () => {
                mymessage.remove();
            });
            return response.json();
        }).catch((error) => {
            loadingAnimation.style.display = 'none';
            body.innerHTML += `
                <div class="message_notifier error">
                    <div class="notifier_header">
                        <h5 id='error'>Une erreur est survenu</h5>
                        <span>X</span>
                    </div>
                    <p>
                        Vérifier votre connection internet puis réessayer l'opération !
                    </p>
                </div>`
                ;

            let mymessage = document.body.querySelector(".message_notifier");
            mymessage.querySelector("span").addEventListener("click", () => {
                mymessage.remove();
            });
            // Data = {}
            console.log(error);
        }
        );
    }
};

// function getFormData(e){
//     e.preventDefault();

//     var mydata = new FormData(form[0])
//     for(const [key, value] of mydata){
//         console.log(`${key} : ${value}`)
//     }

// }

// document.addEventListener('DOMContentLoaded', ()=>{
//     submit.addEventListener('click', form);
// })
