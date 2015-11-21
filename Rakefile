require "rubygems"

desc "Deploy build version"
task :deploy do
  puts "## Commiting build website files"
  cd "build" do
    system "git add --all"

    message = "Site updated at #{Time.now.utc}"
    puts "## Commiting: #{message}"

    system "git commit -m \"#{message}\""

    system "git push origin gh-pages"

    cd ".." do
      puts "## Build deploy complete!"
    end
  end
end
