SystemUtil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Micro Focus\Micro Focus Unified Functional Testing\Sample Applications\Flight GUI.lnk"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "JOHN" @@ hightlight id_;_1896313296_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5d9b0223d42c59c78eea" @@ hightlight id_;_1993189352_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1993178264_;_script infofile_;_ZIP::ssf5.xml_;_

If WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Exist(3) Then
	
	Login_Status = "LogIn is Successful"
	else
	Login_Status = "LogIn is Fail"
End If

msgBox Login_Status


WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_722060_;_script infofile_;_ZIP::ssf6.xml_;_
