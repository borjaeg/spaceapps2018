from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/fires')
def get_data():

	data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {'name': 'temp',
      				 'value': 0.3},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.9310913085937499,
          41.68624562118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {'name': 'temp',
      				 'value': 2.5},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -0.7498168945312499,
          41.66367910784373
        ]
      }
    }
  ]
}
	return jsonify(data)

if __name__ == "__main__":
	app.run(debug=True, host= '0.0.0.0')