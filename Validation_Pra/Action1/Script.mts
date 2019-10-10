SystemUtil.Run"C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Micro Focus\Micro Focus Unified Functional Testing\Sample Applications\Flight GUI.lnk"

WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "JOHN" @@ hightlight id_;_1970819200_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5d9ec1459df62701d94f" @@ hightlight id_;_1902004960_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1902009088_;_script infofile_;_ZIP::ssf5.xml_;_

find_flight_button = WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").GetROProperty("text")

If find_flight_button=True Then
	WpfWindow("Micro Focus MyFlight Sample").Close
	Login="Login is successfull"
	
	Else
	Login="Login is Fail"
	
	msgBox Login
End If
 @@ hightlight id_;_132756_;_script infofile_;_ZIP::ssf6.xml_;_
