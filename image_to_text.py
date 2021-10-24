from flask import Flask, flash, request, jsonify
from werkzeug.utils import secure_filename
import os
import pytesseract
from PIL import Image
import re

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

# create flask object
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return ('.' in filename) and (filename.rsplit('.', 1)[1].lower()
                                  in ALLOWED_EXTENSIONS)

# pytesseract to extract text from image                                
def ocr_core(filename):
    text = pytesseract.image_to_string(Image.open(filename))
    return text

# process text
def preprocess_text(message):
    message = message.lower()
    processed_text = re.findall(r"(?i)\b[a-z]+\b", message)
    return " ".join(processed_text)

# create home page
@app.route('/')
def main():
    return 'Welcome to API'

# request for file upload
@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            flash('No file part')
            return 'No file part'

        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return 'No selected file'

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            # Save File
            file.save(os.path.join(app.config['UPLOAD_FOLDER'],
                                   'image.png'))
            # extract text from image
            text = ocr_core('./uploads/image.png')
            
            processed_text = preprocess_text(text)
            return jsonify({'message': processed_text})

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''
if __name__ == '__main__':
    # application.debug = False
    # application.run(host='0.0.0.0', port=8080)
    # application.run(debug=False)
    app.run(debug=True)