# Crop_Disease_Detection

# IoT-Enhanced Crop Disease Detection System 🌱

This project presents a **low-cost, multilingual, offline-operable crop disease detection system** designed to support farmers in rural and under-resourced agricultural regions. By combining **deep learning (MobileNetV2 CNN)** with **edge deployment** on Raspberry Pi, the system enables **real-time leaf disease diagnosis** without requiring internet connectivity.

The solution provides **text and audio-based guidance in both English and Bengali**, ensuring accessibility for farmers across different literacy levels.

## Key Features

| Feature | Description |
|--------|-------------|
| **On-Device Disease Detection** | Uses TensorFlow Lite optimized **MobileNetV2 CNN** to classify crop leaf diseases offline |
| **Camera-Based Image Capture** | Captures live leaf images using Pi Camera / external webcam |
| **Multilingual Output** | Displays and reads instructions in **English & Bengali** |
| **OLED Display + Speaker Output** | Shows text on-screen and narrates treatment steps |
| **No Internet Required** | Designed specifically for remote agricultural regions |
| **Environmentally Sustainable** | Helps reduce excessive pesticide usage |

---

## Machine Learning Overview

- **Model Type:** Convolutional Neural Network (CNN)
- **Architecture Used:** **MobileNetV2**
- **Training Paradigm:** **Supervised Learning**
- **Loss Function:** Categorical Cross Entropy  
- **Optimizer:** **Adam**
- **Deployment Format:** **TensorFlow Lite (.tflite)** for Raspberry Pi
- **Data Augmentation Techniques Used:**
  - Rotation
  - Zoom / Random Cropping
  - Horizontal Flip
  - Brightness & Contrast Adjustment
  - Normalization to `(0,1)`

---

## System Workflow

The overall system workflow from data input to user guidance is illustrated below:

![System Workflow](assets/flowchart.png)
