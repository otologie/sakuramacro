
var bfm = "", bk = 7;


while (bk == 7) {
var text = Editor.Inputbox("�v�Z��", bfm, 200);

if (text != "") {

	var ans = eval(text);

	bk = Editor.MessageBox( ans,"4");

	if (bk == 7) bfm = text;
}

else bk = 6;

}


