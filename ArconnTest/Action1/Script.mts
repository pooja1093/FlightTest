 @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword")_;_script infofile_;_ZIP::ssf32.xml_;_
 Dim LRowCount,i
 
 
 DataTable.AddSheet"ArconnTestData"
 DataTable.ImportSheet "C:\Users\Pooja.Thul\Desktop\TestData\ArconnTestData.xls",1,3
 LRowCount = datatable.GetSheet(3).GetRowCount
 
 Browser("Certificate Error: Navigation").Page("Certificate Error: Navigation").Link("Continue to this website").Click
 
For i = 1 To LRowCount Step 1
 
datatable.SetCurrentRow(i)
 @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Certificate Error: Navigation").Link("Continue to this website")_;_script infofile_;_ZIP::ssf33.xml_;_
Browser("Certificate Error: Navigation").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername").Set datatable(1,3) @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtusername")_;_script infofile_;_ZIP::ssf34.xml_;_
Browser("Certificate Error: Navigation").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword").SetSecure datatable(2,3) @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management").WebEdit("ctl00$MainContent$txtpassword")_;_script infofile_;_ZIP::ssf36.xml_;_
Browser("Certificate Error: Navigation").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin").Click 19,22 @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management").Image("ctl00$MainContent$imgbtnLogin")_;_script infofile_;_ZIP::ssf37.xml_;_

If Browser("Certificate Error: Navigation").Page("Privileged Account Management_2").WebElement("ctl00_MainContent_lblHeader").Exist(5) Then @@ hightlight id_;_Browser("Certificate Error: Navigation").WinObject("Blank Page - Internet").Page("Page")_;_script infofile_;_ZIP::ssf47.xml_;_

		Browser("Certificate Error: Navigation").Page("Privileged Account Management_2").Link("Milind").Click @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management 2").Link("Milind")_;_script infofile_;_ZIP::ssf41.xml_;_
		Browser("Certificate Error: Navigation").Page("Privileged Account Management_2").Link("Logout").Click @@ hightlight id_;_Browser("Certificate Error: Navigation").Page("Privileged Account Management 2").Link("Logout")_;_script infofile_;_ZIP::ssf42.xml_;_
        reporter.ReportEvent micPass, "Login is successful" , "Due to Valid Credentials"
	
	Else
	'systemutil.CloseDescendentProcesses
	'reporter.ReportEvent micFail , "Login is Fail" , "Due to invalid Credentials" @@ hightlight id_;_264566_;_script infofile_;_ZIP::ssf44.xml_;_
	
	'SystemUtil.CloseDescendentProcesses ' this will close window of ie
	
	
End If

'var_GetROProperty = Browser("Certificate Error: Navigation").WinObject("Client Caption").GetROProperty("text")


Next
