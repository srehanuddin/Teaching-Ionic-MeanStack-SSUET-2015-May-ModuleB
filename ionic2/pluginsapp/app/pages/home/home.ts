import {Page} from 'ionic-angular';
import {Geolocation} from 'ionic-native';

import {Camera} from 'ionic-native';

import {Device} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  imageData
  
  constructor() {

  }
  
  getUserLocation(){
      alert("Test");
      
      
      Geolocation.getCurrentPosition().then((resp) => {
        //resp.coords.latitude
        //resp.coords.longitude
        console.log(resp)
      })
  }
  
  getDeviceInfo(){
      alert('Device UUID is: ' + Device.device.uuid);
      console.log(Device);
      console.log(Device.device);
  }
  
  getPicture(){
      alert("Get Picture Called");
      let option = {
          destinationType : Camera["DestinationType"].DATA_URL,
          allowEdit : false,
          targetWidth : 50
      }
      
      Camera.getPicture(option).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    //"data:image/jpeg;base64," + 
    let base64Image = imageData;
    this.imageData = base64Image;
        alert(base64Image);
    
    }, (err) => {
    });
      
  }
  
}
