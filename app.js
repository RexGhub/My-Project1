const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
	  const btn = question.querySelector("h3");
	  const answer = question.querySelector(".answer");

	  btn.addEventListener("click", function() {
		      answer.classList.toggle("active");

		      if (answer.classList.contains("active")) {
			            btn.textContent = "Hide Answer";
			          } else {
					        btn.textContent = "Show Answer";
					      }
		    });
});

