import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { AppComponent } from '../app.component';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  htmlSample: any;

  constructor(private activatedRoute: ActivatedRoute, 
              public appComponent : AppComponent, 
              public emailService : EmailService,
              public pdfGenerator: PDFGenerator) { 
    console.log(appComponent.appUserName);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }



}
