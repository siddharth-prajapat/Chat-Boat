localStorage.clear();
console.log("JS file loaded!");
const chatArea = document.getElementById("chatArea");
const api_key = "API-Key"; /*this is api key of gemini */
const friendPrompt = "You are Sidh, a warm and casual best friend chatting with the user. Talk like a real friend — relaxed, genuine, and easy to talk to. Use casual language, occasional humor, and show real interest in what the user says. Keep replies short and natural, like a real text conversation, not long formal paragraphs. Feel free to tease lightly, share opinions, and react emotionally when appropriate — be supportive during tough moments and fun during casual chats. Avoid sounding robotic, overly formal, or like a customer service assistant. Adapt to whatever language or mix of languages the user writes in (English, Hindi, or Hinglish), and match their tone and energy.";
let input = document.getElementById('input');
let sheet_id = "https://script.google.com/macros/s/AKfycbzmsBG3taocswq3U5fEmcCWref3VtAiVGhBbhE9DEAcnl99CDb7qGQ-j3LRWGQeiTPF/exec";
let send = document.querySelector('#inbox button');
// let theme = document.getElementById('theme');
let Masegge =  [];
try     {
    Masegge = JSON.parse(localStorage.getItem('chathistory'))||[];

}
catch(e){
    localStorage.removeItem('chathistory');
    Masegge = [];
}
function showmsg(text, sender){
    const bubble = document.createElement("div")
    bubble.classList.add(sender);
    bubble.textContent = text;
   chatArea.appendChild(bubble);
    chatArea.scrollTop = chatArea.scrollHeight;
    // Masegge.push({ text: text, sender: sender });
    // localStorage.setItem('chathistory', JSON.stringify(Masegge));

}
function addmsg(text, sender)
{
    showmsg(text, sender);
    Masegge.push({ text: text, sender: sender });
    localStorage.setItem('chathistory', JSON.stringify(Masegge));
    fetch(sheet_id,{
        method: "post",
        mode: "no-cors",
        body:JSON.stringify({text: text, sender: sender})
    }
)};
Masegge.forEach(msg =>{
    addmsg(msg.text,msg.sender)
});
// theme.addEventListener("click", function(){
//     document.chatArea.style.backgroundImage = "url('theme.jpg')";
// });
send.addEventListener("click", async function(){

let chat = input.value
if(chat == ""){
    alert("Please write something");
}

else {      
    addmsg(chat,"usr");
    input.value = "";
    const response = await fetch(
           `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": api_key   // key ab yahan jayegi, URL mein nahi
        },
        body: JSON.stringify({
            system_instruction:{
                parts:[{text: friendPrompt}]
            },
            contents: [{ parts: [{ text: chat }] }]
        })
    }
);
const data = await response.json();
console.log(data);  
const reply = data.candidates[0].content.parts[0].text;
addmsg(reply, "boat");
}

});
input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        send.click();
    }
});