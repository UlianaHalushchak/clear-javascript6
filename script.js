//виправляю помилку крапки з комою, строка 13//
(function (win) {
	var params = {
		states: {url:"/",
		template: "temlate.js"}
		}
		function setStates(params) {
		if (win && !win.params) {
			win.params = params; }
			}
	setStates();
	console.log(params.states.template);
});
	(window);
// результат 
//  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ,  frames: Window, …}
