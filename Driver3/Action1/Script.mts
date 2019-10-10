Dim MRowCount, ModuleExe , ModuleId, i,ModuleId2,j,TestCaseExe,TestCaseId,k,TestCaseId2,Keyword


DataTable.AddSheet "Module"
DataTable.AddSheet "TestCase"
DataTable.AddSheet "TestStep"
DataTable.AddSheet "Input"

                       
Datatable.ImportSheet "C:\Users\Pooja.Thul\Desktop\abcde_Automation\Organizer\OrganizerNew.xls", 1, 3
Datatable.ImportSheet "C:\Users\Pooja.Thul\Desktop\abcde_Automation\Organizer\OrganizerNew.xls", 2, 4
Datatable.ImportSheet "C:\Users\Pooja.Thul\Desktop\abcde_Automation\Organizer\OrganizerNew.xls", 3, 5
Datatable.ImportSheet "C:\Users\Pooja.Thul\Desktop\abcde_Automation\TestData\Input.xls", 1, 6
					
						

'Read Executable Module ids From module Sheet.
MRowCount = DataTable.GetSheet("Module").GetRowCount

For i = 1 To MRowCount Step 1
	DataTable.SetCurrentRow(i)
	ModuleExe = DataTable(3,3)
	
	If UCase(ModuleExe)="Y" Then
		ModuleId = DataTable(1,3)
		'msgBox ModuleId
		
		'Read Executable Test Case ids under executable Modules from Test case sheet.
TCRowCount = DataTable.GetSheet("TestCase").GetRowCount
 
 For j = 1 To TCRowCount Step 1
	DataTable.SetCurrentRow(j)
	ModuleId2= DataTable(4,4)
	TestCaseExe =DataTable(3,4)
	
	If UCase(TestCaseExe)="Y" And ModuleId = ModuleId2 Then
		TestCaseId=DataTable(1,4)
		
		
		
		 'msgBox TestCaseId
		'Read KeyWord For all Executable Steps from TestStep Sheet
			
			TSRowCount= DataTable.GetSheet("TestStep").GetRowCount
		
		For k = 1 To TSRowCount Step 1
			DataTable.SetCurrentRow(k)
			TestCaseId2 =DataTable(5,5)
			
			If TestCaseId= TestCaseId2 Then
				Keyword=DataTable(4,5)
				'msgBox Keyword
				
				
				Select Case Keyword
					Case "ln"
					DataTable(7,5) = Lonin_application()
					
					Case "ca"
					DataTable(7,5)= selectFlight()
					
					Case "bf"
					DataTable(7,5)= Close_app()
					
					
					Case "lnd"
					IPRowCount=DataTable.GetSheet(6).GetRowCount
					
					
					For l = 1 To IPRowCount Step 1
						DataTable.SetCurrentRow(l)
						DataTable(3,6)= Lonin_application(DataTable(1,6) , DataTable(2,6))
						Close_App()
						
						
					Next
					
					
					
					
					End Select	
					
					End If
                   Next 
                   End If
                   Next 
                   
                   End If
                   Next
                   

	
	
				
					
						
					
						
					
					
