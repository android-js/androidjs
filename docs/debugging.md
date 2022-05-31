# Debugging Your App

After building an AndroidJS app you will have an .APK file. Install this file onto an emulator or an Android phone. For an emulator, you can drag and drop the .apk file onto the emulator screen. Or you can use adb.exe to install the file. Get a list of the devices, first.

`Note: If you're intsalling it onto a phone, make sure your phone is plugged into USB and debugging is enabled.`

Make sure adb.exe is in the enviroment path and run the command:
```powershell
adb devices
```
Then look at the output for the emulator or phone you're using and pass this device ID to adb for an install
```powershell
adb -s [device_id_here] install .\dist\[apk_filename].apk
```

Next, run your app, then open the Chrome browser and open the URL: chrome://inspect/#devices

After a short amount of time you should see a listing under the 'Remote Target' heading for your device. (The same device id as seen in the adb devices listing.)

Click on the 'inspect' link and it will open a Chrome inspection panel and you can debug your app as if it's a web page.

Additionally, to get errors from your back-end, main.js file you'll need to capture errors inside of a try/catch block and pass the errors through IPC to the front-end.

In main.js use this code block around anything you need to capture.
```javascript
	try {
		//Your code here
	} catch (err) {
		back.send("console", err.message);
	}
```

And in your front-end javascript files add an IPC catch for 'error' events from the back end. 
```javascript
front.on("console", function(message){
	console.log(message);
});
```

Now, errors from the nodejs back-end will show in the Chrome Inspection console.

To speed up your workflow you can use a bash or batch file (depending on your OS) to build your project, install the .apk, and run your app.

Here's an example powershell/batch file for windows that uses adb.exe.
```powershell
CALL androidjs build
CALL adb -s %1 install .\dist\%2.apk
Start-Sleep -Seconds 1
CALL adb -s %1 shell monkey -p com.androidjs.%2 1
powershell "[console]::beep(1000,500)"
```

Run it with: 
```powershell
./build.bat [android device id] [apk_filename]
```
