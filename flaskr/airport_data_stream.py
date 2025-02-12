import csv

def ingest_airport_csv():
    stats = []
    ret_data = []
    
    path = '/Users/jb/projects/globe/data/'
    sources = ['airports-extended']

    for source in sources:
        file = open(path + source + ".csv", "r")
        reader = csv.reader(file)
        good_reads = 0
        bad_reads = 0

        for line in reader:
            try:
                ret_data.append({
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [line[7], line[6]]
                        },
                        "properties": {
                            "source":       source,
                            "airport_name": line[1],
                            "city":         line[2],
                            "country":      line[3],
                            "code_1":       line[4],
                            "code_2":       line[5],
                            "region":       line[11],
                            "type":         line[12]
                        }
                })
                good_reads += 1
            except:
                bad_reads += 1
        
            stats.append({
                "read_stats": {
                    "successful_reads": good_reads,
                    "failed_reads": bad_reads,
                    "total_reads": good_reads + bad_reads
                }
            })

        return stats, ret_data
    
