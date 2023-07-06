import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = () => {
  const series = [
    {
      name: 'Actual',
      data: [
        {
          x: '2011',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        // Rest of the data...
      ]
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'bar'
    },
    plotOptions: {
      bar: {
        columnWidth: '60%'
      }
    },
    colors: ['#00E396'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ['Actual', 'Expected'],
      markers: {
        fillColors: ['#00E396', '#775DD0']
      }
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default ApexChart;