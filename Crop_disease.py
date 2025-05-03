from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from google.colab import drive
import numpy as np
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend integration

# Load your trained model
MODEL_PATH = 'crop_disease_mobilenet.h5'
model = load_model(MODEL_PATH)

# Define your class labels
class_labels = ["Curl_Virus", "Disease-free", "Early_blight", "Late_blight"]

# Optional: Define treatments per disease
treatment_dict = {
    "Curl_Virus": "Use recommended insecticides like Imidacloprid.",
    "Disease-free": "No disease detected. Maintain regular monitoring.",
    "Early_blight": "Apply fungicides like Chlorothalonil or Mancozeb.",
    "Late_blight": "Use Mancozeb 75% WP fungicide every 7–10 days."
}

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    img_file = request.files['image']
    img_path = os.path.join("temp", img_file.filename)
    os.makedirs("temp", exist_ok=True)
    img_file.save(img_path)

    try:
        img = image.load_img(img_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array /= 255.0

        predictions = model.predict(img_array)
        predicted_index = np.argmax(predictions)
        predicted_class = class_labels[predicted_index]
        confidence = float(np.max(predictions))

        treatment = treatment_dict.get(predicted_class, "No treatment info available.")

        return jsonify({
            'disease': predicted_class,
            'confidence': confidence,
            'treatment': treatment
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        os.remove(img_path)  # Clean up temp file

if __name__ == '__main__':
    app.run(debug=True)

