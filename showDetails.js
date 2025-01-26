function showDetails() {
	document.querySelector('#token').innerText = token;
    $('#details').show('slide',{'direction':'down'},'ease',1800);
}
setTimeout(showDetails, 1700);

$('#homeBtn').on('click', ()=> {
    window.location.href = "https://nfcards.github.io/";
});
$('#activateBtn').on('click', ()=> {
    window.location.replace("https://form.jotform.com/250246883322153?cardToken=" + token);
})
