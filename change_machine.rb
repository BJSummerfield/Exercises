require 'rspec'
class ChangeMachine

  def change(number)
    answer = []
    while number > 0 
      answer << 25  && number -= 25 if number >= 25
      answer << 10  && number -= 10 if number < 25 && number > 11
      answer << 5  && number -= 5 if number < 10 && number > 6
      answer << 1  && number -= 1 if number < 5 && number > 0
    end
    return answer
  end

  def roman(number)
    answer = []
    while number > 0
      answer << "M"  && number -= 1000 if number >= 1000 && number > 501
      answer << "D"  && number -= 500 if number >= 500 && number > 101
      answer << "C"  && number -= 100 if number >= 100 && number > 51
      answer << "L"  && number -= 50 if number >= 50 && number > 26
      answer << "X"  && number -= 10 if number < 25 && number > 11
      answer << "VI"  && number -= 6 if number == 6
      answer << "V"  && number -= 5 if number < 10 && number > 4
      answer << "IV"  && number -= 4 if number == 4
      answer << "I"  && number -= 1 if number < 5 && number > 0
    end
    return answer.join('')
  end
  
end


RSpec.describe ChangeMachine do
  describe '#roman' do
    it 'should return [VIV] when given 9' do
      machine = ChangeMachine.new
      expect(machine.roman(9)).to eq("VIV")
    end
  end
  describe '#roman' do
    it 'should return [VIII] when given 8' do
      machine = ChangeMachine.new
      expect(machine.roman(8)).to eq("VIII")
    end
  end
  describe '#roman' do
    it 'should return [XVI] when given 16' do
      machine = ChangeMachine.new
      expect(machine.roman(16)).to eq("XVI")
    end
  end 
  describe '#roman' do
    it 'should return [CLIV] when given 154' do
      machine = ChangeMachine.new
      expect(machine.roman(154)).to eq("CLIV")
    end
  end
  describe '#change' do
    it 'should return [1] when given 1' do
      machine = ChangeMachine.new
      expect(machine.change(1)).to eq([1])
    end
  end

  describe '#change' do
    it 'should return [1,1] when given 2' do
      machine = ChangeMachine.new
      expect(machine.change(2)).to eq([1,1])
    end
  end 
  describe '#change' do
    it 'should return [5,1,1,1] when given 8' do
      machine = ChangeMachine.new
      expect(machine.change(8)).to eq([5,1,1,1])
    end
  end
  describe '#change' do
    it 'should return [10,1,1,1] when given 13' do
      machine = ChangeMachine.new
      expect(machine.change(13)).to eq([10,1,1,1])
    end
  end 
  describe '#change' do
    it 'should return [10,5,1,1,1] when given 18' do
      machine = ChangeMachine.new
      expect(machine.change(18)).to eq([10,5,1,1,1])
    end
  end
  describe '#change' do
    it 'should return [25,10,5,1,1] when given 42' do
      machine = ChangeMachine.new
      expect(machine.change(42)).to eq([25,10,5,1,1])
    end
  end 
  describe '#change' do
    it 'should return [25,25,25] when given 75' do
      machine = ChangeMachine.new
      expect(machine.change(75)).to eq([25,25,25])
    end
  end
end