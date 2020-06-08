const config = {
  pageSize: 10,

  calculateParam: function (currentPage) {
    if(currentPage) {
      return {
        offset: (currentPage - 1) * this.pageSize,
        limit: this.pageSize
      }
    }
  },
  getPageFromParam: ({offset, limit}) => {
    if(offset && limit) {
      return (offset) + 1
    }
  }
};
export default config;
