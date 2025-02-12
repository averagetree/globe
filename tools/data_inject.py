import redis
import csv

def ingest_csv(r):
    path = '/Users/jb/projects/globe/data/'

    file=open(path + "airports-extended.csv", "r")
    reader = csv.reader(file)
    good_reads = 0
    bad_reads = 0

    for line in reader:
        result = 0
        print('- Adding ' + line[1] + ' at ' + line[6] + ' and ' + line[7])
        try:
            result = r.geoadd("airports", [line[7], line[6], line[1]])
            good_reads += 1
        except:
            print('Error loading lat long: ' + line[7] + ' ' + line[6] + ' ' + line[1])
            bad_reads += 1
    
    print("Good reads " + str(good_reads))
    print("Bad reads " + str(bad_reads))

def connect():
    return redis.Redis(host='localhost', port=6379, decode_responses=True)

def run():
    try:
        r = connect()
        print("Connected to DB")
    except:
        print('Unable to connect to DB')

    # res4 = r.geosearch(
    #     "airports",
    #     longitude=-122.27652,
    #     latitude=37.805186,
    #     radius=5,
    #     unit="km",
    # )
    # print(res4)

    ingest_csv(r)
    

if __name__ == '__main__':
    run()