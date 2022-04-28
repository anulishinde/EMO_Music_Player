import cv2
import eel
import cv2
import argparse
import time
import os
import glob
import random
import emotion as em

video_capture=cv2.VideoCapture(0)
facecascade=cv2.CascadeClassifier("musicplayer\haarcascade_frontalface_default.xml")


def detect_face(count):
    clahe_image=grab_face(count)
    face=facecascade.detectMultiScale(clahe_image, scaleFactor=1.1, minNeighbors=15, minSize=(10, 10), flags=cv2.CASCADE_SCALE_IMAGE)
    if len(face)>=1:
        faceslice=em.crop(clahe_image, face)
        return faceslice
    else:
        print("No/Multiple faces detected!!, passing over the frame")


def grab_face(count):
    ret, frame=video_capture.read()
    cv2.imwrite('test.jpg', frame)
    cv2.imwrite("images/main%s.jpg" %count, frame)
    gray=cv2.imread('test.jpg',0)
    clahe=cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    clahe_image=clahe.apply(gray)
    return clahe_image



    