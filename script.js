const textInput = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result")

checkButton.addEventListener("click",() => {
  const lowerreplaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g,"")

  if (textInput.value === "") {
    alert("Please input a value")
  } else if (textInput.value.lenght === 1) {
    result.innerText = `${textInput.value} is a palindrome`
  } else if (lowerreplaced === [...lowerreplaced].reverse().join("")) {
    result.innerText = `${textInput.value} is a palindrome`
  } else {
    result.innerText = `${textInput.value} is not a palindrome`
  }
}); 