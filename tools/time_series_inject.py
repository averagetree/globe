import redis
import csv
import time
import datetime
import json
import re
from flask_socketio import SocketIO, emit

def ingest_csv(r_db):
    # r_ts = r.ts()
    
    path = '/Users/jb/projects/globe/data/'

    file=open(path + "flight_data_2.csv", "r")
    reader = csv.reader(file)
    good_reads = 0
    bad_reads = 0
    first_line = True
    for line in reader:
        if (first_line):
            first_line = False
        else:
            result = 0
            full_time = str(line[2]) + " " + str(line[1])
            timestamp = time.mktime(datetime.datetime.strptime(full_time, "%m/%d/%Y %H:%M:%S.%f").timetuple())

            object_id = str(line[0]) + "_flight"
            
            # Store altitude in a sorted set
            altitude_key = f"geo:{object_id}:altitude"
            latlong_key = f"geo:{object_id}:latlong"

            r_db.zadd(altitude_key, {line[3]: float(timestamp)})

            # Store latitude and longitude as JSON in a hash
            r_db.hset(latlong_key, float(timestamp), json.dumps({
                "latitude": line[6],
                "longitude": line[7]
            }))

            # delete keys instead
            # r_db.delete(altitude_key)
            # r_db.delete(latlong_key)

            # # Create key if it doesn't exist
            # if (r.exists(keyname)):
            #     print("Key exists")
            #     r_ts.add(keyname, timestamp, labels={"lat": line[6], "long": line[7], "alt": line[3]})
            # else:
            #     # r_ts.create(str(line[0]) + "_flight", timestamp, labels={"lat": line[6], "long": line[7], "alt": line[3]})
            #     print("need to add key")

            try:
                # result = r.geoadd("airports", [line[7], line[6], line[1]])
                good_reads += 1
            except:
                print('Error loading lat long: ' + line[7] + ' ' + line[6] + ' ' + line[1])
                bad_reads += 1
        
    print("Good reads " + str(good_reads))
    print("Bad reads " + str(bad_reads))

def refresh_db(r, key):
    try:
        r.delete(key)
        print("Deleted " + key)
    except:
        print("Failed to delete " + key)

def connect():
    return redis.Redis(host='localhost', port=6379, decode_responses=True)

def run():
    try:
        r = connect()
        print("Connected to DB")
    except:
        print('Unable to connect to DB')

    ingest_csv(r)

    # # object_ids = ["10837576_flight"]  # List of all object IDs
    # start_time = 1600443068.0
    # end_time =   1600446070.0
    # all_data = []

    # object_ids = []

    # pattern = "geo:*_flight:latlong"

    # # Retrieve matching keys and store them in a Python list
    # keys = list(r.scan_iter(match=pattern))
    # for k in keys:
    #     # stk = k.decode('utf-8')
    #     match = re.search(r'\d+', k)
    #     if match:
    #         number = match.group()
    #         # print(f"Extracted number: {number}")
    #         object_ids.append(number + "_flight")


    # for object_id in object_ids:
    #     altitude_key = f"geo:{object_id}:altitude"
    #     latlong_key = f"geo:{object_id}:latlong"
        
    #     altitude_data = r.zrangebyscore(altitude_key, start_time, end_time, withscores=True)
    #     # print(altitude_data)

    #     for altitude, timestamp in altitude_data:
    #         latlong = json.loads(r.hget(latlong_key, timestamp))

    #         all_data.append({
    #             "object_id": object_id,
    #             "timestamp": float(timestamp),
    #             "latitude": float(latlong["latitude"]),
    #             "longitude": float(latlong["longitude"]),
    #             "altitude": int(altitude)
    #         })

    # print("Queried Data for All Objects:")
    # print(all_data)

if __name__ == '__main__':
    run()