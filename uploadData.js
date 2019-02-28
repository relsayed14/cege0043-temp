// uploading the answers
function startDataUpload () {
	var name = document.getElementById("name").value;
	var surname = document.getElementById("surname").value;
	var moduleTitle = document.getElementById("moduleTitle").value;
	var postString = "name="+name +"&surname="+surname+"&moduleTitle="+moduleTitle;
	alert (postString);
}