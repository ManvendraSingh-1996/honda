import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {

  date:any ;
  tableData: any;
  day:any;
  production:any;
  defectCount:any;
  
  defect_id: any
  pb_af_ae: any
  pb_af_ms: any
  pb_af_pa: any
  pb_af_total: any
  pb_af_we: any
  pb_pa_ms: any
  pb_pa_total: any
  pb_pa_we: any
  pt_ae_ma: any
  pt_ae_pq: any
  pt_ae_total: any
  pt_ma_dc: any
  pt_ma_ms: any
  pt_ma_total: any
  qc_vc_ae: any
  qc_vc_af: any
  qc_vc_pa: any
  qc_vc_total: any
  qc_vc_we: any

  private socket!: WebSocket;
  ngOnInit(): void {
    this.socket = new WebSocket('ws://192.168.0.211:8000/Dummy');
    this.socket.addEventListener('open', (event) => {
      console.log('WebSocket connection established.');
    });
    this.socket.addEventListener('message', (event) => {
      // console.log('Received message from WebSocket:', event);
      const backendData = JSON.parse(event.data);
      console.log('Received data from WebSocket:', backendData);
      this.defectCount = backendData.total_defect;
      this.day = backendData.day
      this.date = backendData.date
      this.production = backendData.production
      
      this.qc_vc_total = backendData.qc_vc_total;
      this.qc_vc_we = backendData.qc_vc_we;
      this.qc_vc_pa = backendData.qc_vc_pa;
      this.qc_vc_af = backendData.qc_vc_af;
      this.qc_vc_ae = backendData.qc_vc_ae;

      this.pt_ma_total = backendData.pt_ma_total;
      this.pt_ma_dc = backendData.pt_ma_dc;
      this.pt_ae_total = backendData.pt_ae_total;
      this.pt_ma_ms = backendData.pt_ma_ms;
      this.pt_ae_ma = backendData.pt_ae_ma;
      this.pt_ae_pq = backendData.pt_ae_pq;

      this.pb_pa_we = backendData.pb_pa_we;
      this.pb_pa_ms = backendData.pb_pa_ms;
      this.pb_pa_total = backendData.pb_pa_total;
      this.pb_af_we = backendData.pb_af_we;
      this.pb_af_total = backendData.pb_af_total;
      this.pb_af_pa = backendData.pb_af_pa;
      this.pb_af_ms = backendData.pb_af_ms;
      this.pb_af_we = backendData.pb_af_we;
      this.pb_af_ae = backendData.pb_af_ae;
    });
  }
}
