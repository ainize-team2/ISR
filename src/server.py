from flask import Flask, request, render_template
from predict import predict
from util import downloadImages, removeFiles, downloadImage, removeFile, getBase64, getRandomStr, IMAGE_PATH
import os, io
from flask_cors import CORS
from flask import send_file, jsonify

app = Flask(__name__, static_folder="../client/build/static", template_folder="../client/build")
cors = CORS(app, resources={
  r"/predict/*": {"origin": "*"},
})

@app.route('/healthz', methods=['GET'])
def healthz():
   return 'ok'

@app.route('/predict/url', methods=['POST'])
def url():
    localFilePath = ''
    output_file_path = ''
    try:
        url = request.json["url"]
        localFilePath = downloadImage(url)
        output_file_path = predict(localFilePath)
        callback = send_file(output_file_path, mimetype='image/jpeg')
        return callback, 200
    except Exception as e:
        print(str(e), flush=True)
        return {'error': str(e)}, 400
    finally:
        if (localFilePath != ''):
            removeFile(localFilePath)
        if (localFilePath != ''):
            removeFile(output_file_path)

@app.route('/predict/file', methods=['POST'])
def file():
    localFilePath = ''
    output_file_path = ''
    try:
        file = request.files['file']
        if not file:
            return {'error': "nofile"}, 400
        if file.content_type not in ['image/jpeg', 'image/jpg', 'image/png']:
            return {'error': "only support jpeg, jpg or png"}, 400
        localFilePath =  IMAGE_PATH + '/' + getRandomStr(15) + '.jpg'
        file.save(localFilePath)
        output_file_path = predict(localFilePath)
        callback = send_file(output_file_path, mimetype='image/jpeg')
        return callback, 200
    except Exception as e:
        print(str(e), flush=True)
        return {'error': str(e)}, 400
    finally:
        if (localFilePath != ''):
            removeFile(localFilePath)
        if (localFilePath != ''):
            removeFile(output_file_path)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def web(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)