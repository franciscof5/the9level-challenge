new Vue({
  el: '#app',
  data: () => ({
    pagination: {
      sortBy: 'name' },

    selected: [],
    search: '',
    isMobile: false,
    notFound: true,
    headers: [{
      text: 'Project',
      align: 'left',
      value: 'name' 
    },
    {
      text: 'Private',
      value: 'private' 
    },
    {
      text: 'URL',
      value: 'url' 
    },
    {
      text: 'Description',
      value: 'description' 
    },
    {
      text: 'Language',
      value: 'language' 
    },
  ],

    desserts: [] 
  }),

  methods: {
    onResize() {
      if (window.innerWidth < 769)
      this.isMobile = true;else

      this.isMobile = false;
    },
    toggleAll() {
      if (this.selected.length) this.selected = [];else
      this.selected = this.desserts.slice();
    },
    changeSort(column) {
      console.log(column);
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    searchOnChange() {
      axios.get("https://api.github.com/users/"+this.search+"/repos")
      .then((r)=> {
        console.log("desserts", this.desserts);
        console.log("r.data", r.data);
        this.desserts = r.data;
      })
    }
  },
});