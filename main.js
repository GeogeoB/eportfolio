I_am_Geoffrey = document.getElementById('I_am_Geoffrey');
SubTitle = document.getElementById('SubTitle');
A_propos = document.getElementById('A_propos');
techno = document.getElementById('techno');
p_json_info = document.getElementById('json_info');
video_pitch = document.getElementById('video_pitch');
sub_header = document.getElementById('sub-header');
shell_first_commande = document.getElementById('shell_first_commande');
shell_ligne_1 = document.getElementById('ligne1shell');
shell_ligne_2 = document.getElementById('ligne2shell');
shell_ligne_3 = document.getElementById('ligne3shell');
shell_ligne_4 = document.getElementById('ligne4shell');
shell_ligne_5 = document.getElementById('ligne5shell');
shell_ligne_6 = document.getElementById('ligne6shell');
shell_ligne_7 = document.getElementById('ligne7shell');
shell_ligne_8 = document.getElementById('ligne8shell');
shell_ligne_9 = document.getElementById('ligne9shell');
shell_ligne_10 = document.getElementById('ligne10shell');
shell_second_commande = document.getElementById('shell_second_commande');
king_kong = document.getElementById('king_kong_container');
timeline = document.getElementById('timeline-sub')

info_json = '{<br/><tab></tab><span blue>"Name"</span>: <span orange>"BRENNE"</span>,<br/><tab></tab><span blue>"First_Name"</span>: <span orange>"Geoffrey"</span>,<br/><tab></tab><span blue>"Age"</span>: <span orange>"21",<br/><tab></tab><span blue>"Place_of_Residence 🏠"</span>: <span orange>"Toulouse, France"</span>,<br/><tab></tab><span blue>"School_Path 🏫"</span>: {<br/>    <tab></tab><tab></tab><span blue>"2021-2024"</span> : <span orange>"ENSEEIHT (École nationale supérieure d\'électrotechnique, d\'électronique, d\'informatique, d\'hydraulique et des télécommunications)"</span>,<br/>    <tab></tab><tab></tab><span blue>"2018-2021"</span> : <span orange>"CPGE Dunkerque MP lycée Jean Bart"<br/>    <tab></tab>},<br/>    <tab></tab><span blue>"Hobbies"</span>: {<br/>        <tab></tab><tab></tab><span blue>"Sport" </span>: [<span orange>"Badminton 🏸"</span>, <span orange>"Swiming 🏊‍♀️"</span>, <span orange>"run 🏃‍♂️"</span>],<br/>        <tab></tab><tab></tab><span blue>"creative"</span> : [<span orange>"Drawing 💡"</span>, <span orange>"Video Games 🎮"</span>, <span orange>"Coding 💻"</span>]   <br/>         <tab></tab>}<br/>}';

var temp_de_décalage = 2000;

var I_am_Geoffrey_tw = new Typewriter(I_am_Geoffrey, {
  delay:100,
  autoStart: true,
  cursor : " ",
});

I_am_Geoffrey_tw
.pauseFor(temp_de_décalage)
.start()
.typeString('I am <span class="text-color">Geoffrey BRENNE</span>');


var SubTitle_tw = new Typewriter(SubTitle, {
  delay:35,
  deleteSpeed:50,
    autoStart: true,
    cursor : " ",
});

SubTitle_tw
  .pauseFor(temp_de_décalage + 1800)
  .start()
  .typeString('A Student in first year in <span class="underline">ENSEEIHT</span> in Computer Science');

var techno_tw = new Typewriter(techno, {
  autoStart: true,
  delay:60,
  deleteSpeed:60,
  loop: true,
});

techno_tw
  .pauseFor(temp_de_décalage + 4000)
  .start()
  .typeString('<span class="techno">PYTHON</span>')
  .pauseFor(1000)
  .deleteChars(6)
  .typeString('HTML')
  .pauseFor(1000)
  .deleteChars(4)
  .typeString('CSS')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('ADA')
  .pauseFor(1000)
  .deleteChars(3)
  .typeString('WEB')


var Json_info_tw = new Typewriter(p_json_info, {
  delay:15,
  autoStart: true,
  cursor : "_",
  loop : false,
});

var shell_first_commande_tw = new Typewriter(shell_first_commande, {
  delay:25,
  cursor : "",
  autoStart: true,
  loop : false,
});


var shell_second_commande_tw = new Typewriter(shell_second_commande, {
  delay:25,
  cursor : "",
  autoStart: true,
  loop : false,
});

function scrollto(element) {
  element.scrollTo({
    top: 100,
    left: 100,
    behavior: 'smooth'
  });
}


function king_kong_app(){
  console.log("non");
  king_kong.style.display = "inherit";
  timeline.style.display = "none";
}

function scroll_to_about(){
  document.getElementById("About_Me").scrollIntoView({behavior: "smooth",block:"center"});
}

function scroll_to_back() {
  document.getElementById("timeline").scrollIntoView({behavior: "smooth",block:"center"});
}

function scroll_to_competences() {
  document.getElementById("competences").scrollIntoView({behavior: "smooth",block:"center"});
}

function scroll_to_contact() {
  document.getElementById("contact").scrollIntoView({behavior: "smooth",block:"center"});
}

function scroll_to_projects(){
  document.getElementById("Projects").scrollIntoView({behavior: "smooth",block:"center"});
}




var about_me_check = true;
var fake_shell_check = true;

window.addEventListener('scroll', function() {

  if(about_me_check && window.scrollY > 700){
    about_me_check = false;
    Json_info_tw
    .start()
    .typeString(info_json);
  }
});