import eel
import cv2
import argparse
import time
import os
import glob
import random
import detectface as df
import emotion as em


frequency=2500
duration=1000
fishface = cv2.face.FisherFaceRecognizer_create()
parser=argparse.ArgumentParser(description="Options for emotions based music player(Updating the model)")
parser.add_argument("--update", help="Call for taking new images and retraining the model.", action="store_true")   

args=parser.parse_args() 
emotions=["angry", "happy", "sad", "neutral"]


eel.init('musicplayer/web')


count=0
@eel.expose
def getEmotion():
   
    count=0
    while True:
        count=count+1
        faceslice = df.detect_face(count)
        if args.update:
            em.update_model(emotions)
            break
        elif count==10:
            return em.identify_emotions()
            break



eel.start('main.html')