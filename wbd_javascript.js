/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function showMenu() {
  var menu = document.getElementsByClassName("menu");  
  var m = menu[0];
  if(m.style.display == "block") { // if is menuBox displayed, hide it
    m.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    m.style.display = "block";
  }
}
function addComment(){
    event.preventDefault();
    var comments = document.getElementsByClassName("comments"); 
    var comment_area = comments[0];
    
var node = document.createElement("article");  
var picture = document.createElement("div");   
var nickname = document.createElement("div");
var date = document.createElement("div");
var time = document.createElement("div");
var text = document.createElement("div");

 var text_from_input = document.getElementsByClassName('new_comment_text')[0].value;
 
var nickname_in = document.createTextNode("nick");  
var date_in = document.createTextNode("15.1.2021");  
var time_in = document.createTextNode("15:25");  
var text_in = document.createTextNode("um consequat. sem a nibh rutrum consequat. um consequat. sem a nibh rutrum consequat. um consequat. sem a nibh rutrum consequat. um consequat. sem a nibh rutrum consequat. ");  
text_in.data=text_from_input;
var picture_in = document.createElement("img"); 
picture_in.src="https://s3-alpha.figma.com/hub/file/948140848/1f4d8ea7-e9d9-48b7-b70c-819482fb10fb-cover.png";
picture_in.className="profile_img";

nickname.appendChild(nickname_in);
date.appendChild(date_in);
text.appendChild(text_in);
time.appendChild(time_in);
picture.appendChild(picture_in);

node.className="comments_item";
nickname.className = "comment_nickname";
text.className = "comment_text";
date.className = "comment_date";
time.className = "comment_time";
picture.className="comment_image"

node.appendChild(picture);
node.appendChild(nickname); 
node.appendChild(picture);
node.appendChild(date);   
node.appendChild(text);   
node.appendChild(time);   
//node.appendChild(comment);                              
comment_area.appendChild(node);
    
}

