# U2.W4: Cipher Challenge


# I worked on this challenge with: Rafael 



# 1. Solution
# Write your comments on what each thing is doing. 
# If you have difficulty, go into IRB and play with the methods.



# def north_korean_cipher(coded_message) 
#   input = coded_message.downcase.split("") # Check out this method in IRB to see how it works! Also refer to the ruby docs. 
#   decoded_sentence = []
#   cipher = {"e" => "a",   # This is technically a shift of four letters...Can you think of a way to automate this? Is a hash
#             "f" => "b",   # the best data structure for this problem? What are the pros and cons of hashes?
#             "g" => "c",   #This can be easily automated with an array instead of a hash, with a hash it is sort of a toss
#             "h" => "d",   # up as to what the outut would be, with an array you can be very specific. A hash is a great idea
#             "i" => "e", 
#             "j" => "f",
#             "k" => "g",
#             "l" => "h",
#             "m" => "i",
#             "n" => "j",
#             "o" => "k",
#             "p" => "l",
#             "q" => "m",
#             "r" => "n",
#             "s" => "o",
#             "t" => "p",
#             "u" => "q",
#             "v" => "r",
#             "w" => "s",
#             "x" => "t",
#             "y" => "u",
#             "z" => "v",
#             "a" => "w",
#             "b" => "x",
#             "c" => "y",
#             "d" => "z"}
             
#   input.each do |x| # What is #each doing here? Each is a placeholder for whatever item gets sent donw the pipe
#     found_match = false    # Why would this be assigned to false from the outset? What happens when it's true?
#     # It is set to false because it tries to match the 
#     cipher.each_key do |match| # What is #each_key doing here?
#       if x == y  # What is this comparing? Where is it getting x? Where is it getting y? What are those variables really?
#         puts "I am comparing x and y. X is #{x} and Y is #{y}."
#         decoded_sentence << cipher[index-4]
#         found_match = true
#         break  # Why is it breaking here? Stops the loop 
                 # Making the symbols into spaces
#       elsif x == "@" || x == "#" || x == "$" || x == "%"|| x == "^" || x == "&"|| x =="*" #What the heck is this doing?
#         decoded_sentence << " "
#         found_match = true 
#         break
#       elsif (0..9).to_a.include?(x) # Try this out in IRB. What does   " (0..9).to_a "    do?
#         decoded_sentence << x
#         found_match = true
#         break
#       end 
#     end
#     if not found_match  # What is this looking for? Decodes sentence if it doesn't find a match in any of the code. 
#       decoded_sentence << x
#     end
#   end
#   decoded_sentence = decoded_sentence.join("")
 
#   if decoded_sentence.match(/\d+/) #What is this matching? Look at Rubular for help. If the coded sentence matches its a regular expression
# and it is looking for 
#     decoded_sentence.gsub!(/\d+/) { |num| num.to_i / 100 } #He's been known to exaggerate...
#   end  
#   return decoded_sentence # What is this returning? This is returning the fully decoded sentence      
# end

# Your Refactored Solution

def north_korean_cipher(coded_message)
    input = coded_message.downcase.split("")
    decoded_sentence = []
    cipher = ["a","b","c", "d", "e", "f","g","h","i","j", "k", "l", "m", "n","o","p", "q","r", "s","t", "u", "v", "w", "x", "y", "z"]
input.each do|code|
found_match = false
input.each do |code| 
    found_match = false  
    cipher.each_with_index do | match, index| 
      if code == match  
        puts "I am comparing x and y. X is #{code} and Y is #{cipher[index - 4]}."
        decoded_sentence << cipher[index - 4]
        found_match = true
        break  
      elsif x == "@" || x == "#" || x == "$" || x == "%"|| x == "^" || x == "&"|| x =="*" 
        decoded_sentence << " "
        found_match = true
        break
      elsif (0..9).to_a.include?(code) 
       decoded_sentence << x
        found_match = true
        break
      end 
    end
    if not found_match  
      decoded_sentence << x
    end
  end
  decoded_sentence = decoded_sentence.join("")
 
  if decoded_sentence.match(/\d+/) 
    decoded_sentence.gsub!(/\d+/) { |num| num.to_i / 100 } 
  end  
  return decoded_sentence       
end







# Driver Code:
p north_korean_cipher("m^aerx%e&gsoi!") == "i want a coke!" 
p north_korean_cipher("syv@tistpi$iex#xli*qswx*hipmgmsyw*erh*ryxvmxmsyw%jsshw^jvsq^syv#1000000#tvsjmxefpi$jevqw.") == "our people eat the most delicious and nutritious foods from our 10000 profitable farms." 
p north_korean_cipher("syv%ryoiw#evi#liph^xskixliv@fc^kveti-jpezsvih@xsjjii.*hsr'x%xipp&xli#yw!") == "our nukes are held together by grape-flavored toffee. don't tell the us!"
p north_korean_cipher("mj^csy&qeoi^sri*qmwxeoi,%kir.*vm@csrk-kmp,&csy^ampp*fi&vitpegih*fc@hirrmw&vshqer.") == "if you make one mistake, gen. ri yong-gil, you will be replaced by dennis rodman." 
p north_korean_cipher("ribx^wxst:$wsyxl%osvie,$xlir$neter,#xlir%xli%asvph!") == "next stop: south korea, then japan, then the world!"
p north_korean_cipher("ger^wsqifshc*nywx^kix^qi&10000*fekw@sj$gssp%vergl@hsvmxsw?") == "can somebody just get me 100 bags of cool ranch doritos?"

# Reflection
#All in all this was VERY challenging as I have been having some difficulty with ruby, I need to practice a lot more
# With ruby especially hashes, just when we thought that this could use an array, we thought hash, and then we went back to the
#array just because hashes have to be SOOOO SPECIFIC that the code would just be reptitive.
#definately one of the harder challenges I have done here during my time in phase 0 and I know it's just going to get harder
#from here! Great googly moogly!!
 
