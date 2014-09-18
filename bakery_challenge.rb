# U2.W5: The Bakery Challenge (GPS 2.1)

# Your Names
# 1)Krystyna Ewing
# 2)

 # This is the file you should end up editing. 
 
def bakery_num(num_of_people, fav_food)
  my_list = {"pie" => 8, "cake" => 6, "cookie" => 1}
  pie_qty = 0
  cake_qty = 0
  cookie_qty = 0
# The def bakery_num is the method and the arguments are the num_of_people and fav_food which is available within the method. 
# My_list is a hash that is setting a key for each item and associating a value with them
#The local variables are defiend by the cake, pie, and cookie qty

  has_fave = false
# The has_fave is assigning the value false to that local variable.
  my_list.each_key do |k|
  if k == fav_food
  has_fave = true
  fav_food = k
# The my_list.each_key is going to grab all of the keys
# Has fave now = true if it matches pie, cake or cookie 
  end
  end
  if has_fave == false
  raise ArgumentError.new("You can't make that food")
#If it does not come out as true it posts the above statement.
  else
  fav_food_qty = my_list.values_at(fav_food)[0]
#  The value in the array, that returns the first number in the array
  if num_of_people % fav_food_qty == 0
# Checking and ensuring that there is no remainder left     
    num_of_food = num_of_people / fav_food_qty
# Defines how much food is needed to feed everyone    
    return "You need to make #{num_of_food} #{fav_food}(s)."
#Statement that returns when the above requirements are met
  else num_of_people % fav_food_qty != 0
# Ensures that the operand is equal to 0 if not then it is true
    while num_of_people > 0
# States that the number of people has to be a integer higher than 0
    if num_of_people / my_list["pie"] > 0
# This statement takes the number of people, and divides it by the value of pie in the hash, and is supposed to furnish a number greater than 0     
    pie_qty = num_of_people / my_list["pie"]
# States that the amount of pie is equal to the number of people divided by the valye given to the key pie   
    num_of_people = num_of_people % my_list["pie"]
# Ensures that there is no remainder left to ensure that if there is a remainder it is given   
    elsif num_of_people / my_list["cake"] > 0
# Ensures that  if the cake key is utilized the operation it returns a value greater than 0    
    cake_qty = num_of_people / my_list["cake"]
# States that the cake quantity is equal to the value that is listed after divinding the num of people by the value assigned to the cake key
    num_of_people = num_of_people % my_list["cake"]
# Checks and ensures that there is not a remainder left for the value of the cake key    
    else
    cookie_qty = num_of_people
# States that the amount of cookies is equal to the number of people    
    num_of_people = 0
# Gives the num of people a local variable of 0    
    end
    end
    return "You need to make #{pie_qty} pie(s), #{cake_qty} cake(s), and #{cookie_qty} cookie(s)."
# states the quantity of each key from the above hash after the code has been correctly executed.    
    end
  end
end
 

#-----------------------------------------------------------------------------------------------------
#DRIVER CODE-- DO NOT MODIFY ANYTHING BELOW THIS LINE (except in the section at the bottom)
# These are the tests to ensure it's working. 
# These should all print true if the method is working properly.
p bakery_num(24, "cake") == "You need to make 4 cake(s)."
p bakery_num(41, "pie") == "You need to make 5 pie(s), 0 cake(s), and 1 cookie(s)."
p bakery_num(24, "cookie") == "You need to make 24 cookie(s)."
p bakery_num(4, "pie") == "You need to make 0 pie(s), 0 cake(s), and 4 cookie(s)."
p bakery_num(130, "pie") == "You need to make 16 pie(s), 0 cake(s), and 2 cookie(s)."
# p bakery_num(3, "apples") # this will raise an ArgumentError

# You SHOULD change this driver code. Why? Because it doesn't make sense.
p bakery_num(41, "cake") == "You need to make 5 pie(s), 0 cake(s), and 1 cookie(s)." # WHAAAAAT? I thought I said I wanted cake!
 
