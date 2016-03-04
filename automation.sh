#!/bin/bash
# Select and extract build system

# Options
title="Please select the build system you want to use or quit script"
prompt="Enter option number"
options=("Grunt" "Gulp" "Quit")

# Check if automation folder with build systems exists
if [[ -d "./automation/grunt" && -d "./automation/gulp" ]]; then

	# Check if any build system already used
	if [[ -f "package.json" || -f "gulpfile.js" || -f "Gruntfile.js" ]]; then

		# Show warning and cancel extraction
		printf "Warning! Found signs of installed build system. \nExtraction canceled due to existence of one of these files: package.json, gulpfile.js, Gruntfile.js \nExiting...";
	else

		# Show select menu
		printf "$title \n"
		PS3="$prompt: "
		select opt in "${options[@]}"
		do
			case $opt in
				"Grunt")
					cp -rf ./automation/grunt/. ./
					printf "Grunt system was successfully extracted! Go ahead and install all necessary npm package \nExiting...";
					break;;

				"Gulp")
					cp -rf ./automation/gulp/. ./
					printf "Gulp system was successfully extracted! Go ahead and install all necessary npm packages \nExiting...";
					break;;

				"Quit") printf "Exiting... \n"; break;;

				*) printf "Invalid option, try to enter the correct number from the list above \nExiting...";;
			esac
		done
	fi
else
	# Show notification that directory with build systems doesn't exist
	printf "Error! Build system directory not found. \nMake sure that `automation` directory with grunt and gulp build systems exists. \n";
fi


