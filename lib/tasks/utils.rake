desc 'Clean Reset the DB'
task :clean_reset do
  %w[db:drop db:create db:migrate db:seed db:test:prepare].each do |t|
    Rake::Task[t].invoke
  end
end