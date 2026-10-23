Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-horizontal.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)
$w = $src.Width
$h = $src.Height

$whiteLogo = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $p = $src.GetPixel($x, $y)
        $a = [int]$p.A
        if ($a -le 5) {
            $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            continue
        }

        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B

        $maxC = [Math]::Max($r, [Math]::Max($g, $b))
        $minC = [Math]::Min($r, [Math]::Min($g, $b))
        $chroma = $maxC - $minC

        # Dark navy/slate: headset headband, mic, ear cushion, "ZEVRIY" & "N", "Limitless Possibilities" text
        # If low saturation and not vibrant cyan/blue:
        $isDarkNavy = ($chroma -lt 40 -and $maxC -lt 120)
        $isSlate = ($chroma -lt 25 -and $maxC -lt 160)

        if ($isDarkNavy -or $isSlate) {
            # Map to clean white, preserving alpha
            $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, 255, 255, 255))
        } else {
            # Check edge antialiasing of navy elements
            if ($chroma -lt 25) {
                $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, 255, 255, 255))
            } else {
                # Cyan/blue stays vibrant
                $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $r, $g, $b))
            }
        }
    }
}

$whiteLogo.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-horizontal-white.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved zevriyon-logo-horizontal-white.png"

$src.Dispose()
$whiteLogo.Dispose()
