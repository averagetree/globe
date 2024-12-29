import redis

def setup():
    rdb = redis.Redis(host='localhost', port=6379, decode_responses=True)
    return rdb
   
def run(rdb):
    rdb.set('foo', 'bar')
    print(rdb.get('foo'))

if __name__ == '__main__':
    rdb = setup()
    run(rdb)