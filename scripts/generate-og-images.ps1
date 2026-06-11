Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$outputDirectory = Join-Path $root "public/og"

function New-CoverImage {
    param(
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [double]$FocusX = 0.5,
        [double]$FocusY = 0.5
    )

    $source = [System.Drawing.Bitmap]::FromFile($Path)
    $scale = [Math]::Max($Width / $source.Width, $Height / $source.Height)
    $scaledWidth = [int][Math]::Ceiling($source.Width * $scale)
    $scaledHeight = [int][Math]::Ceiling($source.Height * $scale)
    $offsetX = [int](($Width - $scaledWidth) * $FocusX)
    $offsetY = [int](($Height - $scaledHeight) * $FocusY)

    $canvas = New-Object System.Drawing.Bitmap $Width, $Height
    $graphics = [System.Drawing.Graphics]::FromImage($canvas)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($source, $offsetX, $offsetY, $scaledWidth, $scaledHeight)

    $graphics.Dispose()
    $source.Dispose()
    return $canvas
}

function Get-TrimmedLogo {
    param(
        [string]$Path,
        [bool]$RemoveWhite = $true
    )

    $source = [System.Drawing.Bitmap]::FromFile($Path)
    $result = New-Object System.Drawing.Bitmap $source.Width, $source.Height,
        ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

    $minX = $source.Width
    $minY = $source.Height
    $maxX = -1
    $maxY = -1

    for ($y = 0; $y -lt $source.Height; $y++) {
        for ($x = 0; $x -lt $source.Width; $x++) {
            $pixel = $source.GetPixel($x, $y)
            $isWhite = $RemoveWhite -and $pixel.R -gt 245 -and $pixel.G -gt 245 -and $pixel.B -gt 245
            if (-not $isWhite -and $pixel.A -gt 8) {
                $result.SetPixel($x, $y, $pixel)
                $minX = [Math]::Min($minX, $x)
                $minY = [Math]::Min($minY, $y)
                $maxX = [Math]::Max($maxX, $x)
                $maxY = [Math]::Max($maxY, $y)
            }
        }
    }

    $source.Dispose()

    if ($maxX -lt $minX -or $maxY -lt $minY) {
        return $result
    }

    $padding = 4
    $cropX = [Math]::Max(0, $minX - $padding)
    $cropY = [Math]::Max(0, $minY - $padding)
    $cropWidth = [Math]::Min($result.Width - $cropX, $maxX - $minX + 1 + (2 * $padding))
    $cropHeight = [Math]::Min($result.Height - $cropY, $maxY - $minY + 1 + (2 * $padding))
    $cropped = $result.Clone(
        (New-Object System.Drawing.Rectangle $cropX, $cropY, $cropWidth, $cropHeight),
        [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
    )
    $result.Dispose()
    return $cropped
}

function Draw-ContainedImage {
    param(
        [System.Drawing.Graphics]$Graphics,
        [System.Drawing.Image]$Image,
        [System.Drawing.Rectangle]$Bounds
    )

    $scale = [Math]::Min($Bounds.Width / $Image.Width, $Bounds.Height / $Image.Height)
    $width = [int]($Image.Width * $scale)
    $height = [int]($Image.Height * $scale)
    $x = $Bounds.X
    $y = $Bounds.Y + [int](($Bounds.Height - $height) / 2)
    $Graphics.DrawImage($Image, $x, $y, $width, $height)
}

function New-OgImage {
    param(
        [string]$OutputName,
        [string]$PhotoPath,
        [string]$LogoPath,
        [string]$Title,
        [string]$Tagline,
        [double]$FocusX = 0.5,
        [double]$FocusY = 0.5,
        [bool]$RemoveLogoWhite = $true
    )

    $width = 1200
    $height = 630
    $image = New-CoverImage -Path $PhotoPath -Width $width -Height $height -FocusX $FocusX -FocusY $FocusY
    $graphics = [System.Drawing.Graphics]::FromImage($image)
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

    $shade = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(55, 8, 24, 42))
    $graphics.FillRectangle($shade, 0, 0, $width, $height)

    $gradient = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        (New-Object System.Drawing.Rectangle 0, 0, $width, $height),
        [System.Drawing.Color]::FromArgb(245, 8, 27, 48),
        [System.Drawing.Color]::FromArgb(20, 8, 27, 48),
        [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
    )
    $graphics.FillRectangle($gradient, 0, 0, $width, $height)

    $overlineFont = New-Object System.Drawing.Font "Segoe UI", 17,
        ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
    $titleFont = New-Object System.Drawing.Font "Segoe UI", 54,
        ([System.Drawing.FontStyle]::Bold), ([System.Drawing.GraphicsUnit]::Pixel)
    $taglineFont = New-Object System.Drawing.Font "Segoe UI", 25,
        ([System.Drawing.FontStyle]::Regular), ([System.Drawing.GraphicsUnit]::Pixel)
    $white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
    $yellow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 242, 215, 82))

    $graphics.DrawString("ARMONIZANDO VIDAS A.B.P.", $overlineFont, $yellow, 64, 48)

    $logo = Get-TrimmedLogo -Path $LogoPath -RemoveWhite $RemoveLogoWhite
    Draw-ContainedImage -Graphics $graphics -Image $logo -Bounds (New-Object System.Drawing.Rectangle 64, 88, 360, 150)

    $titleY = 270
    $graphics.DrawString($Title, $titleFont, $white, 64, $titleY)

    $taglineBounds = New-Object System.Drawing.RectangleF 68, 350, 620, 120
    $taglineFormat = New-Object System.Drawing.StringFormat
    $taglineFormat.Trimming = [System.Drawing.StringTrimming]::Word
    $graphics.DrawString($Tagline, $taglineFont, $white, $taglineBounds, $taglineFormat)

    $graphics.FillRectangle($yellow, 0, 618, 400, 12)
    $mint = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 102, 211, 193))
    $pink = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 220, 75, 157))
    $graphics.FillRectangle($mint, 400, 618, 400, 12)
    $graphics.FillRectangle($pink, 800, 618, 400, 12)

    $outputPath = Join-Path $outputDirectory $OutputName
    $image.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $logo.Dispose()
    $taglineFormat.Dispose()
    $pink.Dispose()
    $mint.Dispose()
    $yellow.Dispose()
    $white.Dispose()
    $taglineFont.Dispose()
    $titleFont.Dispose()
    $overlineFont.Dispose()
    $gradient.Dispose()
    $shade.Dispose()
    $graphics.Dispose()
    $image.Dispose()
}

