Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$maxDimension = 800
$jpegQuality = 78L
$galleryDirectories = @(
    (Join-Path $root "public/images/programs/muj-val"),
    (Join-Path $root "public/images/programs/orq-rey")
)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq "image/jpeg" }
$encoderParameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
$encoderParameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
    [System.Drawing.Imaging.Encoder]::Quality,
    $jpegQuality
)

foreach ($galleryDirectory in $galleryDirectories) {
    $thumbnailDirectory = Join-Path $galleryDirectory "thumbnails"
    New-Item -ItemType Directory -Force -Path $thumbnailDirectory | Out-Null

    Get-ChildItem -Path $galleryDirectory -Filter "*.jpg" -File | ForEach-Object {
        $source = [System.Drawing.Image]::FromFile($_.FullName)
        $scale = [Math]::Min(
            1.0,
            [double]$maxDimension / [double][Math]::Max($source.Width, $source.Height)
        )
        $width = [int][Math]::Round($source.Width * $scale)
        $height = [int][Math]::Round($source.Height * $scale)

        $thumbnail = [System.Drawing.Bitmap]::new(
            $width,
            $height,
            [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
        )
        $graphics = [System.Drawing.Graphics]::FromImage($thumbnail)
        $graphics.Clear([System.Drawing.Color]::White)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graphics.DrawImage($source, 0, 0, $width, $height)

        $outputPath = Join-Path $thumbnailDirectory $_.Name
        $thumbnail.Save($outputPath, $jpegCodec, $encoderParameters)

        $graphics.Dispose()
        $thumbnail.Dispose()
        $source.Dispose()
    }
}

$encoderParameters.Dispose()
