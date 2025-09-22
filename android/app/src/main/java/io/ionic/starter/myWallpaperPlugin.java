package io.ionic.starter;

import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
@CapacitorPlugin (name = "MyWallpaperPlugin")
public class myWallpaperPlugin extends plugin {
  @PluginMethod()
  public void execute(PluginCall call){
    JSObject resp = new JSObject();
    System.out.println("log plugin form: si");
    resp.put("message", "hola mundo");
    call.resolve(resp);
  }
}
