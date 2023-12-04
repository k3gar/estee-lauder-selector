const app = new Vue({
  el:'#app',
  data() {
    return {
      step:1,
      selection:{
        intensity:null,
        undertone:null,
        coverage:null,
        finish:null,
        skintype:null
      },
      DataList: []
    }
  },

  methods:{
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    submit() {
      this.step = 'last';
      
      fetch("assets/js/fundation_finder.json")
        .then(response => response.json())
        .then(data => (
          this.DataList = data.filter((item) => {
              if (item.intensidad.includes(this.selection.intensity) && 
              item.subtono.includes(this.selection.undertone) && 
              item.cobertura.includes(this.selection.coverage) && 
              item.acabado === this.selection.finish &&
              item.piel.includes(this.selection.skintype)
              ) {
                return item
              }
            }
          )
         )
        );

    }
  }
});