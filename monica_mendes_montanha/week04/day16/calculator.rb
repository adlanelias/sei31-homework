require 'pry'

# binding.pry

def show_menu
  puts "Calculator" #TODO: you could .center here to make it look nice
  puts "-=" * 40 # El cheapo divider horinzotal line
  puts "[a] - Addition"
  #TODO" Add other options here
  puts "[q] - Quit"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    # TODO: get number a
    # TODO: get number begin
    # TODO: call add a, b
    puts "Addition coming soon"
  else
    puts "Invalid selection!"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts 'Thanks for using crappy calculator!'