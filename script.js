document.querySelectorAll(".questions").forEach((question) => question.addEventListener("click",() => {
    console.log("question clicked");
    if(question.parentNode.classList.contains("active")){
        question.parentNode.classList.toggle("active");
        
        console.log("active toogled");
    } else {
        document.querySelectorAll(".questions").forEach((question) => question.parentNode.classList.remove("active"))
        question.parentNode.classList.add("active");
        console.log(" active toogled");
    }
}))