<template>
  <div>
    <MdDialogTitle>{{ title }}</MdDialogTitle>
    <MdDialogContent>
      <Plotly :data="cdataforwardcurve" :layout="layoutforwardcurve" :display-mode-bar="false"></Plotly>
    </MdDialogContent>
  </div>
</template>

<script>
import { Plotly } from 'vue-plotly'
import axios from 'axios'
// Import data master at the beginning!
import data_master from '../../data/data_master.json'

export default {
  name: 'DialogForwardCurve',
  props: {
    title: String,
    selectedCurr: String,
  },
  components: {
    Plotly,
  },
  data() {
    return {
      // JSON Data
      jsondatamaster: data_master,
      jsondataforwardcurve: null,
      // Chart data and layout objects
      cdataforwardcurve: [{
        x: [],
        y: [],
        type: 'bar'
      }],
      layoutforwardcurve: {
        title: 'USDCAD Forward Curve'
      },
      // Other data
      loaded: false,
    }
  },
  mounted: function() {
    // Initial Setup
    this.onCurrChange();
  },
  methods: {
    onCurrChange() {
      // When select input changes, reload data and update charts
      var selected = this.selectedCurr;
      if (selected == "Select here" || selected == "") {
        this.loaded = false;
      } else {
        this.getJSONData();
      }
    },
    getJSONData() {
      // Use Axios to retrieve JSON contents
      var selected = this.selectedCurr;
      var horizon = this.selectedHorizon;
      var fpathforwardcurve = "";
      const fpathroot = process.env.VUE_APP_DATA_PATH;
      let self = this;

      this.loaded = false;

      if (selected == "Select here") {
        return;
      } else {
        fpathforwardcurve = fpathroot + "forwardcurve_" + selected.toLowerCase() + ".json";
      }

      const axiosspot = axios.get(fpathforwardcurve);

      axios.all([axiosspot]).then(axios.spread((...responses) => {
        this.jsondataforwardcurve = responses[0].data;
        this.loadJSONData();
      })).catch(errors => {
        console.log(errors);
      })

      this.loaded = true;
    },
    loadJSONData() {
      // Commit retrieved data to charts
      var x = [];
      var y = [];
      var datacolhist = [];
      var datacoldist = [];
      var datacolcast = [];
      var selected = this.selectedCurr;
      var horizon = this.selectedHorizon;
      var chartlbl = "";

      // Forward curve
      x = [];
      y = [];
      for(var j in this.jsondataforwardcurve) {
        // x.push(this.jsondataforwardcurve[j].month);
        x.push(this.addMonths(new Date(),parseInt(this.jsondataforwardcurve[j].month.replace('M',''))))
        y.push(this.jsondataforwardcurve[j].forward);
      }
      chartlbl = selected + ' Forward Curve'
      this.cdataforwardcurve = [{
        x: x,
        y: y,
        type: 'bar',
        marker: {
          color: 'rgb(62, 17, 81)'
        }
      }]
      this.layoutforwardcurve = {
        title: {
          text: chartlbl,
          font: {
            family: 'Roboto',
            size: 18,
            color: '#350942'
          }
        },
        xaxis: {
          title: {
            text: 'Month',
            font: {
              family: 'Roboto',
              size: 16,
              color: '#350942'
            }
          },
          tickformat: '%B %Y',
        },
        annotations: [{
          xref: 'paper',
          yref: 'paper',
          x: 0,
          xanchor: 'left',
          y: 1,
          yanchor: 'bottom',
          text: 'Source: Bloomberg, Cambridge Calculations, ' + this.jsondatamaster.PeriodYear,
          showarrow: false
        }]
      }
    },
    addMonths(date, months) {
      // Utility function, offset month
      var d = date.getDate();
      date.setMonth(date.getMonth() + +months);
      if (date.getDate() != d) {
        date.setDate(0);
      }
      return date;
    },
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

      return [year, month, day].join('-');
    },
  }

}
</script>

<style>
.flex-container {
  display: flex;
  justify-content: center;
}

</style>