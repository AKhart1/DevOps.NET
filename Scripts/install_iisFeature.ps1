# prompt user for confirmation before installation
$confirmation = Read-Host "Do you confirm the installation of IIS feature? (Y/N)"
if($confirmation -ne "Y")
{
	Write-Host "Installation failed."
	return
}

#Installation simulation
Write-Host "Perfoming installation simulation..."

Write-Host "Preparing installation..."
Start-Sleep -Seconds 2

Write-Host "Downloading required files..."
Start-Sleep -Seconds 3

Write-Host "Extracting files..."
Start-Sleep -Seconds 3

Write-Host "Configuring settings..."
Start-Sleep -Seconds 1


# Check if IIS feature is already installed
$featureName = "IIS-WebServerRole"
$featureInstalled = Get-WindowsOptionalFeature -Online | Where-Object { $_.FeatureName -eq $featureName -and $_.State -eq "Enabled" }

if ($featureInstalled) {
	Write-Host "IIS feature is already installed."
} else {
	# Install the IIS feature
	Write-Host "Installing IIS feature: $featureName"
	Enable-WindowsOptionalFeature -Online -FeatureName $featureName

	# Check if installation was successful
	$featureInstalled = Get-WindowsOptionalFeature -Online | Where-Object { $_.FeatureName -eq $featureName -and $_.State -eq "Enabled" }
	if ($featureInstalled) {
		Write-Host "IIS feature installation completed successfully."
	} else {
		Write-Host "IIS feature installation failed."
	}
}