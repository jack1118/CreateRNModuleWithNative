package com.reactnativemdtawesomenativemodule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class AwesomeNativeModuleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AwesomeNativeModule"
    }

    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
    fun multiply(a: Int, b: Int, promise: Promise) {
    
      promise.resolve(a * b)
    
    }

    @ReactMethod
    fun divide(a: Int, b: Int, promise: Promise) {

      promise.resolve(a / b)

    }

    @ReactMethod
    fun add(a: Int, b: Int, promise: Promise) {

      promise.resolve(a + b)

    }

    @ReactMethod
    fun minus(a: Int, b: Int, promise: Promise) {

      promise.resolve(a - b)

    }

    
}
