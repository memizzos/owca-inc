async function getOwce() {
	const data = await fetch('/owce');
	const owce = await data.json();
	const owceHtml = owce.map(owca => `
		<div class="owca">
			<h4>age: ${owca.Age}</h4>
			<h4>location: ${owca.location}</h4>
			<h4>ID: ${owca.ID}</h4>
			<h4>broken: ${owca.broken}</h4>
		</div>
	`).join(``);
	const el = document.querySelector("#owce");
	el.innerHTML = owceHtml;
}

getOwce();