New-OgImage `
    -OutputName "armonizando-vidas.png" `
    -PhotoPath (Join-Path $root "public/images/programs/orquesta-presentacion.jpg") `
    -LogoPath (Join-Path $root "public/logos/armonizando-vidas.png") `
    -Title "Armonizando Vidas" `
    -Tagline "Formaci$([char]0x00F3)n, alimento y esperanza para transformar vidas y fortalecer comunidades." `
    -FocusX 0.6

New-OgImage `
    -OutputName "orquestas-del-rey.png" `
    -PhotoPath (Join-Path $root "public/images/programs/orquesta-portada.jpg") `
    -LogoPath (Join-Path $root "public/logos/orquestas-del-rey.png") `
    -Title "Orquestas del Rey" `
    -Tagline "Formaci$([char]0x00F3)n musical, valores y herramientas para construir un proyecto de vida." `
    -FocusX 0.8

New-OgImage `
    -OutputName "mujeres-de-valor.png" `
    -PhotoPath (Join-Path $root "public/images/programs/muj-val/muj-val-23.jpg") `
    -LogoPath (Join-Path $root "public/logos/mujeres-de-valor.png") `
    -Title "Mujeres de Valor" `
    -Tagline "Alimento, convivencia y valores para fortalecer a las mujeres y sus familias." `
    -FocusX 0.55 `
    -FocusY 0.4 `
    -RemoveLogoWhite $false

New-OgImage `
    -OutputName "banco-de-alimentos.png" `
    -PhotoPath (Join-Path $root "public/images/programs/banco-alimentos-portada.jpg") `
    -LogoPath (Join-Path $root "public/logos/banco-de-alimentos.png") `
    -Title "Banco de Alimentos" `
    -Tagline "Despensas, v$([char]0x00ED)veres y acompa$([char]0x00F1)amiento para familias y grupos vulnerables." `
    -FocusX 0.7
