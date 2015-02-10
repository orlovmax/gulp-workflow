# Example of deploy script. It means that dev and build folders are separate repositories 
# (or in some case different branches of the same repo) and deploy fix changes by commit
# and push it to the appropriate repos. Note that task called deploy, we call it from our grunt task

require "rubygems"

desc "Start Deploy"
task :deploy do
  puts "## Deploying dev version"

  system "git add --all"

  message = "Source updated at #{Time.now.utc}"
  puts "## Commiting: #{message}"
  system "git commit -m \"#{message}\""

  puts "## Pushing source files"
  system "git push origin master"
  
  puts "## Source Deploy Complete!"

  cd "build" do
    puts "## Deploying build version"
    system "git add --all"

    message = "Site updated at #{Time.now.utc}"
    puts "## Commiting: #{message}"
    system "git commit -m \"#{message}\""

    puts "## Pushing build site"
    system "git push origin master"

    cd ".." do
      puts "## Build Deploy Complete!"
    end
  end
end