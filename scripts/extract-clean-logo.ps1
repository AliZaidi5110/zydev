Add-Type -AssemblyName System.Drawing

$src = "c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.jpg"
$bmp = [System.Drawing.Bitmap]::FromFile($src)

# Content bounds: minX=267, minY=57, maxX=756, maxY=529
# Add 10px padding
$pad = 10
$cropX = [Math]::Max(0, 267 - $pad)
$cropY = [Math]::Max(0, 57 - $pad)
$cropW = [Math]::Min($bmp.Width - $cropX, (756 - 267 + 1) + ($pad * 2))
$cropH = [Math]::Min($bmp.Height - $cropY, (529 - 57 + 1) + ($pad * 2))

Write-Output "Cropping: $cropX, $cropY, ${cropW}x${cropH}"

# 1. Exact cropped original with white background (100% untouched source pixels)
$croppedOriginal = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gOrig = [System.Drawing.Graphics]::FromImage($croppedOriginal)
$gOrig.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$gOrig.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$gOrig.Dispose()
$croppedOriginal.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-original.png", [System.Drawing.Imaging.ImageFormat]::Png)

# 2. Transparent background version
# For any pixel, the background is white (255,255,255).
# The alpha can be estimated from how far the color is from pure white:
# distance from white: d = 255 - max(R, G, B) ? No, pure cyan is (0, 210, 180), so max is 210, min is 0.
# The whiteness W = min(R, G, B).
# If a color was blended over white: C = a * fg + (1-a) * 255
# Therefore: 255 - C = a * (255 - fg)
# So max(255-R, 255-G, 255-B) = a * max(255-fgR, 255-fgG, 255-fgB).
# For pure white, max(255-R, 255-G, 255-B) = 0.
# For black, max(255-R, ...) = 255.
# For vibrant cyan (0, 210, 230), 255 - R = 255, so alpha = 1.0!

$transparentBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $p = $croppedOriginal.GetPixel($x, $y)
        $r = [int]$p.R
        $g = [int]$p.G
        $b = [int]$p.B

        $diffR = 255 - $r
        $diffG = 255 - $g
        $diffB = 255 - $b
        $maxDiff = [Math]::Max($diffR, [Math]::Max($diffG, $diffB))

        if ($maxDiff -le 8) {
            # Pure white or JPEG compression artifact on white
            $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            # Compute alpha smoothly
            # Ramp from 8 to 35 for smooth subpixel anti-aliasing
            $alpha = 1.0
            if ($maxDiff -lt 35) {
                $alpha = ($maxDiff - 8.0) / (35.0 - 8.0)
            }
            $aInt = [int]([Math]::Round($alpha * 255))
            if ($aInt -gt 255) { $aInt = 255 }
            if ($aInt -lt 0) { $aInt = 0 }

            # Recover foreground color assuming background was white (255,255,255)
            # fg = (C - (1-a)*255) / a = 255 - (255 - C)/a
            if ($alpha -gt 0.05) {
                $fgR = [int][Math]::Round(255 - ($diffR / $alpha))
                $fgG = [int][Math]::Round(255 - ($diffG / $alpha))
                $fgB = [int][Math]::Round(255 - ($diffB / $alpha))

                if ($fgR -lt 0) { $fgR = 0 } elseif ($fgR -gt 255) { $fgR = 255 }
                if ($fgG -lt 0) { $fgG = 0 } elseif ($fgG -gt 255) { $fgG = 255 }
                if ($fgB -lt 0) { $fgB = 0 } elseif ($fgB -gt 255) { $fgB = 255 }

                $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($aInt, $fgR, $fgG, $fgB))
            } else {
                $transparentBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            }
        }
    }
}

$transparentBmp.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Saved zevriyon-logo-original.png and zevriyon-logo.png"

$bmp.Dispose()
$croppedOriginal.Dispose()
$transparentBmp.Dispose()
