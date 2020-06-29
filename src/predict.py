import numpy as np
from PIL import Image
from ISR.models import RDN, RRDN
from util import getRandomStr
import os

IMAGE_PATH = os.path.dirname(os.path.realpath(__file__)) + "/images"
model = RRDN(weights="gans")
model.model._make_predict_function()

def predict(images):
    img = Image.open(images)
    img = img.convert('RGB')
    lr_img = np.array(img)
    sr_img = model.predict(lr_img)
    output = Image.fromarray(sr_img)
    output_file_path = IMAGE_PATH + getRandomStr(15) + '.jpg'
    output.save(output_file_path)
    
    return output_file_path
    
