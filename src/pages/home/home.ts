import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
// import * as Croppie from "croppie";
// import { CroppieDirective } from "angular-croppie-module";
// import { Slim } from "../../app/slim/slim.angular2";
import Html2Img from "html2img";
// import * as $ from "jquery";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  slimOptions = {
    ratio: "1:1",
    download: true,
    // initialImage: "./test.jpg",
    service: this.slimService.bind(this),
    didInit: this.slimInit.bind(this)
  };
  slimInit(data: any, slim: any) {
    // slim instance reference
    console.log(slim);

    // current slim data object and slim reference
    console.log(data);
  }

  toImage(compo) {
    var el = document.getElementById(compo);
    console.log(el);
    Html2Img.save(el, {
      name: "download-file-name",
      type: "jpg"
    });
  }

  // called when upload button is pressed or automatically if push is enabled
  slimService(
    formdata: any,
    progress: any,
    success: any,
    failure: any,
    slim: any
  ) {
    // form data to post to server
    // set serviceFormat to "file" to receive an array of files
    console.log(formdata);

    // call these methods to handle upload state
    console.log(progress, success, failure);

    // reference to Slim instance
    console.log(slim);
  }

  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
}
