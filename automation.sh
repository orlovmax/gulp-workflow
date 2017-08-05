#!/bin/bash
# Select and extract build system

# Flags
while test $# -gt 0; do
	case "$1" in
		-h|--help)
            echo "Available options:"
            echo "-h, --help               show brief help"
            echo "-c, --clear              remove _automation directory and automation.sh"
            exit 0 ;;

		-c|--clear)
			echo "This option will remove _automation directory and automation.sh script?"
			read -p "Are you sure you want to continue? (y/n)" choice
			case "$choice" in
				y|Y )
					rm -rf ./_automation ./automation.sh
					exit 0 ;;
				n|N )
					printf "Exiting... \n";
					exit 0 ;;
				* )
					printf "Invalid option, try to enter the correct y or n answer \nExiting...\n";
					exit 0 ;;
			esac
			exit 0 ;;
		*)
			printf "Invalid option, try to use -h or --help  to get a list of all the available commands.  \nExiting...\n";
			exit 0 ;;
	esac
done

# Options
title="Please select the build system you want to use or quit script"
prompt="Enter option number"
options=("Grunt" "Gulp" "Quit")

# Check if _automation directory with build systems exists
if [[ -d "./_automation/_grunt" && -d "./_automation/_gulp" ]]; then

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
					cp -rf ./_automation/_grunt/. ./
					printf "Grunt system was successfully extracted! Go ahead and install all necessary npm package using npm install \nExiting...";
					exit 0 ;;

				"Gulp")
					cp -rf ./_automation/_gulp/. ./
					printf "Gulp system was successfully extracted! Go ahead and install all necessary npm packages using npm install \nExiting...";
					exit 0 ;;

				"Quit")
					printf "Exiting... \n";
					exit 0 ;;

				*)
					printf "Invalid option, try to enter the correct number from the list above \nExiting...\n";
					exit 0 ;;
			esac
		done
	fi
else
	# Show notification that directory with build systems doesn't exist
	printf "Error! Build system directory not found. \nMake sure that '_automation' directory with grunt and gulp build systems exists. \n";
fi


