#adjacent or diagonal

#read the file and create array fo arrays with each character


def read_file(file):

    data = []
    with open(file, 'r') as file:
        data = []
        for line_number, line_content in enumerate(file, start=1):
            line = line_content.rstrip('\n')
            characters = list(line)
            data.append(characters)
    return data

def main():
    data = read_file("test.txt")
    sum = 0
    for index,line in enumerate(data):
        
        counter = 0
        number = 0
        start = 0

        while(counter < len(line)):
            
            if(line[counter].isdigit()):
                if(number == 0):
                    start = counter
                number=number*10 + int(line[counter])

            if(line[counter] == '.' and number != 0):
                if(checkValidity(data, start-1, counter+1, index)):
                    sum += number
                    print(f"these are the numbers {number}")
                number = 0
                
                

            counter += 1

    return sum

def checkValidity(data, startIndex, endIndex, lineIndex):
    

    previousLineIndex = lineIndex - 1
    nextLineIndex = lineIndex + 1

    #capture edge cases of start index being -1 or end index being len(line)
    if(startIndex == -1):
        startIndex = 0
    if(endIndex == len(data[lineIndex])):
        endIndex = len(data[lineIndex])-1

    #capture edge cases for data
    if(previousLineIndex == -1):
        previousLineIndex = 0
    if(nextLineIndex == len(data)):
        nextLineIndex = len(data)-1

    #check current line , previous line and next line
    if(findSpecialCharacter(data[lineIndex], startIndex, endIndex)
     or findSpecialCharacter(data[previousLineIndex], startIndex, endIndex) 
     or findSpecialCharacter(data[nextLineIndex], startIndex, endIndex)):
        return True

    #check previous line



def findSpecialCharacter(line, startIndex, endIndex):
 
    for i in range(startIndex, endIndex):
        if(line[i]!="." and  not line[i].isdigit()):
            return True
    return False

if __name__ == "__main__":
    print(main())
