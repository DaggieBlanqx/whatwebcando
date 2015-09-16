// jshint devel:true

(function (global) {
  'use strict';

  let Feature = global.WWCD.Feature;

  let features = {
    localNotifications: new Feature({
      id: 'local-notifications',
      icon: 'mdi-notification-system-update',
      name: 'Local notifications',
      caniuse: 'notifications',
      supported: Feature.windowContains('Notification')
    }),
    pushNotifications: new Feature({
      id: 'push-notifications',
      icon: 'mdi-notification-tap-and-play',
      name: 'Push notifications',
      caniuse: 'serviceworkers',
      supported: Feature.navigatorContains('serviceWorker') && Feature.windowContains('PushManager') && Feature.containedIn(ServiceWorkerRegistration.prototype, 'showNotification'),
      urls: [
        {
          url: 'https://developers.google.com/web/updates/2015/03/push-notificatons-on-the-open-web',
          title: 'Push Notifications on the Open Web - Chrome tutorial'
        }
      ]
    }),
    backgroundTasks: new Feature({
      id: 'background-tasks',
      icon: 'mdi-action-settings-applications',
      name: 'Background processing',
      caniuse: 'serviceworkers',
      supported: Feature.navigatorContains('serviceWorker')
    }),
    touch: new Feature({
      id: 'touch',
      icon: 'mdi-content-gesture',
      name: 'Touch gestures',
      caniuse: 'touch',
      supported: Feature.windowContains('ontouchstart'),
      urls: [
        {url: 'http://www.html5rocks.com/en/mobile/touch/', title: 'Multi-touch Web Development'}
      ]
    }),
    manifest: new Feature({
      id: 'manifest',
      icon: 'mdi-content-archive',
      name: 'Homescreen installation',
      urls: [
        {
          url: 'https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android',
          title: 'Installable Web Apps with the WebApp Manifest in Chrome for Android'
        },
        {url: 'http://html5doctor.com/web-manifest-specification/', title: 'The Web Manifest specification'}
      ]
    }),
    foregroundDetection: new Feature({
      id: 'foreground-detection',
      icon: 'mdi-action-flip-to-front',
      name: 'Foreground detection',
      caniuse: 'pagevisibility',
      supported: Feature.containedIn(global.document, 'visibilityState')
    }),
    geolocation: new Feature({
      id: 'geolocation',
      icon: 'mdi-device-gps-fixed',
      name: 'Geolocation',
      caniuse: 'geolocation',
      supported: Feature.navigatorContains('geolocation')
    }),
    bluetooth: new Feature({
      id: 'bluetooth',
      icon: 'mdi-device-bluetooth',
      name: 'Bluetooth',
      supported: Feature.navigatorContains('bluetooth'),
      urls: [
        {url: 'https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web', title: 'Interact with BLE devices on the Web'}
      ]
    }),
    nfc: new Feature({
      id: 'nfc',
      icon: 'mdi-device-nfc',
      name: 'NFC',
      supported: Feature.navigatorContains('nfc')
    }),
    proximity: new Feature({
      id: 'proximity',
      icon: 'mdi-image-leak-add',
      name: 'Proximity sensors',
      caniuse: 'proximity',
      supported: Feature.windowContains('ondeviceproximity')
    }),
    networkInfo: new Feature({
      id: 'network-information',
      icon: 'mdi-device-wifi-tethering',
      name: 'Network information',
      supported: Feature.navigatorContains('connection')
    }),
    online: new Feature({
      id: 'online-state',
      icon: 'mdi-device-signal-cellular-connected-no-internet-3-bar',
      name: 'On-line state',
      caniuse: 'online-status',
      supported: Feature.navigatorContains('onLine')
    }),
    mediaCapture: new Feature({
      id: 'media-capture',
      icon: 'mdi-image-camera-alt',
      name: 'Media capturing',
      caniuse: 'stream',
      supported: Feature.navigatorContains('getUserMedia'),
      urls: [
        {url: 'http://www.html5rocks.com/en/tutorials/getusermedia/intro/', title: 'Capturing Audio & Video in HTML5'}
      ]
    }),
    wakeLock: new Feature({
      id: 'wake-lock',
      icon: 'mdi-action-lock',
      name: 'Wake lock',
      supported: Feature.navigatorContains('requestWakeLock')
    }),
    vibration: new Feature({
      id: 'vibration',
      icon: 'mdi-notification-vibration',
      name: 'Vibration',
      caniuse: 'vibration',
      supported: Feature.navigatorContains('vibrate')
    }),
    accelerometer: new Feature({
      id: 'accelerometer',
      icon: 'mdi-action-3d-rotation',
      name: 'Accelerometer',
      caniuse: 'deviceorientation',
      supported: Feature.windowContains('DeviceMotionEvent')
    }),
    batteryStatus: new Feature({
      id: 'battery-status',
      icon: 'mdi-device-battery-80',
      name: 'Battery status',
      caniuse: 'battery-status',
      supported: Feature.navigatorContains('getBattery')
    }),
    ambientLight: new Feature({
      id: 'ambient-light',
      icon: 'mdi-device-brightness-low',
      name: 'Ambient light',
      caniuse: 'ambient-light',
      supported: Feature.windowContains('ondevicelight')
    }),
    permissions: new Feature({
      id: 'permissions',
      icon: 'mdi-action-lock-open',
      name: 'Permissions',
      caniuse: 'permissions-api',
      supported: Feature.navigatorContains('permissions')
    }),
    files: new Feature({
      id: 'files',
      icon: 'mdi-device-sd-storage',
      name: 'File access',
      caniuse: 'fileapi',
      supported: Feature.windowContains('File'),
      urls: [
        {url: 'http://www.html5rocks.com/en/tutorials/file/dndfiles/', title: 'Reading files in JavaScript using the File APIs'}
      ]
    }),
    storage: new Feature({
      id: 'storage',
      icon: 'mdi-notification-folder-special',
      name: 'Offline storage',
      caniuse: 'namevalue-storage',
      supported: Feature.windowContains('indexedDB') || Feature.windowContains('localStorage')
    }),
    contacts: new Feature({
      id: 'contacts',
      icon: 'mdi-action-account-box',
      name: 'Contacts',
      supported: Feature.navigatorContains('contacts')
    }),
    quota: new Feature({
      id: 'quota',
      icon: 'mdi-notification-sim-card-alert',
      name: 'Quota management',
      supported: Feature.windowContains('storageInfo') || Feature.navigatorContains('temporaryStorageQuota'),
      urls: [
        {url: 'http://www.html5rocks.com/en/tutorials/offline/quota-research/', title: 'Working with quota on mobile browsers'}
      ]
    }),
    deviceOrientation: new Feature({
      id: 'device-orientation',
      icon: 'mdi-device-screen-rotation',
      name: 'Device orientation',
      caniuse: 'deviceorientation',
      supported: Feature.windowContains('DeviceOrientationEvent')
    }),
    rotationLock: new Feature({
      id: 'rotation-lock',
      icon: 'mdi-device-screen-lock-rotation',
      name: 'Rotation lock',
      supported: Feature.containedIn(global.screen, 'lockOrientation')
    }),
    presentation: new Feature({
      id: 'presentation',
      icon: 'mdi-hardware-tv',
      name: 'Presentation features',
      supported: Feature.navigatorContains('presentation')
    }),
    viewports: new Feature({
      id: 'viewports',
      icon: 'mdi-hardware-phonelink',
      name: 'Viewport adaptation',
      urls: [
        {url: 'https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/', title: 'An Introduction to Meta Viewport and @viewport'}
      ]
    }),
    speech: new Feature({
      id: 'speech-recognition',
      icon: 'mdi-av-mic',
      name: 'Speech recognition',
      caniuse: 'speech-recognition',
      supported: Feature.windowContains('SpeechRecognition'),
      urls: [
        {url: 'https://shaungallagher.github.io/say_restyle/', title: 'Demo - Edit the webpage with your voice'}
      ]
    }),
    clipboard: new Feature({
      id: 'clipboard',
      icon: 'mdi-content-content-paste',
      name: 'Clipboard (copy & paste)',
      caniuse: 'clipboard',
      supported: Feature.windowContains('ClipboardEvent'),
      urls: [
        {url: 'https://github.com/GoogleChrome/samples/tree/gh-pages/cut-and-copy', title: 'Sample code from Google Chrome'}
      ]
    }),
    inputModality: new Feature({
      id: 'input-modality',
      icon: 'mdi-hardware-mouse',
      name: 'Input modality',
      caniuse: 'css-media-interaction',
      urls: [
        {url: 'http://radar.oreilly.com/2015/08/proposing-css-input-modailty.html', title: 'Proposing CSS input modality'},
      ]
    }),
    autofill: new Feature({
      id: 'forms-autofill',
      icon: 'mdi-action-assignment-turned-in',
      name: 'Forms autofill',
      urls: [
        {url: 'https://html.spec.whatwg.org/multipage/forms.html#autofill', title: 'Specification draft'}
      ]
    })
  };

  let featuresGroups = [
    {
      heading: 'Behave like a native app',
      features: [features.localNotifications, features.pushNotifications, features.backgroundTasks, features.manifest, features.foregroundDetection]
    },
    {
      heading: 'Access what\'s around',
      features: [features.geolocation, features.bluetooth, features.nfc, features.proximity, features.ambientLight]
    },
    {
      heading: 'Access device features',
      features: [features.mediaCapture, features.networkInfo, features.online, features.vibration, features.batteryStatus]
    },
    {
      heading: 'Access the system',
      features: [features.storage, features.files, features.permissions, features.contacts, features.quota]
    },
    {
      heading: 'Input',
      features: [features.touch, features.speech, features.accelerometer, features.clipboard, features.inputModality]
    },
    {
      heading: 'Screen & output',
      features: [features.deviceOrientation, features.rotationLock, features.wakeLock, features.viewports, features.presentation]
    }
  ];

  if (global.WWCD.container) { // web run
    global.WWCD.container.configure(register => register.singletons({
      features: features,
      featuresGroups: featuresGroups
    }));
  } else { // build run
    global.features = features;
  }

})(function () {
  let global = typeof exports === 'object' ? exports : window;
  global.WWCD = global.WWCD || {};
  return global;
}());
