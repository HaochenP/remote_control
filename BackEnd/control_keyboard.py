from __future__ import print_function
import pyautogui
import time
from pycaw.pycaw import AudioUtilities, ISimpleAudioVolume

def increase_volume():
    sessions = AudioUtilities.GetAllSessions()
    for session in sessions:
        volume = session._ctl.QueryInterface(ISimpleAudioVolume)
        if session.Process and session.Process.name() == "vlc.exe":
            print("volume.GetMasterVolume(): %s" % volume.GetMasterVolume())
            volume.SetMasterVolume(0.2, None)

def close_tab():
    time.sleep(2)
    pyautogui.hotkey('ctrl', 'w')


def new_tab():
    pyautogui.hotkey('ctrl', 't')


def type(text):
    pyautogui.write(text)


def press_enter():
    pyautogui.press('enter')


def open_youtube():
    new_tab()
    type('www.youtube.com')
    press_enter()


def open_twitch():
    new_tab()
    type('www.twitch.tv')
    press_enter()

def mouse_click():
    pyautogui.click()


timer = 0

def mouse_down():
    x, y = pyautogui.position()
    pyautogui.moveTo(x, y+10, timer)

def mouse_up():
    x, y = pyautogui.position()
    pyautogui.moveTo(x, y-10, timer)

def mouse_left():
    x, y = pyautogui.position()
    pyautogui.moveTo(x-10, y, timer)

def mouse_right():
    x, y = pyautogui.position()
    pyautogui.moveTo(x+10, y, timer)


if __name__ == "__main__":
    #close_tab()
    #new_tab()
    #type('www.youtube.com')
    #press_enter()
    #open_youtube()
    #open_twitch()
    #increase_volume()
    #type("test")
    #mouse_down()
    #mouse_up()
    #mouse_left()
    #mouse_right()
    pass
