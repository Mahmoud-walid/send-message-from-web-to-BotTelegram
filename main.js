
const text = document.querySelector("#text");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(text.value);
  
  
const botToken = "6402178700:AAGnX9o9RNFuYbQH6oovUiivjvhrpfExCoQ";
const chatId = "5678669924";
const message = `${text.value}`;

const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: chatId,
    text: message,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Message sent successfully:", data);
  })
  .catch((error) => {
    console.error("Error sending message:", error);
  });

});
// 6402178700:AAGnX9o9RNFuYbQH6oovUiivjvhrpfExCoQ