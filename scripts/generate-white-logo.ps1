Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.png"
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

        # Calculate saturation and hue characteristics
        # Dark navy/slate parts: low brightness, near-neutral or slightly blue-gray
        # Max component
        $maxC = [Math]::Max($r, [Math]::Max($g, $b))
        $minC = [Math]::Min($r, [Math]::Min($g, $b))
        $chroma = $maxC - $minC

        # Dark navy / charcoal elements:
        # e.g. headset headband, ear cushions, mic, and "ZEVRIY" + "N"
        # In the source: R ~ 15-40, G ~ 25-45, B ~ 35-65. Chroma is small (< 35), brightness < 90.
        # "Limitless Possibilities" text is slate grey: R~50, G~60, B~70. Chroma < 25.
        $isDarkNavyOrCharcoal = ($maxC -lt 110 -and $chroma -lt 45)

        if ($isDarkNavyOrCharcoal) {
            # Map dark navy/slate to pure crisp white, preserving alpha for smooth antialiasing
            $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, 255, 255, 255))
        } else {
            # Vibrant cyan / electric blue / green-cyan stays vibrant!
            # If it's a transition/blended edge between dark navy and white, let's ensure it doesn't get dark fringe
            if ($chroma -lt 30 -and $maxC -lt 160) {
                $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, 255, 255, 255))
            } else {
                # Preserve the exact vibrant cyan/blue/green gradients
                $whiteLogo.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $r, $g, $b))
            }
        }
    }
}

$whiteLogo.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-white.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved zevriyon-logo-white.png successfully"

$src.Dispose()
$whiteLogo.Dispose()
