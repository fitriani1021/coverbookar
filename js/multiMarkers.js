// const { title } = require("process");

var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		var markers=["adigang", "agamapelacur", "algoritma", "americanpolitic", "amgov", "analisissurvival", "ananda", "antropologi", "antropologibudaya", "bali", "barcode", "bercerita", "berjalan", "bisnisquran", "c2013", "casespolitic", "cisco", "citradigital", "cloning", "commonlink", "cooplearning", "dasarpolitik", "databaseprocessing", "databasepros", "dinamikafiskal", "ekonometri", "ekonometrika", "ekonometrikamanajemen", "ekonomibisnis", "essenspolitic", "filosofi", "firewall", "fuzzy", "gamemaker", "gospelwater", "harddisk", "hardwarepc", "humandevelop", "ilmupolitik", "ilmusosial", "ITdirs", "jalanparadoks", "jepangmatamata", "kendalikualitas", "konfliketnis", "kongresbudaya", "landscapebank", "leadership", "librarycatalog", "logiccontroller"];

		for(var i=0; i<markers.length; i++)
		{
			var url="../custom markers/pattern-"+markers[i]+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}
	let uri = './books.json';
	fetch(uri)
		.then((resp) => resp.json())
		.then(function(data){
			listbuku(data,scene);
		})
		.catch(function(error){
			console.log(JSON.stringify(error));
		});

		function listbuku(buku, sceneEl) {
		for(var k in markers){			
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);
			markerEl.setAttribute('registerevents','');
			let kertas = document.createElement("a-plane");
			kertas.setAttribute("color", "white");
			kertas.setAttribute("scale", "1 1.5 1");
			kertas.setAttribute("rotation", "-90 0 0");
            let judul = document.createElement("a-text");
            let titel = "";
            titel += buku[i].title;
			judul.setAttribute("value", titel);
			judul.setAttribute("scale", "0.2 0.2 0.2");
            judul.setAttribute("position", "0 0.4 0.05");
            judul.setAttribute("color", "blue");
			judul.setAttribute("align", "center");
			let writer = document.createElement("a-text");
			let penulis = ""; penulis += "Penulis : "+buku[i].writers;
			writer.setAttribute("value", penulis);
			writer.setAttribute("scale", "0.19 0.19 0.19");
            writer.setAttribute("position", "0.03 0.25 0.05");
            writer.setAttribute("color", "blue");
			writer.setAttribute("anchor", "center");
			writer.setAttribute("align", "left");
			let sinop = document.createElement("a-text");
			let sinopsis = ""; sinopsis += "Sinopsis : "+buku[i].sinopsis;
			sinop.setAttribute("value", sinopsis);
			sinop.setAttribute("scale", "0.19 0.19 0.19");
            sinop.setAttribute("position", "0.03 0.2 0.05");
			sinop.setAttribute("color", "blue");
			sinop.setAttribute("anchor", "center");
			sinop.setAttribute("align", "left");
			marker.appendChild(kertas);
			let sedia = document.createElement("a-text");
			let sediaan = ""; sediaan += "Available : "+buku[i].available+" copies"
			sedia.setAttribute("value", sediaan);
			sedia.setAttribute("scale", "0.19 0.19 0.19");
            sedia.setAttribute("position", "0.03 -0.1 0.05");
			sedia.setAttribute("color", "blue");
			sedia.setAttribute("anchor", "center");
			sedia.setAttribute("align", "left");
			kertas.appendChild(judul);
			kertas.appendChild(writer);
			kertas.appendChild(sinop);
			kertas.appendChild(sedia);
			sceneEl.appendChild(markerEl);
			markerEl.appendChild(kertas);
		}
		}
	}
});

//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});