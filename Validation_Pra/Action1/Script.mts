SystemUtil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Micro Focus\Micro Focus Unified Functional Testing\Sample Applications\Flight GUI.lnk"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "JOHN" @@ hightlight id_;_1970819200_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5d9ec746068f06dd12fd" @@ hightlight id_;_1902004960_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1902009088_;_script infofile_;_ZIP::ssf5.xml_;_

If WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").Exist(5) Then
   WpfWindow("Micro Focus MyFlight Sample").Dialog("Login Failed").WinButton("OK").Click
   Reporter.ReportEvent micFail , "Invalid Login" ,"Invalid due to invalid Password"
	
Else @@ hightlight id_;_1574412_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_1377402_;_script infofile_;_ZIP::ssf11.xml_;_
Reporter.ReportEvent micPass , "Valid Login" , "Valid Due to Valid Credentials"

End If
 @@ hightlight id_;_132756_;_script infofile_;_ZIP::ssf6.xml_;_
 @@ hightlight id_;_2006089296_;_script infofile_;_ZIP::ssf12.xml_;_
