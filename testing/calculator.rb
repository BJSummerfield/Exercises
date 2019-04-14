require 'rspec'

class Calculator
  def add(number_one, number_two)
    return number_one + number_two
  end

  def subtract(number_one, number_two)
    return number_one - number_two
  end

  def multiply(number_one, number_two)
    return number_one * number_two
  end

  def divide(dividend, divisor)
    return dividend / divisor
  end

  def square(number)
    return number * number
  end

  def power(number, exponent)
    return number ** exponent
  end

  def square_root(number)
    i = 1
    number.times do
      if (number / i) == i
        return i
      end 
      i += 1
    end
    return "No whole Square root"
  end

  def margin(number, percent)
    inverse = (100 - percent) / 100.to_f
    return number / inverse
  end
end


RSpec.describe Calculator do
  describe '#add' do
    it 'should return the sum of two numbers' do
      calculator = Calculator.new
      result = calculator.add(1, 3)
      expect(result).to eq(4)
    end
  end

  describe '#subtract' do
    it 'should return the difference of two numbers' do
      calculator = Calculator.new
      result = calculator.subtract(5, 4)
      expect(result).to eq(1)
    end
  end

  describe '#multiply' do
    it 'should return the product of two numbers' do
      calculator = Calculator.new
      result = calculator.multiply(5, 6)
      expect(result).to eq(30)
    end
  end

  describe '#divide' do
    it 'should return the divisor of two numbers' do
      calculator = Calculator.new
      result = calculator.divide(20, 4)
      expect(result).to eq(5)
    end
  end

  describe '#square' do
    it 'should return the square of a number' do
      calculator = Calculator.new
      result = calculator.square(4)
      expect(result).to eq(16)
    end
  end
    
  describe '#power' do
    it 'should return the power of a number with exponent' do
      calculator = Calculator.new
      result = calculator.power(3,3)
      expect(result).to eq(27)
    end
  end    
  
  describe '#root' do
    it 'should return the square square_root of a number with'  do
      calculator = Calculator.new
      result = calculator.square_root(9)
      expect(result).to eq(3)
      result = calculator.square_root(7)
      expect(result).to eq("No whole Square root")
    end
  end

  describe '#margin' do
    it 'it should caluclate margin percent' do
      calculator = Calculator.new
      result = calculator.margin(50, 20)
      expect(result).to eq(62.5)
    end
  end 

end