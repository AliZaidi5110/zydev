Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# In zevriyon-logo.png (510 x 493):
# Top icon is approximately y=0 to y=315 (relative to 47 in source: 365-47 = 318)
# Gap is ~ 318 to 333
# Text is y=333 to y=490

# Let's measure exact bounds of Icon and Text in the transparent bitmap
$iconMinX = $src.Width; $iconMaxX = 0; $iconMinY = $src.Height; $iconMaxY = 0
for ($y = 0; $y -lt 320; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        if ($src.GetPixel($x, $y).A -gt 15) {
            if ($x -lt $iconMinX) { $iconMinX = $x }
            if ($x -gt $iconMaxX) { $iconMaxX = $x }
            if ($y -lt $iconMinY) { $iconMinY = $y }
            if ($y -gt $iconMaxY) { $iconMaxY = $y }
        }
    }
}
$iconW = $iconMaxX - $iconMinX + 1
$iconH = $iconMaxY - $iconMinY + 1
Write-Output "Icon bounds: x=$iconMinX, y=$iconMinY, ${iconW}x${iconH}"

$textMinX = $src.Width; $textMaxX = 0; $textMinY = $src.Height; $textMaxY = 0
for ($y = 320; $y -lt $src.Height; $y++) {
    for ($x = 0; $x -lt $src.Width; $x++) {
        if ($src.GetPixel($x, $y).A -gt 15) {
            if ($x -lt $textMinX) { $textMinX = $x }
            if ($x -gt $textMaxX) { $textMaxX = $x }
            if ($y -lt $textMinY) { $textMinY = $y }
            if ($y -gt $textMaxY) { $textMaxY = $y }
        }
    }
}
$textW = $textMaxX - $textMinX + 1
$textH = $textMaxY - $textMinY + 1
Write-Output "Text bounds: x=$textMinX, y=$textMinY, ${textW}x${textH}"

# Create horizontal composite:
# Scale both so height is 200px:
# Target canvas height = 200
$targetH = 200
# Icon scaled to targetH
$scaleIcon = $targetH / $iconH
$newIconW = [int]($iconW * $scaleIcon)
$newIconH = $targetH

# Text scaled proportionally to fit nicely alongside
# Text native aspect ratio is $textW / $textH (~490 / 160 = ~3.06)
# If text is scaled so textH is ~ 140px (with 30px padding top/bottom to center with the 200px icon):
$targetTextH = 145
$scaleText = $targetTextH / $textH
$newTextW = [int]($textW * $scaleText)
$newTextH = $targetTextH
$textOffsetY = [int](($targetH - $newTextH) / 2)

$gap = 25
$canvasW = $newIconW + $gap + $newTextW + 10
$canvasH = $targetH

Write-Output "Canvas: ${canvasW}x${canvasH}"

$horizontalBmp = New-Object System.Drawing.Bitmap($canvasW, $canvasH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($horizontalBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw icon
$srcIconRect = New-Object System.Drawing.Rectangle($iconMinX, $iconMinY, $iconW, $iconH)
$destIconRect = New-Object System.Drawing.Rectangle(0, 0, $newIconW, $newIconH)
$g.DrawImage($src, $destIconRect, $srcIconRect, [System.Drawing.GraphicsUnit]::Pixel)

# Draw text
$srcTextRect = New-Object System.Drawing.Rectangle($textMinX, $textMinY, $textW, $textH)
$destTextRect = New-Object System.Drawing.Rectangle(($newIconW + $gap), $textOffsetY, $newTextW, $newTextH)
$g.DrawImage($src, $destTextRect, $srcTextRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()

$horizontalBmp.Save("c:\Users\LENOVO\OneDrive\Desktop\zydev\public\images\zevriyon-logo-horizontal.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved zevriyon-logo-horizontal.png successfully"

$src.Dispose()
$horizontalBmp.Dispose()
