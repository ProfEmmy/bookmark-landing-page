const faq = document.querySelectorAll(".faq")

    ;[...faq].forEach(f => {
        f.addEventListener("click", e => {
            const class_name = e.target.closest(".faq").classList[1]
            const answer = document.querySelector(`.${class_name}+div`)
            const answers = document.querySelectorAll(".answer")
            const answers_arr = [...answers]

            const faq = e.target.closest(".faq")
            const faqs = document.querySelectorAll(".faq")
            const faqs_arr = [...faqs]

            const active_dropdown = faq.querySelector(".arrow-down")
            const dropdown_arrow = document.querySelectorAll(".arrow-down")
            const dropdown_arrows = [...dropdown_arrow]

            dropdown_arrows.splice(dropdown_arrows.indexOf(active_dropdown), 1)
            dropdown_arrows.forEach(a => a.classList.remove("active-arrow-dropdown"))
            active_dropdown.classList.toggle("active-arrow-dropdown")

            faqs_arr.splice(faqs_arr.indexOf(faq), 1)
            faqs_arr.forEach(item => item.classList.remove("dropdown"))

            answers_arr.splice(answers_arr.indexOf(answer), 1)

            answers_arr.forEach(answer => {
                answer.classList.add("display")
                answer.classList.add("answer-display")
            })
            answer.classList.remove("display")
            answer.classList.toggle("answer-display")
            faq.classList.toggle("dropdown")
        })
    })


const bookmarking_feature = document.querySelector('.simple-bookmarking-feature')
const fast_searching_feature = document.querySelector(".fast-searching-feature")
const easy_searching_feature = document.querySelector(".easy-searching-feature")

const features = [...document.querySelectorAll(".feature_")]
const feature_divs = [...document.querySelectorAll(".feature-div")]

const bookmarking_feature_div = document.querySelector(".bookmarking-feature-div")
const fast_searching_feature_div = document.querySelector(".fast-searching-feature-div")
const easy_searching_feature_div = document.querySelector(".easy-searching-feature-div")

const active_line = document.querySelector(".active-feature-line")

bookmarking_feature.addEventListener("click", () => {
    features.forEach(f => f.classList.remove("active"))
    feature_divs.forEach(f => f.classList.add("display"))
    active_line.style.transform = "translateX(0)"
    bookmarking_feature.classList.add("active")
    bookmarking_feature_div.classList.remove("display")
})

fast_searching_feature.addEventListener("click", () => {
    features.forEach(f => f.classList.remove("active"))
    feature_divs.forEach(f => f.classList.add("display"))
    active_line.style.transform = "translateX(230px)"
    fast_searching_feature.classList.add("active")
    fast_searching_feature_div.classList.remove("display")
})

easy_searching_feature.addEventListener("click", () => {
    features.forEach(f => f.classList.remove("active"))
    feature_divs.forEach(f => f.classList.add("display"))
    active_line.style.transform = "translateX(440px)"
    easy_searching_feature.classList.add("active")
    easy_searching_feature_div.classList.remove("display")
})


const subscribe_form = document.querySelector("#subform")

const input_field = document.querySelector(".email-field")
const error_msg = document.querySelector(".error-msg-div")
const contact_btn = document.querySelector(".contact-btn")

subscribe_form.addEventListener("submit", e => {
    e.preventDefault()

    const input_val_letter_arr = input_field.value.split("")
    console.log(input_val_letter_arr[0])

    if (input_field.value === "") {
        addErrorClass()
        return
    }
    else if (input_val_letter_arr.indexOf("@") === -1) {
        addErrorClass()
        return
    }
    else if ((input_val_letter_arr.indexOf("/") !== -1) || (input_val_letter_arr.indexOf("\\") !== -1)) {
        addErrorClass()
        return
    }
    else if ((input_val_letter_arr[input_val_letter_arr.length - 1] === ".") || (input_val_letter_arr[input_val_letter_arr.length - 1] === "@")) {
        addErrorClass()
        return
    }
    else {
        removeErrorClass()
        input_field.value = ""
    }
})

function addErrorClass() {
    input_field.classList.add("error")
    contact_btn.classList.add("error")
    error_msg.classList.add("error")
}

function removeErrorClass() {
    input_field.classList.remove("error")
    contact_btn.classList.remove("error")
    error_msg.classList.remove("error")
}