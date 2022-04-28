
let playpause_btn = document.getElementsByClassName(".playpause-track");
let next_btn = document.getElementsByClassName(".next-track");
let prev_btn = document.getElementsByClassName(".prev-track");
let seek_slider = document.getElementsByClassName("seek_slider");
let volume_slider = document.getElementsByClassName("volume_slider");
let curr_time = document.getElementsByClassName("current-time");
let total_duration = document.getElementsByClassName("total-duration");
// Create new audio element
let curr_track = document.createElement('audio');
let isPlaying = false;

var songrun=false;
var count=1;
var mod=1;
var path=["songs\\ban ja rani.mp3"
,"songs\\Banduk meri laila.mp3"
,"songs\\barish.mp3"
,"songs\\haareya.mp3"
,"songs\\ik vari aa.mp3"
,"songs\\main tera.mp3"
,"songs\\mercy.mp3"
,"songs\\musafir.mp3"
,"songs\\o sathi.mp3"
,"songs\\phir bhi.mp3"
,"songs\\Ho Ja Mast Malang Tu.mp3"
,"songs\\Jee Karda.mp3"
,"songs\\Abhi Toh Party Shuru Hui Hai.mp3"
,"songs\\Badtameez Dil.mp3"
,"songs\\Balam Pichkari.mp3"
,"songs\\Galliyan Song.mp3"
,"songs\\Tujhe Kitna Chahne Lage.mp3"
,"songs\\Aal Izz Well.mp3"
,"songs\\Rock On.mp3"
,"songs\\Malang.mp3"];

var sname=["Ban Ja tu meri Rani",
"Banduk Meri Laila",
"Barish",
"Haareya",
"Ik vari aa",
"main tera boyfriend",
"mercy",
"musafir",
"o sathi",
"Phir Bhi",
"Ho Ja Mast Malang Tu",
"Jee Karda",
"Abhi Toh Party Shuru Hui Hai",
"Badtameez Dil",
"Balam Pichkari",
"Galliyan Song",
"Tujhe Kitna Chahne Lage",
"Aal Izz Well",
"Rock On",
"Malang"
];

var sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
,"Artist: KK<br>Movie: Shab<br>Released: 2017"
,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"
,"Artists: Hadiya Hashmi, Adnan Dhool <br>Movie: Malang<br>Released: 2020"
,"Artists: Divya Kumar <br>Movie:Badlapur (Original Motion Picture Soundtrack)<br>Released: 2014"
,"Artists: Badshah, Aastha Gill <br>Movie: Khoobsurat<br>Released: 2014"
,"Artists: Pritam, Benny Dayal, Shefali Alvares<br>Movie: Yeh Jawaani Hai Deewani<br>Released: 2013"
,"Artists: Pritam, Vishal Dadlani, Shalmali Kholgade<br>Movie: Yeh Jawaani Hai Deewani<br>Released: 2013"
,"Artists: Ankit Tiwari <br>Movie: Ek Villain <br>Released: 2014"
,"Artists: Arijit Singh <br>Movie: Kabir Singh<br>Released: 2019"
,"Artists: Sonu Nigam, Swanand Kirkire, Shaan <br>Movie: 3 Idiots <br>Released: 2009"
,"Artists: Dominique Cerejo, Farhan Akhtar, Raman Mahadevan, Caralisa Monteiro, Suraj Jagan <br>Movie: Rock On<br>Released: 2008"
,"Artists: Ved Sharma <br>Movie: Malang<br>Released: 2020"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.png",
"images\\\\12.png",
"images\\\\13.png",
"images\\\\14.png",
"images\\\\15.png",
"images\\\\16.png",
"images\\\\17.png",
"images\\\\18.png",
"images\\\\19.png",
"images\\\\20.png",
];

var mood=[["1","2","3","11","12"],["4","5","13","14","15"],["6","7","8","16","17"],["9","10","18","19","20"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png","1.png","1.png","2.png","2.png","2.png","3.png","3.png","4.png","4.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}

function play(elem)
{
  console.log(elem.id);
  //clearInterval(updateTimer);
  resetValues();
  addq(elem)
  if(elem.id.length>2)
    var x=elem.id.charAt(1)+elem.id.charAt(2);
  else
    var x=elem.id.charAt(1)
	var z=songs[x][0];
  document.getElementById("sname").innerHTML=sname[x];
  curr_track.src= z;
  curr_track.load();
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.play();
  songrun=true;
  isPlaying = true;
  //sqc=sqc+1;
  document.getElementById("playpausetrack").innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
var eqc=1;
var sqc=1;
var queueitems=0;
function addq(elem)
{
  console.log(elem.id);
  if(elem.id.length>2)
    var x=elem.id.charAt(1)+elem.id.charAt(2);
  else
    var x=elem.id.charAt(1)
	var z=songs[x][0];
  if(!songrun)
  {
    document.getElementById("sname").innerHTML=sname[x];
    curr_track.src= z;
    resetValues();
    curr_track.load();
    updateTimer = setInterval(seekUpdate, 1000);
    curr_track.play();
    songrun=true;
    isPlaying = true;
    document.getElementById("playpausetrack").innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
  }
  if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
  queueitems=queueitems+1;
	eqc=eqc+1;
}


function nextsong(){
  sqc=sqc+1;
	// if(sqc==eqc){
	// 			alert("Queue is empty.");
	// 			return;
	// 	}
  if(sqc>queueitems)
  {
    alert("No next Song");
    sqc=sqc-1;
    return;
  }
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			curr_track.src= pa;
      curr_track.load();
      updateTimer = setInterval(seekUpdate, 1000);
      curr_track.play();
      isPlaying = true;
      document.getElementById("playpausetrack").innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
			//document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";	
			songrun=true;
			//document.getElementById("queue").removeChild(elem);	
			//sqc=sqc+1;

}


function prevTrack(){
	// if(sqc==eqc){
	// 			alert("Queue is empty.");
	// 			return;
	// 	}
    sqc=sqc-1;
    if(sqc<1){
        alert("no previous track");
        sqc=sqc+1;
				return;
    }else{
      var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			curr_track.src= pa;
      curr_track.load();
      updateTimer = setInterval(seekUpdate, 1000);
      curr_track.play();
      isPlaying = true;
      document.getElementById("playpausetrack").innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
			//document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";	
			songrun=true;
			//document.getElementById("queue").removeChild(elem);	
			//sqc=sqc+1;
    }
		

}

function setmod(elem){
	mod=elem.value;
  if(mod==2)
    getEmo();
}

async function getEmo() {
  let value = await eel.getEmotion()();
  if(value=="angry")
    moody(0);
  else if(value=="happy")
    moody(1);
  else if(value=="sad")
    moody(2);
  else
    moody(3);
}

function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	curr_track.src= pa;
  curr_track.load();
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.play();
  isPlaying = true;
  document.getElementById("playpausetrack").innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}
