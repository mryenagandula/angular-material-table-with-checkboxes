import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AuditService } from 'src/app/apis/audit.service';
import { AuditEntry } from 'src/app/models/audit.model';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  constructor(private audit:AuditService) { }
  
  public dataSource: AuditEntry[];
  public fields = [
    "clientIp",
    "clientIpDetails",
    "createdAt",
    "email",
    "hostname",
    "serverIp",
    "serverIpDetails",
    "statusCode",
    "statusMessage",
    "updatedAt",
    "uri"
  ]
  public displayedColumns: any = ["uri",'email',"clientIp",'client_org',"serverIp",'server_org',"statusMessage","createdAt","updatedAt"]
  public totalCount=0;

  ngOnInit():void{
    this.getUsers(0,10)
  }

  public getUsers(pageIndex,pageSize){
    this.audit.getAudits(pageIndex,pageSize).subscribe((res:any)=>{
      console.log(res);
      this.dataSource = res.audits;
      this.totalCount = res.totalCount;
    },
    error=>{
      console.error(error.message);  
    })
  }

  public pageNavigate(event:PageEvent){
    this.getUsers(event.pageIndex,event.pageSize);
  }
}
