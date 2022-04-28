import cv2
import eel
import cv2
import argparse
import time
import os
import glob
import random
import detectface as df

fishface = cv2.face.FisherFaceRecognizer_create()
font = cv2.FONT_HERSHEY_SIMPLEX
'''try:
    fishface.load("emotion_detection_model_fisherface_algorithm\emotion_classifier_model.xml")
except:
    print("No trained model found... --update will create one.")'''

facedict={}

def crop(clahe_image, face):
    for (x, y, w, h) in face:
        faceslice=clahe_image[y:y+h, x:x+w]
        faceslice=cv2.resize(faceslice, (350, 350))
        facedict["face%s" %(len(facedict)+1)]=faceslice
    return faceslice

emotions=["angry", "happy", "sad", "neutral"]






def save_face(emotion):
    print("\n\nLook "+emotion+" untill the timer expires and keep the same emotion for some time.")
    print('\a')
    
    
    for i in range(0, 5):
        print(5-i)
        time.sleep(1)
    
    while len(facedict.keys())<16:
        df.detect_face()

    for i in facedict.keys():
        path, dirs, files = next(os.walk("dataset/%s" %emotion))
        file_count = len(files)+1
        cv2.imwrite("dataset/%s/%s.jpg" %(emotion, (file_count)), facedict[i])
    facedict.clear()

def update_model(emotions):
    print("Update mode for model is ready")
    checkForFolders(emotions)
    
    for i in range(0, len(emotions)):
        save_face(emotions[i])
    print("Collected the images, looking nice! Now updating the model...")
    #Update_Model.update(emotions)
    print("Model train successful!!")

def checkForFolders(emotions):
    for emotion in emotions:
        if os.path.exists("dataset/%s" %emotion):
            pass
        else:
            os.makedirs("dataset/%s" %emotion)

def identify_emotions():
    prediction=[]
    confidence=[]
    fishface.read("musicplayer\\model.xml")
    for i in facedict.keys():
        pred, conf=fishface.predict(facedict[i])
        cv2.imwrite("images/%s.jpg" %i, facedict[i])
        prediction.append(pred)
        confidence.append(conf)
    output=emotions[max(set(prediction), key=prediction.count)]    
    print("You seem to be %s" %output) 
    facedict.clear()
    return output;
