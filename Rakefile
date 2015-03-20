# Example of deploy script. It means that dev and build folders are different branches
# and deploy will fix changes by committing them and push to the appropriate repos.

# build-deploy task commit and push only build version
# deploy task commit and push dev version

require "rubygems"

desc "Deploy to Master and Source branch"
task :deploy do
  puts "## Commiting source files"

  system "git add --all"

  message = "Source updated at #{Time.now.utc}"
  puts "## Commiting: #{message}"
  system "git commit -m \"#{message}\""

  puts "## Pushing source files"
  system "git push origin source"

  puts "## Source Deploy Complete!"

  cd "build" do
    system "git add --all"

    message = "Site updated at #{Time.now.utc}"
    puts "## Commiting: #{message}"
    system "git commit -m \"#{message}\""

    puts "## Pushing generated site"
    system "git push origin master"

    cd ".." do
      puts "## Generated site Deploy Complete!"
    end
  end
end

desc "Deploy only generated site to Master branch"
task :buildDeploy do
  puts "## Commiting build website files"
  cd "build" do
    system "git add --all"

    message = "Site updated at #{Time.now.utc}"
    puts "## Commiting: #{message}"
    system "git commit -m \"#{message}\""

    puts "## Pushing generated site"
    system "git push origin master"

    cd ".." do
      puts "## Generated site Deploy Complete!"
    end
  end
end