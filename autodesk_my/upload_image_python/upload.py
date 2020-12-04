# encoding=utf8

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import Select
import time
import os
# 前台开启浏览器模式
age = ["大","中","小"]
mobile = "15565319710"
def openChrome():
    # 加启动配置
    option = webdriver.ChromeOptions()
    option.add_argument('disable-infobars')
    # 打开chrome浏览器
    driver = webdriver.Chrome(chrome_options=option)
    return driver

# 授权操作
def operationAuth(item, driver):
    url = "http://tuya.buddyrobots.com/default.aspx"
    driver.get(url)
    # Step1 click "join_now" button
    driver.find_element_by_id("join_now").click()
    # Step2 Click "agree" button
    driver.find_element_by_id("agree").click()
    # Step3 upload file
    time.sleep(1) 
    driver.find_element_by_id('pickartfile').send_keys("/Users/apeng/Desktop/my/upload_image_python/image/"+item)
    time.sleep(5)   
    driver.find_element_by_id('go_next').click()
    # Step4 input detail info
    analyzedData = analyzeData(item)
    driver.find_element_by_id('aname').send_keys(analyzedData['aname'])
    driver.find_element_by_id('childname').send_keys(analyzedData['childname'])
    driver.find_element_by_id('birthday').send_keys(analyzedData['birthday'])
    driver.find_element_by_id('parentname').send_keys(analyzedData['parentname'])
    driver.find_element_by_id('mobile').send_keys(analyzedData['mobile'])
    driver.find_element_by_id('address').send_keys(analyzedData['address'])
    select = Select(driver.find_element_by_id('mode'))
    select.select_by_index(1)


# 获取图片名称
def getImageName(path):
    files = os.listdir(path)
    nameList = list(filter(isImage, files))
    return nameList

# 解析字符串
def analyzeData(data):
    personInfo = data.split(".")
    detailInfo = personInfo[0].split("-")
    print(detailInfo)
    obj = {
        "aname" : detailInfo[3],
        "childname": detailInfo[2],
        "birthday": getBirthday(detailInfo[1]),
        "parentname": detailInfo[2]+"妈妈",
        "mobile": mobile,
        "address": detailInfo[0]
    }
    return obj
# 获取日期
def getBirthday(date):
    if age[0] in date:
        return "2015/08/06"
    if age[1] in date:
        return "2016/08/07"
    if age[2] in date:
        return "2017/08/09"
# 判断文件是否为图片:    
def isImage(name):
    return name.endswith(('jpg','png','jpeg','bmp'))
# 方法主入口
if __name__ == '__main__':
    # 加启动配置
    uploadFileList = getImageName("/Users/apeng/Desktop/my/upload_image_python/image")
    names = locals()
    print(names)
    for i in range(10):
        names['driver' + str(i) ] = i
    for item in range(len(uploadFileList)):
        names[item] = openChrome()
        operationAuth(uploadFileList[item], names[item])
    

