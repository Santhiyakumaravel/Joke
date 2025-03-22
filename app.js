const button=document.getElementById("button");
const jokecontent=document.getElementById("jokecontent");
const joke=document.getElementById("joke");

button.onclick =()=>
{
axios
.get('https://official-joke-api.appspot.com/random_joke')
.then(function(response)
{
button.textContent="Next";
jokecontent.textContent=response.data.setup;
setTimeout(function(){
joke.textContent=response.data.punchline;
},1500);
})
.catch(function(error){
console.log(error)
});
};

