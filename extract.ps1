Add-Type -AssemblyName "System.IO.Compression.FileSystem"
$zip = [System.IO.Compression.ZipFile]::OpenRead("d:\On process\Dr. Aravind_Mano\DrAravindManoharan_WebsiteContent.docx")
$entry = $zip.GetEntry("word/document.xml")
$reader = New-Object System.IO.StreamReader($entry.Open())
$xml = $reader.ReadToEnd()
$reader.Close()
$zip.Dispose()
$xml -replace "<[^>]+>", " " -replace "\s+", " " | Out-File "d:\On process\Dr. Aravind_Mano\docx_content.txt"
