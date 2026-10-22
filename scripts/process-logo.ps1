Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $bmp.Width
$height = $bmp.Height

Write-Output "Image size: ${width}x${height}"
$c0 = $bmp.GetPixel(5, 5)
Write-Output "Corner pixel: R=$($c0.R), G=$($c0.G), B=$($c0.B)"

# 1. Create a transparent PNG by keying out the white/off-white background
# We can make a smooth alpha falloff for antialiasing
$outTransparent = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outDarkBg = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B

        # Check whiteness
        $minVal = [Math]::Min($r, [Math]::Min($g, $b))
        $maxVal = [Math]::Max($r, [Math]::Max($g, $b))
        
        # If nearly pure white
        if ($r -gt 242 -and $g -gt 242 -and $b -gt 242) {
            # Fully transparent
            $outTransparent.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $outDarkBg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } elseif ($r -gt 220 -and $g -gt 220 -and $b -gt 220) {
            # Soft edge
            $alpha = [int](255 * (255 - (($r + $g + $b) / 3)) / 35.0)
            if ($alpha -lt 0) { $alpha = 0 }
            if ($alpha -gt 255) { $alpha = 255 }
            $outTransparent.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            
            # For dark bg, if it's dark text, map to white
            $brightness = ($r + $g + $b) / 3.0
            if ($brightness -lt 150) {
                $outDarkBg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, 255, 255, 255))
            } else {
                $outDarkBg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $r, $g, $b))
            }
        } else {
            $outTransparent.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
            
            # If the pixel is dark navy / black (headset arch or ZEVRIYON letters), on dark background we make it bright/white
            # Notice the headset and text have low saturation and low brightness
            $isNearNeutral = [Math]::Abs($r - $g) -lt 30 -and [Math]::Abs($g - $b) -lt 30
            $isDark = ($r -lt 80 -and $g -lt 90 -and $b -lt 100)
            
            if ($isDark -and $isNearNeutral) {
                # Convert dark navy text/headset to crisp white for dark backgrounds
                $outDarkBg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
            } else {
                # Keep vibrant cyan/teal/blue elements unchanged
                $outDarkBg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $r, $g, $b))
            }
        }
    }
}

$outTransparent.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$outDarkBg.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-white.png", [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Saved zevriyon-logo.png and zevriyon-logo-white.png successfully!"

# Also create icon-only crop (the headset mark is approximately the top 60% of the image)
# Let's find bounding box of the top icon
$iconBmp = New-Object System.Drawing.Bitmap(520, 360, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gIcon = [System.Drawing.Graphics]::FromImage($iconBmp)
$gIcon.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle(250, 40, 520, 360)
$destRect = New-Object System.Drawing.Rectangle(0, 0, 520, 360)
$gIcon.DrawImage($outTransparent, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gIcon.Dispose()

$iconBmp.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-icon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$iconBmp.Dispose()

$bmp.Dispose()
$outTransparent.Dispose()
$outDarkBg.Dispose()
Write-Output "Done all logo processing!"
