import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit, AfterViewInit {

  data = [
    [5000, 10000, 6785.71],
    [4000, 10000, 6825],
    [3000, 6500, 4463.33],
    [2500, 5600, 3793.83],
    [2000, 4000, 3060],
    [2000, 4000, 3222.33],
    [2500, 4000, 3133.33],
    [1800, 4000, 3100],
    [2000, 3500, 2750],
    [2000, 3000, 2500],
    [1800, 3000, 2433.33],
    [2000, 2700, 2375],
    [1500, 2800, 2150],
    [1500, 2300, 2100],
    [1600, 3500, 2057.14],
    [1500, 2600, 2037.5],
    [1500, 2417.54, 1905.85],
    [1500, 2000, 1775],
    [1500, 1800, 1650]
  ];

  cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
  barHeight = 50;


  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cargarGrafica();
  }

  cargarGrafica() {


    const option = {
      title: {
        text: '在中国租个房子有多贵？',
        subtext: '市中心一室月租费（数据来源：https://www.numbeo.com）'
      },
      legend: {
        show: true,
        data: ['价格范围', '均值']
      },
      grid: {
        top: 100
      },
      angleAxis: {
        type: 'category',
        data: this.cities
      },
      tooltip: {
        show: true,
        formatter: function (params) {
          var id = params.dataIndex;
          return this.cities[id] + '<br>最低：' + this.data[id][0] + '<br>最高：' + this.data[id][1] + '<br>平均：' + this.data[id][2];
        }
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        data: this.data.map(function (d) {
          return d[0];
        }),
        coordinateSystem: 'polar',
        stack: '最大最小值',
        silent: true
      }, {
        type: 'bar',
        data: this.data.map(function (d) {
          return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: '价格范围',
        stack: '最大最小值'
      }, {
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        },
        data: this.data.map(function (d) {
          return d[2] - 50;
        }),
        coordinateSystem: 'polar',
        stack: '均值',
        silent: true,
        z: 10
      }, {
        type: 'bar',
        data: this.data.map(function (d) {
          return 50 * 2
        }),
        coordinateSystem: 'polar',
        name: '均值',
        stack: '均值',
        barGap: '-100%',
        z: 10
      }],

    };
    echarts.init(document.getElementById('grafica')).setOption(option);
  }
}


