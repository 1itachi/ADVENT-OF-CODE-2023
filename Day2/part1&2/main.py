with open("input.txt", 'r') as file:
    # Initialize an empty dictionary to store the data
    data_dict = {}
    result_tuples = [];

    part1result = 0
    part2result = 0

    for line_number, line_content in enumerate(file, start=1):
        line = line_content.rstrip('\n')
        # structure of line
        maxResult = {
            'red':0,
            'green':0,
            'blue':0
        }
        items = line.split(':')
        sets = items[1].split(';')
        
        for set in sets:
            singleSet = set.split(',')
            result_tuples = [tuple(item.strip().split()) for item in singleSet]
            for tp1 in result_tuples:
                number, color = tp1
                number = int(number)
                if(maxResult[color] < number):
                    maxResult[color] = number

        power=maxResult['red'] * maxResult['blue'] * maxResult['green']
        part2result += power           
        
        if(maxResult['red'] <= 12 and maxResult['blue'] <= 14 and maxResult['green'] <= 13):
            part1result += line_number

    print(part1result)
    print(part2result)  

            