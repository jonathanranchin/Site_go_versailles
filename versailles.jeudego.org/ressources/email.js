function sphinx(nom,domaine,path)
{
fenetreA=window.open("","contenu","status=no,location=no,toolbar=no,directories=no, resizable=no,width=500,height=300,top=100,left=100"); 
fenetreA.document.open();
fenetreA.document.write ("<style type=\"text/css\" media=\"screen\">\@import url("+path+"ressources/versailles.css );</style>");

fenetreA.document.write ("<form onsubmit=\"setTimeout(function(){window.close();}, 500);\" name=\"f1\" id=\"f1\" action=\""+path+"erreur.htm\"><br><br><div align=\"center\">");
fenetreA.document.write ("<h1>Go Club de Versailles</h1><p style=\"font-size:150%\">Contr&ocirc;le anti-collecteur d'adresse</p><p>Cliquez sur les lettres 'G' et 'O' ci-dessous!</p><br>");
fenetreA.document.write ("<input type=\"hidden\" name=\"nom\" value=\""+nom+"\">"); 
fenetreA.document.write ("<input type=\"hidden\" name=\"domain\" value=\""+domaine+"\">"); 
fenetreA.document.write ("<table><tr>");
for (k=0;k<26;k++)
{
	if (k==13) fenetreA.document.write ("</tr><tr>");
	a=k-(-65);
	if (String.fromCharCode(a)=='G')
		fenetreA.document.write ("<td align=\"center\"><input value='G' type='button' onclick=\"document.forms.f1.action='mailto:';\"></button></a></td>");
	else if (String.fromCharCode(a)=='O')
		fenetreA.document.write ("<td align=\"center\" ><input value='O' type='submit' onclick=\"if (document.forms.f1.action=='mailto:') document.forms.f1.action=document.forms.f1.action+document.forms[0].nom.value+'@'+document.forms[0].domain.value; else document.forms.f1.action='"+path+"erreur.htm';\"></a></td>");
	else fenetreA.document.write ("<td align=\"center\" ><input value='"+String.fromCharCode(a)+"' type='submit' onclick=\"document.forms.f1.action='"+path+"erreur.htm';\"></a></td>");
}
fenetreA.document.write ("</tr></table>");

fenetreA.document.write ("</div></form>");

fenetreA.document.close();
}

function mail_webmestre(path){
	sphinx("webmestre-78Ve", "jeudego.org", path);
}