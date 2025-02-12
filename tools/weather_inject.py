import requests

def run():
    raw_data = requests.get('https://forecast.weather.gov/MapClick.php?lat=40.74&lon=-74&unit=0&lg=english&FcstType=json').json()

    # print(raw_data)

    formatted = {
        'area_details': raw_data['currentobservation'],
        'entry1': {
            'time':     raw_data['time']['startValidTime'][0],
            'name':     raw_data['time']['startPeriodName'][0],
            'label':    raw_data['time']['tempLabel'][0],
            'temp':     raw_data['data']['temperature'][0],
            'weather':  raw_data['data']['weather'][0],
            'text':     raw_data['data']['text'][0]
        }
        # 'entry2':
        # 'entry3':
        # 'entry4':
        # 'entry5':
        # 'entry6':
        # 'entry7':
        # 'entry8':       
        # 'entry9':
        # 'entry10':
        # 'entry11':
        # 'entry12':
        # 'entry13':
        # 'entry14':
    }

    print(formatted)

if __name__ == '__main__':
    run()