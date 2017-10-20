var compUI = {
	div : x=>{return $('<div/>',{ id : x });},
	divX : ()=>{return $('<div/>');},
	spanX : ()=>{return $('<span/>');},
	span : x=>{return $('<span/>',{ id : x });},
	input : (x,y,z)=>{return $('<input/>',{ id : x, type : y });},
	inputBtn : (x,y,z)=>{return $('<input/>',{ id : x, type : y, value : z });},
	btn : x=>{return $('<button/>', { id : x, type : 'button'});},
	image : (x,y)=>{return $('<img/>',{id : x, src : y});},
	
	//추가
	select : x=>{return $('<select/>',{ id : x });},
	option : (x,y)=>{return $('<option/>',{ value : x, text :y })},
	li : x=>{return $('<li/>',{ id : x });}	
	
	/*br : x=>{return $('<br/>')},
    
    h1 : x=>{return $('<h1/>',{id:x});},
    h2 : x=>{return $('<h2/>',{id:x});},
    h3 : x=>{return $('<h3/>',{id:x});},
    h4 : x=>{return $('<h4/>',{id:x});},
    h5 : x=>{return $('<h5/>',{id:x});},
    iTxt : x=>{return $('<input/>',{id:x ,type :'text'});},
    aBtn : x=>{return $('<a/>',{href:'#' , role :'button' , id:x });}*/
};